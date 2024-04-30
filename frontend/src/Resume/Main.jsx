import React, { createContext, useState, useContext } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resume from "./Resume";
import Create from "./Create";
import Builder from "./Builder";
import NewResume from "./NewResume";
import Edit from "./Edit";
import SelectSection from "./SelectSection";
import MyDetails from "./MyDetails";
import AboutMe from "./AboutMe";
import SkillsProficiencies from "./SkillsProficiencies";
import WorkExperiences from "./WorkExperiences";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./resume.css";
export const inputContext = createContext();

function Main() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [totalExp, setTotalExp] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Resume />
          <Create />
        </>
      ),
    },
    {
      path: "/new-resume",
      element: <NewResume />,
      children: [
        { path: "", element: <SelectSection /> },
        {
          path: "my-details",
          element: <MyDetails />,
        },
        {
          path: "about-me",
          element: <AboutMe />,
        },
        {
          path: "skills-and-proficiencies",
          element: <SkillsProficiencies />,
        },
        {
          path: "work-experiences",
          element: <WorkExperiences />,
        },
      ],
    },
    {
      path: "*",
      element: "page not found",
    },
  ]);
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Resume /> <Create />
              </>
            }
          />
          <Route path="/new-resume" element={<NewResume />}>
          <Route index element={<SelectSection />} />
           
         <Route path="my-details" element={<MyDetails/>}/>
          <Route path="about-me" element={<AboutMe />} />
          <Route
            element={<SkillsProficiencies />}
            path="skills-and-proficiencies"
          />
          <Route element={<WorkExperiences />} path="work-experiences" />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <inputContext.Provider value={{name, setName,role, setRole,totalExp, setTotalExp,message,setMessage,image,setImage}}>
        <RouterProvider router={router} />
      </inputContext.Provider>
    </>
  );
}

export default Main;
