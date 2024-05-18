from __future__ import annotations

import compileall
import subprocess
import sys
from pathlib import Path

import pytest

import polars as pl
from polars import selectors as cs

pytestmark = pytest.mark.benchmark()


def _import_time_from_frame(tm: pl.DataFrame) -> int:
    return int(
        tm.filter(pl.col("import").str.strip_chars() == "polars")
        .select("cumulative_time")
        .item()
    )


def _import_timings() -> bytes:
    # assemble suitable command to get polars module import timing;
    # run in a separate process to ensure clean timing results.
    cmd = f'{sys.executable} -S -X importtime -c "import polars"'
    output = subprocess.run(cmd, shell=True, capture_output=True).stderr
    if b"Traceback" in output:
        msg = f"measuring import timings failed\n\nCommand output:\n{output.decode()}"
        raise RuntimeError(msg)
    return output.replace(b"import time:", b"").strip()


def _import_timings_as_frame() -> tuple[pl.DataFrame, int]:
    df_import = (
        pl.read_csv(
            source=_import_timings(),
            separator="|",
            has_header=True,
            new_columns=["own_time", "cumulative_time", "import"],
        )
        .with_columns(cs.ends_with("_time").str.strip_chars().cast(pl.UInt32))
        .select("import", "own_time", "cumulative_time")
        .reverse()
    )
    polars_import_time = _import_time_from_frame(df_import)

    return df_import, polars_import_time


def test_polars_import() -> None:
    # up-front compile '.py' -> '.pyc' before timing
    polars_path = Path(pl.__file__).parent
    compileall.compile_dir(polars_path, quiet=1)

    # note: reduce noise by allowing up to 'n' tries (but return immediately if/when
    # a qualifying time is achieved, so we don't waste time running unnecessary tests)
    df_import, polars_import_time = _import_timings_as_frame(n_tries=10)

    with pl.Config(
        # get a complete view of what's going on in case of failure
        tbl_rows=250,
        fmt_str_lengths=100,
        tbl_hide_dataframe_shape=True,
    ):
        # ensure that we have not broken lazy-loading (numpy, pandas, pyarrow, etc).
        lazy_modules = [
            dep for dep in pl.dependencies.__all__ if not dep.startswith("_")
        ]
        for mod in lazy_modules:
            not_imported = not df_import["import"].str.starts_with(mod).any()
            if_err = f"lazy-loading regression: found {mod!r} at import time"
            assert not_imported, f"{if_err}\n{df_import}"
