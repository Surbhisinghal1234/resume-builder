import React, { useState, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";

function MyDetails() {

    
  const [image, setImage] = useState("");
  //   const [editable, setEditable] = useState(true)
  const [photo, setphoto] = useState();

  function handleChangeImage(e) {
    if (e.target.files.length !== 0) {
      setphoto(e?.target?.files[0]);
    }
  }
  //   const handleEdit = () => {
  //     setEditable(!editable);
  //   };
  useEffect(() => {
    if (photo) {
      console.log("first");
      setImage(URL?.createObjectURL(photo));
    }
  }, [photo]);
  return (
    <>
      {/* <div className=" rounded-full bg-slate-300 h-[8rem] w-[8rem] flex items-center justify-center mt-[6rem]">
  
          <PersonIcon sx={{fontSize:"4rem"}}  />

      </div> */}

      <div className="mt-[3rem] mb-5">
        <h2 className="font-bold text-2xl my-5">Upload Photo</h2>

        <div className="flex justify-center items-center">
          <input type="file" onChange={handleChangeImage} />
          {/* disabled={!editable} */}
          {image && (
            <img
              // type="image"
              className="w-[10rem] h-[10rem] "
              src={image}
            />
          )}
        </div>
      </div>
      <div className="flex gap-[1rem] flex-col">
        <div className="flex gap-[4rem]">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className=" border-2 border-black rounded-sm px-5"
          />
        </div>
        <div className="flex gap-[4.5rem]">
          <label htmlFor="">Role</label>
          <input
            type="text"
            className=" border-2 border-black rounded-xl px-5 w-[6rem]"
          />
        </div>

        <div className="flex gap-[2.4rem]">
          <label htmlFor="">Total Exp:</label>
          <input
            type="text"
            className=" border-2 border-black rounded-md px-5 w-[6rem]"
          />
        </div>
      </div>
    </>
  );
}

export default MyDetails;
