import React, { useContext } from 'react'
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { inputContext } from './Main';

function AboutMe() {
  const {message,setMessage}= useContext(inputContext)
  
  return (

    // <div className="relative">
    <>
    <div className='flex flex-col gap-[2rem]'>

    <div className="form-group flex gap-[2rem]">
      <label className='font-medium text-xl' htmlFor="aboutme">About Me</label>
      <textarea className='border-gray-400 border-2 rounded px-3'
        name="aboutme"
        id="aboutme"
        cols="35"
        rows="8"
        placeholder="Write summary about you"
      
        onChange={(e)=>{
          setMessage(e.target.value)
        }}
      >{message}</textarea>
    </div>

    <div className="form-group flex gap-[3rem] ">
      <label className='font-medium text-xl' htmlFor="aboutmepointers">Pointers</label>
      <div className='flex gap-3'>

      <input className='border-gray-400 border-2 rounded px-3 py-1 w-[19rem]'
        type="text"
        name="aboutmepointers"
        id="aboutmepointers"
        placeholder="Write bullet points about you"
      />
      <button>
        <AddCircleOutlineIcon />
      </button>
      </div>

    </div>
    </div>

  {/* // </div> */}
    </>

  )
}

export default AboutMe
