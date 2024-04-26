import React from "react";

function Resume() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-center gap-[2rem]">
            <div className=" ">
              <h1 className="text-[2rem] font-bold">LOGO</h1>
            </div>

            <div className="text-left">
              <h3>Resume</h3>
              <p>Managemnet System</p>
            </div>
          </div>

          <div>
            <input
              type="text"
              placeholder="Search"
              className=" border-solid border-gray-400 border-2 rounded-lg px-2 py-1 "
            />
          </div>
        </div>

       
      </div>
    </>
  );
}

export default Resume;
