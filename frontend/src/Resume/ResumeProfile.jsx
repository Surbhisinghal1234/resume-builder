import React, { useContext, useState, useEffect } from "react";
import { inputContext } from "./Main";

function ResumeProfile() {
  const {
    name,
    setName,
    role,
    setRole,
    totalExp,
    setTotalExp,
    message,
    setMessage,
    image,
    setImage,
    input,
    setInput,
    workExperience,
    setWorkExperience,
  } = useContext(inputContext);

  const technologyStack = workExperience?.technologyStack || [];
  const projectResponsibility = workExperience?.projectResponsibility || [];

  // console.log(
  //   name,
  //   role,
  //   totalExp,
  //   message,
  //   image,
  //   input,
  //   workExperience,
  //   "40"
  // );
  // console.log(inputContext,"27")
  // const dataSave = {
  //   details: {
  //     image: image,
  //     name: name,
  //     role: role,
  //     totalExp: totalExp,
  //   },
  //   AboutMe: {
  //     message: message,
  //     pointers: input,
  //   },
  //   workExperience: workExperience,
  // };

  // console.log(dataSave, "4");

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("http://localhost:8000/send", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({dataSave}),
  //   });
  // }
  return (
    <>

    <div method="post">

      <div className="border-l border-gray-400 "></div>

      <div className="w-1/2 px-[2rem]">
        <div className="flex  items-center mt-[2rem] gap-[2rem] ">
          <div>
            <img
              src={image}
              alt=""
              className=" h-[6rem] w-[6rem] border-2 border-slate-300 bg-slate-300 rounded-full"
            />
          </div>
          <div className=" flex gap-[5px] flex-col font-medium">
            <h2>
              Name: <span className="pl-2 font-normal">{name}</span>{" "}
            </h2>
            <p>
              Role: <span className="pl-2 font-normal">{role}</span>{" "}
            </p>
            <p>
              Total Exp: <span className="pl-2 font-normal">{totalExp}</span>{" "}
            </p>
          </div>
        </div>

        <div className="flex gap-[2rem] mt-8">
          <div className="">
            <h1 className="text-[1.3rem] font-bold mb-1">ABOUT ME</h1>
            <div className="bg-blue-200 w-[200px] h-[3px]">
              <div className="bg-blue-600 w-[50px] h-[3px]"></div>
            </div>
            <p className="min-h-[8rem] max-h-auto w-[12.5rem] mt-3">
              {message}
            </p>
            <ul className="flex flex-wrap list-disc mt-2">
              {input?.map((item, index) => {
                if (item !== "") {
                  return (
                    <li
                      key={index}
                      className="mr-2 w-[6rem] text-[1.1rem] font-medium"
                    >
                      {item}
                    </li>
                  );
                }
              })}
            </ul>
          </div>

          <div className="">
            <h1 className="text-[1.3rem] font-bold mb-1">WORK HISTORY</h1>
            <div className="bg-blue-200 w-[200px] h-[3px]">
              <div className="bg-blue-600 w-[50px] h-[3px]"></div>
            </div>
            <div>
              {workExperience?.clientDescription && (
                <p>
                  <span className="font-medium mr-1">Client:</span>{" "}
                  {workExperience.clientDescription}
                </p>
              )}

              {workExperience?.country && (
                <p>
                  {" "}
                  <span className="font-medium mr-1">Country: </span>
                  {workExperience.country}
                </p>
              )}

              {workExperience?.projectName && (
                <p>
                  {" "}
                  <span className="font-medium mr-1">Project Name: </span>
                  {workExperience?.projectName}
                </p>
              )}
              {workExperience.roleWork && (
                <p>
                  <span className="font-medium mr-1">RoleWork: </span>
                  {workExperience?.roleWork}
                </p>
              )}
              {workExperience.startDate && (
                <p>
                  {" "}
                  <span className="font-medium mr-2">StartDate:</span>
                  {workExperience?.startDate}
                </p>
              )}
              {workExperience.endDate && (
                <p>
                  {" "}
                  <span className="font-medium mr-2">EndDate:</span>
                  {workExperience?.endDate}
                </p>
              )}
              {/* <p>
                {formData?.startDate} {formData?.endDate}
              </p> */}
              {workExperience.businessSolution && (
                <p>
                  <span className="font-medium mr-2">Business Solution:</span>
                  {workExperience?.businessSolution}
                </p>
              )}

              <ul className="flex  flex-wrap gap-x-[.7rem] gap-y-2 mt-2 ml-3">
                {technologyStack?.map((item, index) => {
                  if (item !== "") {
                    return (
                      <li
                        key={index}
                        className="border-[2.4px] text-gray-600 border-gray-500 min-w-[5rem] px-3 py-[2px] rounded-full"
                      >
                        {item}
                      </li>
                    );
                  }
                })}
              </ul>

              {/* {formData.technologyStack && (
                <p>
                  <span>Business Solution</span>
                  {formData?.technologyStack}
                </p>
              )} */}
              {/* {formData.projectResponsibility && (
                <p>
                  <span className="font-medium mr-1">Project Responsibility: </span>
                  {formData?.projectResponsibility}
                </p>
              )} */}

              <ul className="flex list-disc flex-col gap-x-[.7rem] gap-y-2 mt-2 ml-3">
                {projectResponsibility?.map((item, index) => {
                  if (item !== "") {
                    return (
                      <li key={index} className="ml-3 text-gray-600  ">
                        {item}
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h1 className="text-[1.3rem] font-bold mb-1">
            SKILL & PROFICIENCIES
          </h1>
          <div className="bg-blue-200 w-[200px] h-[3px]">
            <div className="bg-blue-600 w-[50px] h-[3px]"></div>
          </div>
          <p className="min-h-[10rem] max-h-auto"></p>
        </div>
        <div className="flex gap-[2rem]">
          <div className="">
            <h1 className="text-[1.3rem] font-bold mb-1">CERTIFICATION</h1>
            <div className="bg-blue-200 w-[200px] h-[3px]">
              <div className="bg-blue-600 w-[50px] h-[3px]"></div>
            </div>
            <p className="min-h-[10rem] max-h-auto"></p>
          </div>
          <div className="">
            <h1 className="text-[1.3rem] font-bold mb-1">EDUCATION</h1>
            <div className="bg-blue-200 w-[200px] h-[3px]">
              <div className="bg-blue-600 w-[50px] h-[3px]"></div>
            </div>
            <p className="min-h-[10rem] max-h-auto"></p>
          </div>
        </div>
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button> */}
      </div>

      <div className="mt-5"></div>
    </div>

    </>
  );
}

export default ResumeProfile;
