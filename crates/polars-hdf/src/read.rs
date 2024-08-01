use std::path::PathBuf;
use hdf5::Dataset;
use hdf5::types::{FixedAscii, FixedUnicode, IntSize};
use arrow::array::{ArrayRef, MutableBinaryViewArray, PrimitiveArray, Utf8Array, Utf8ViewArray};
use crate::error::*;
use crate::hdf_bail;

fn read_array(ds: &Dataset) -> HdfResult<ArrayRef> {
    use hdf5::types::TypeDescriptor::*;
    dbg!(ds.name());
    match ds.dtype()?.to_descriptor()? {
        FixedAscii(n) => {
            let arr = ds.read_1d::<hdf5::types::FixedAscii<1>>()?;
            let arr = Utf8ViewArray::from_slice_values(arr.as_slice().unwrap());
            Ok(arr.boxed())
        }
       Integer(size)  => {
           match size {
               IntSize::U8 => {
                   let arr = ds.read_raw::<i64>()?;
                   Ok(PrimitiveArray::from_vec(arr).boxed())
               },
               IntSize::U4 => {
                   let arr = ds.read_raw::<i32>()?;
                   Ok(PrimitiveArray::from_vec(arr).boxed())
               },
               IntSize::U2 => {
                   let arr = ds.read_raw::<i16>()?;
                   Ok(PrimitiveArray::from_vec(arr).boxed())
               },
               IntSize::U1 => {
                   let arr = ds.read_raw::<i8>()?;
                   Ok(PrimitiveArray::from_vec(arr).boxed())
               },
           }
       }
        VarLenArray(t) => {
            match &*t {
                Unsigned(size) => {
                    match size {
                        IntSize::U1 => {
                            let arr = ds.read_raw::<hdf5::types::VarLenArray<u8>>()?;
                            arr[0]
                            dbg!(arr);

                            todo!()
                        },
                        _ => todo!()
                    }
                },
                _ => todo!()
            }

        },
        dt => {
            dbg!(dt);
            todo!()
        }

    }
}

struct HdfReader {
    path: PathBuf,
    key: Option<String>
}

impl HdfReader {
    fn read(&self) -> HdfResult<()> {
        let f = hdf5::File::open(&self.path).unwrap();

        let members = f.member_names()?;

        let Some(key) = members.first() else { hdf_bail!(Empty: "could not find any datasets") };
        let group = f.group(key)?;
        let members = group.member_names()?;
        dbg!(&members);

        let ds =group.dataset(&members[0])?;
        let names = read_array(&ds)?;
        dbg!(names);

        // let ds =group.dataset(&members[3])?;
        // dbg!(ds.name());
        // dbg!(ds.attr_names(),  ds.attr("PSEUDOATOM")?.dtype()?.to_descriptor()?, ds.attr("PSEUDOATOM")?.read_scalar::<FixedUnicode<32>>()?);
        //
        // panic!();

        let mut columns = vec![];
        for i in 1..members.len() {
            let ds =group.dataset(&members[i])?;
            let col = read_array(&ds)?;
            columns.push(col);
        }



        Ok(())
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn test_reader() {
        let hf = HdfReader {
            path: PathBuf::from("/home/ritchie46/Downloads/data.h5"),
            key: None
        };

        hf.read().unwrap()
    }

}