import React, { useContext, useState, useEffect  } from "react";
import {Link, Outlet} from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { inputContext } from "./Main";


function Edit() {

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

  const urlObject = [
    "my-details",
    "about-me",
    "skills-and-proficiencies",
    "work-experiences",
  ];
  const [counter, setCounter] = useState(0);
  const [nextPage, setNextPage] = useState(urlObject[counter]);

  const handleNextClick = (e) => {
    setCounter(counter + 1);
  
  };
  useEffect(() => {
    setNextPage(urlObject[counter]);
  }, [counter]);


  const dataSave = {
    details: {
      image: image,
      name: name,
      role: role,
      totalExp: totalExp,
    },
    AboutMe: {
      message: message,
      pointers: input,
    },
    workExperience: workExperience,
  };

  console.log(dataSave, "4");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8000/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSave),
    });
  console.log("surbhi")

  }
  // console.log(dataSave)

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("http://localhost:8000/submit", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({

  //       }),
  //     }); 
  // } 

  return (
    <>
      <div className="resumeSection w-1/2 px-[2rem]">
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-group flex justify-end">
            {/* <button className="next bg-slate-500 text-white rounded px-2 py-2 mt-[2rem]" onClick={handleNextClick}>
              Next <ArrowRightAltIcon />
            </button> */}
              <Link
              className="next bg-slate-500 text-white rounded px-2 py-2 mt-[2rem]"
              to={nextPage}
              onClick={handleNextClick}>
              Next <ArrowRightAltIcon />
            </Link>
          </div>
          <button type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          // onClick={handleSubmit}
        >
          Submit
        </button>
        </form>
        <Outlet />
        

      </div>
     
    </>
  );
}

export default Edit;
