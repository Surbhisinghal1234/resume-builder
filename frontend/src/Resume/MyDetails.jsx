import React from "react";
import PersonIcon from "@mui/icons-material/Person";

function MyDetails() {
  return (
    <>
      <div className=" rounded-full bg-slate-300 h-[8rem] w-[8rem] flex items-center justify-center mt-[6rem]">
  
          <PersonIcon sx={{fontSize:"4rem"}}  />

      </div>
      <div className="flex gap-[1rem] flex-col">

      
      <div className="flex gap-[4rem]">

      <label htmlFor="">Name</label>
      <input type="text" className=" border-2 border-black rounded-sm px-5" />
      </div>
      <div className="flex gap-[4.5rem]">

      <label htmlFor="">Role</label>
      <input type="text" className=" border-2 border-black rounded-xl px-5 w-[6rem]" />
      </div>

      <div className="flex gap-[2.4rem]">

      <label htmlFor="">Total Exp:</label>
      <input type="text" className=" border-2 border-black rounded-md px-5 w-[6rem]" />
      </div>
      </div>

    </>
  );
}

export default MyDetails;
