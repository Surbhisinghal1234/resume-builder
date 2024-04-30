import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';

function WorkExperiences() {
  return (
    <>
   <div className='mx-4'>
    <h3 className='mt-[1rem] mb-[2rem] font-medium text-xl'>Work Experience <InfoIcon/> </h3>
    <div className='flex justify-left gap-[3rem] items-center mt-[1rem]'>
      <label>Client Description</label>
      <input type="text" className='border-2 border-gray-500 rounded h-[2.5rem] w-[65%]' />
    </div>

    <div className='flex justify-left gap-[7.2rem] items-center mt-[1rem]'>
      <label>Country</label>
      <input type="text" className='border-2 border-gray-500 rounded h-[2.5rem] w-[65%]' />
    </div>

    <div className='flex justify-left gap-[4.8rem] items-center mt-[1rem]'>
      <label>Project Name</label>
      <input type="text" className='border-2 border-gray-500 rounded h-[2.5rem] w-[65%]' />
    </div>

    <div className='flex justify-left gap-[9rem] items-center mt-[1rem]'>
      <label>Role</label>
      <div className='flex justify-left gap-[1rem] items-center'>
      <input type="text" className='border-2 border-gray-500  h-[2.5rem] w-[6rem] rounded-full' />
      <input type="text" className='border-2 border-gray-500  h-[2.5rem] w-[6rem] rounded-full' />
      <div className='h-[2rem] w-[2rem] border-2 border-gray-500 rounded-full text-center'>+</div>
      </div> 
    </div>

    <div className='flex justify-left gap-[7rem] items-center mt-[1rem]'>
      <label>Duration</label>
      <div className='flex justify-left gap-[1rem] items-center'>
      <input type="date" className='border-2 border-gray-500 rounded-[2.5rem] w-[9rem] px-2 py-1' />
      <input type="date" className='border-2 border-gray-500 rounded py-1 px-2 w-[9rem]' />
      </div>
    </div>

    <div className='flex justify-left gap-[3rem] items-center mt-[1rem]'>
      <label>Business Solution</label>
      <input type="text" className='border-2 border-gray-500 rounded h-[7rem] w-[65%]' />
    </div>

    <div className='flex justify-left gap-[3.6rem] items-center mt-[1rem]'>
      <label>Technology Stack</label>
      <div className='flex justify-left gap-[1rem] items-center'>
      <input type="text" className='border-2 border-gray-500  h-[2.5rem] w-[6rem] rounded-full' />
      <input type="text" className='border-2 border-gray-500 h-[2.5rem] w-[6rem] rounded-full' />
      <div className='h-[2rem] w-[2rem] border-2 border-gray-500 rounded rounded-full text-center'>+</div>
      </div> 
    </div>

    <div className='flex justify-left gap-[1.5rem] items-center mt-[1rem]'>
      <label>Project Responsibility</label>
      <input type="text" className='border-2 border-gray-500 rounded h-[4rem] w-[65%]' />
    </div>

    <hr className='mt-[1rem]'/>
 <div className=' w-[15rem] border-2 border-gray-500 rounded-full px-2 py-2 mt-2 text-center'><AddIcon/> Add work Experience</div>
   </div>
    </>
  )
}

export default WorkExperiences