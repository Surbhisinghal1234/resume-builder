import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { inputContext } from "./Main";

function WorkExperiences() {
  const { workExperience, setWorkExperience } = useContext(inputContext);
  const technologyStack = workExperience?.technologyStack || [];
  const projectResponsibility = workExperience?.projectResponsibility || [];


  // const { technologyStack } = formData;

  function handleInput(e, index, value) {
    e.preventDefault();
    const updatedFormData = { ...workExperience };
    updatedFormData.technologyStack[index] = value;
    setWorkExperience(updatedFormData);
  }
  function handleAdd() {
    const updatedFormData = { ...workExperience };
    updatedFormData.technologyStack.push("");
    setWorkExperience(updatedFormData);
  }
  function handleResponsibility(e, index, value) {
    e.preventDefault();
    const updatedFormData = { ...workExperience };
    updatedFormData.projectResponsibility[index] = value;
    setWorkExperience(updatedFormData);
  }
  function handlePlus() {
    const updatedFormData = { ...workExperience };
    updatedFormData.projectResponsibility.push("");
    setWorkExperience(updatedFormData);
  }

  return (
    <>
      <div className="mx-4">
        <h3 className="mt-[1rem] mb-[2rem] font-medium text-xl">
          Work Experience <InfoIcon />{" "}
        </h3>
        {/* <form action=""> */}
        <div className="flex justify-left gap-[3rem] items-center mt-[1rem]">
          <label>Client Description</label>
          <input
            type="text"
            value={workExperience.clientDescription}
            onChange={(e) =>
              setWorkExperience((pre) => ({
                ...pre,
                clientDescription: e.target.value,
              }))
            }
            className="border-2 border-gray-500 rounded h-[2.5rem] w-[60%] px-3"
          />
        </div>

        <div className="flex justify-left gap-[7.2rem] items-center mt-[1rem]">
          <label>Country</label>
          <input
            type="text"
            value={workExperience.country}
            onChange={(e) =>
              setWorkExperience((pre) => ({
                ...pre,
                country: e.target.value,
              }))
            }
            className="border-2 border-gray-500 rounded h-[2.5rem]  w-[60%] px-3"
          />
        </div>

        <div className="flex justify-left gap-[4.8rem] items-center mt-[1rem]">
          <label>Project Name</label>
          <input
            type="text"
            value={workExperience.projectName}
            onChange={(e) =>
              setWorkExperience((pre) => ({
                ...pre,
                projectName: e.target.value,
              }))
            }
            className="border-2 border-gray-500 rounded h-[2.5rem]  w-[60%] px-3"
          />
        </div>

        <div className="flex justify-left gap-[9rem] items-center mt-[1rem]">
          <label>Role</label>
          <div className="flex justify-left gap-[1rem] items-center">
            {/* <input type="text" className='border-2 border-gray-500  h-[2.5rem] w-[6rem] rounded-full' /> */}
            <input
              type="text"
              value={workExperience.roleWork}
              onChange={(e) =>
                setWorkExperience((pre) => ({
                  ...pre,
                  roleWork: e.target.value,
                }))
              }
              className="border-2 border-gray-500  px-2 py-1 w-[6rem] rounded"
            />
            {/* <button>
        <AddCircleOutlineIcon />
      </button> */}
          </div>
        </div>

        <div className="flex justify-left gap-[7rem] items-center mt-[1rem]">
          <label>Duration</label>
          <div className="flex justify-left gap-[1rem] items-center">
            <input
              type="date"
              value={workExperience.startDate}
              onChange={(e) =>
                setWorkExperience((pre) => ({
                  ...pre,
                  startDate: e.target.value,
                }))
              }
              className="border-2 border-gray-500 rounded w-[9rem] px-2 py-1"
            />
            <input
              type="date"
              value={workExperience.endDate}
              onChange={(e) =>
                setWorkExperience((pre) => ({
                  ...pre,
                  endDate: e.target.value,
                }))
              }
              className="border-2 border-gray-500 rounded py-1 px-2 w-[9rem]"
            />
          </div>
        </div>

        <div className="flex justify-left gap-[3rem] items-center mt-[1rem]">
          <label>Business Solution</label>
          <textarea
            type="text"
            onChange={(e) =>
              setWorkExperience((pre) => ({
                ...pre,
                businessSolution: e.target.value,
              }))
            }
            className="border-2 border-gray-500 rounded h-[7rem]  w-[60%] px-3"
          />
        </div>

        <div className="flex justify-left gap-[3.6rem] items-center mt-[1rem]">
          <label>Technology Stack</label>
          <div className="flex justify-left gap-[1rem] items-center">
            {/* <input
              type="text"
              className="border-2 border-gray-500  h-[2.5rem] w-[6rem] rounded-full"
            /> */}
            <div className="flex justify-center flex-wrap gap-4">
              {technologyStack.map((item, index) => (
                <div key={index} className="">
                  <input
                    className="border-2 border-gray-500 min-w-[5rem] max-w-[6rem] px-3 py-1 rounded-full"
                    type="text"
                    placeholder=""
                    value={item}
                    onChange={(e) => {
                      handleInput(e, index, e.target.value);
                    }}
                  />
                </div>
              ))}
            </div>
            <button onClick={handleAdd}>
              <AddCircleOutlineIcon />
            </button>
          </div>
        </div>
        <div>
          {/* <div className="flex justify-left gap-[1.5rem] items-center mt-[1rem]">
            <label>Project Responsibility</label>
            <textarea
              type="text"
              onChange={(e) =>
                setFormData((pre) => ({
                  ...pre,
                  projectResponsibility: e.target.value,
                }))
              }
              className="border-2 border-gray-500 rounded h-[4rem]  w-[60%] px-3"
            />
          </div> */}
           <div className="flex justify-left gap-[1.8rem] items-center mt-[1rem]">
          <label>Project Responsibility</label>
          <div className="flex justify-left gap-[1rem] items-center">
          <div className="flex justify-center flex-col gap-4">
              {projectResponsibility.map((item, index) => (
                <div key={index} className="">
                  <input
                    className="border-2 border-gray-500 min-w-[18.6rem] max-w-[6rem] ml-10 px-3 py-1 rounded"
                    type="text"
                    placeholder=""
                    value={item}
                    onChange={(e) => {
                      handleResponsibility(e, index, e.target.value);
                    }}
                  />
                </div>
              ))}
            </div>
          <button onClick={handlePlus}>
            <AddCircleOutlineIcon />
          </button>
        </div>
        </div>
        </div>


        {/* </form> */}

        <hr className="mt-[1rem]" />
        <div className=" w-[15rem] border-2 border-gray-500 rounded-full px-2 py-2 mt-2 text-center">
          <AddIcon /> Add work Experience
        </div>
      </div>
    </>
  );
}

export default WorkExperiences;
