import React, { useContext, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { inputContext } from "./Main";

function AboutMe() {
  const { message, setMessage, input, setInput } = useContext(inputContext);
  // const [input, setInput] = useState([""]);

  function handleInput(index, value) {
    let newInp = [...input];
    newInp[index] = value;
    setInput(newInp);
    console.log(value);
  }
  function handleAdd() {
    setInput([...input, ""]);
  }

  console.log(input);
  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="form-group flex gap-[2rem]">
        <label className="font-medium text-xl" htmlFor="aboutme">
          About Me
        </label>
        <textarea
          className="border-gray-400 border-2 rounded px-3"
          name="aboutme"
          id="aboutme"
          cols="35"
          rows="8"
          placeholder="Write summary about you"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="flex gap-[1rem]">
        <label className="font-medium text-xl" htmlFor="">
          Pointers
        </label>
        <div className="flex flex-col gap-4 ml-8">
          {input.map((item, index) => (
            // console.log(item);
            <div key={index} className="">
              <input
                className="border-gray-400 border-2 rounded px-3 py-1 w-[19rem]"
                type="text"
                placeholder="Write bullet points about you"
                value={item.value}
                onChange={(e) => {
                  handleInput(index, e.target.value);
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
  );
}

export default AboutMe;
