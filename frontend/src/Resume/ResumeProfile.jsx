import React,{useContext,useState,useEffect} from "react";
import { inputContext } from "./Main";


function ResumeProfile() {
  const {name, setName,role, setRole,totalExp, setTotalExp,message,setMessage,image,setImage}= useContext(inputContext)

 
  return (
    <>
      <div className="border-l border-gray-400 "></div>
      {/* <div className="flex flex-col justify-start">

      <div className="flex gap-4">
        <img className="bg-red h-[4rem] w-[4rem]" src="" alt="" />
        <div>
          <h2>Name:</h2>
          <p>Role:</p>
          <p>Total Exp:</p>
        </div>
      </div>

  <div className="">
    <h1>ABOUT ME</h1>
    <div className=""></div>

  </div>
 </div> */}
      <div className="w-1/2 px-[2rem]">
        <div className="flex  items-center mt-[2rem] gap-[2rem] ">
          <div ><img src={image} alt="" className=" h-[6rem] w-[6rem] border-2 border-slate-300 bg-slate-300 rounded-full" /></div>
          <div className=" flex gap-[5px] flex-col font-medium">
            <h2>Name: <span className="pl-2 font-normal">{name}</span> </h2>
            <p>Role: <span  className="pl-2 font-normal">{role}</span> </p>
            <p>Total Exp: <span  className="pl-2 font-normal">{totalExp}</span> </p>
          </div>
        </div>

        <div className="flex gap-[2rem] mt-8">
          <div className="">
            <h1 className="text-[17px] font-bold mb-1">ABOUT ME</h1>
            <div className="bg-blue-200 w-[200px] h-[3px]">
              <div className="bg-blue-600 w-[50px] h-[3px]"></div>
            </div>
            <p className="min-h-[10rem] max-h-auto w-[12.5rem]">{message}</p>
          </div>

          <div className="">
            <h1 className="text-[17px] font-bold mb-1">WORK HISTORY</h1>
            <div className="bg-blue-200 w-[200px] h-[3px]">
              <div className="bg-blue-600 w-[50px] h-[3px]"></div>
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="text-[17px] font-bold mb-1">SKILL & PROFICIENCIES</h1>
          <div className="bg-blue-200 w-[200px] h-[3px]">
            <div className="bg-blue-600 w-[50px] h-[3px]"></div>
          </div>
          <p className="min-h-[10rem] max-h-auto"></p>
        </div>
        <div className="flex gap-[2rem]">
          <div className="">
            <h1 className="text-[17px] font-bold mb-1">
              CERTIFICATION
            </h1>
            <div className="bg-blue-200 w-[200px] h-[3px]">
              <div className="bg-blue-600 w-[50px] h-[3px]"></div>
            </div>
            <p className="min-h-[10rem] max-h-auto"></p>
          </div>
          <div className="">
            <h1 className="text-[17px] font-bold mb-1">
              EDUCATION
            </h1>
            <div className="bg-blue-200 w-[200px] h-[3px]">
              <div className="bg-blue-600 w-[50px] h-[3px]"></div>
            </div>
            <p className="min-h-[10rem] max-h-auto"></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeProfile;
