use std::fmt::Display;
use hdf5::Error;
use polars_error::PolarsError;

pub type HdfResult<T> = Result<T, PolarsHdfError>;


#[derive(Debug)]
pub enum PolarsHdfError {
    Hdf5Error(String),
    ComputeError(String),
    Empty(String)

}

impl From<hdf5::Error> for PolarsHdfError {
    fn from(value: Error) -> Self {
        let s = format!("hdf5 access failed with: {value}");
        PolarsHdfError::Hdf5Error(s)
    }
}
#[macro_export]
macro_rules! hdf_err {
    ($variant:ident: $fmt:literal $(, $arg:expr)* $(,)?) => {
        $crate::error::__private::must_use(
            $crate::error::PolarsHdfError::$variant(format!($fmt, $($arg),*).into())
        )
    };
    ($variant:ident: $err:expr $(,)?) => {
        $crate::error::__private::must_use(
            $crate::error::PolarsHdfError::$variant($err.into())
        )
    };
}

#[macro_export]
macro_rules! hdf_bail {
    ($($tt:tt)+) => {
        return Err($crate::hdf_err!($($tt)+))
    };
}

#[macro_export]
macro_rules! hdf_ensure {
    ($cond:expr, $($tt:tt)+) => {
        if !$cond {
            $crate::hdf_bail!($($tt)+);
        }
    };
}


// Not public, referenced by macros only.
#[doc(hidden)]
pub mod __private {
    #[doc(hidden)]
    #[inline]
    #[cold]
    #[must_use]
    pub fn must_use(error: crate::error::PolarsHdfError) -> crate::error::PolarsHdfError {
        error
    }
}
