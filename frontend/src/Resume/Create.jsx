import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";

function Create() {
  return (
    <>
    <div className="container mx-auto">


      <Link to="/new-resume"
      >
        <div className="border-[1.5px] border-solid border-lime-600 inline-block px-3 py-2 rounded-xl mt-5 text-black">
          <h1 className="text-center">
            <AddCircleOutlineIcon />
          </h1>
          <h1>Create New</h1>
        </div>
      </Link>
      </div>
    </>
  );
}

export default Create;
