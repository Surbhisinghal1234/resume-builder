import React, { useEffect, useState } from "react";
import {Link, Outlet} from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Edit() {
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
  1;
  return (
    <>
      <div className="resumeSection w-1/2 px-[2rem]">
        <form method="post">
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
        </form>
        <Outlet />
      </div>
    </>
  );
}

export default Edit;
