import React from 'react'
import Builder from './Builder'
// import { Edit } from '@mui/icons-material'
import Edit from './Edit'
import ResumeProfile from "./ResumeProfile"
import { Outlet } from 'react-router-dom'
// import SelectSection from './SelectSection'

function NewResume() {
  return (
  <>
  <div className='flex '>

  <Builder/>
  <section className='flex justify-around w-full'>
  <Edit/>
  <ResumeProfile/>
  {/* <Outlet/> */}
  </section>
  </div>

  </>
  )
}

export default NewResume