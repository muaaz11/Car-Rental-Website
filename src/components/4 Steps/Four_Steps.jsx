import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarRear } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineUser } from "react-icons/ai";
import { IoCarSportSharp } from "react-icons/io5";
import { PiUserCheck } from "react-icons/pi";
import { LuNotebookPen } from "react-icons/lu";


function Four_Steps({ image, title, description }) {
  return (
    <div className='bg-[#edf0f7] h-full w-full pt-10 '>

      <div className='lg:max-w-[1200px] lg:m-auto'>

      <div className='p-4'>
        <p className='text-3xl'>Get started with 4 simple steps</p>
      </div>

      <div className='grid grid-cols- 1 p-5 gap-7 md:grid-cols-2 lg:grid-cols-4' >

        <div className='rounded-2xl bg-[#edf0f7] border-2 border-white shadow-lg pb-5'>
          <div className='p-4'>
            <AiOutlineUser size={50} className='bg-[#E9CDE2] p-2 text-[#D23787] rounded-2xl' />
          </div>
          <div className=' pl-5 flex flex-col gap-2'>
            <p className='text-[#33334F] text-[1.1rem] '>Create a profile</p>
            <p className='text-[#636278] text-[1rem] pt-2 '>Register on our platform to <br />access a personalized car <br /> rental experience. </p>
          </div>
          </div>

        <div className='rounded-2xl bg-[#edf0f7] border-2 border-white shadow-lg pb-5 '>
          <div className='p-4'>
            <IoCarSportSharp size={50} className='bg-[#C3E1F7] p-2 text-[#189CF4] rounded-2xl' />
          </div>
          <div className=' pl-5 flex flex-col gap-2'>
            <p className='text-[#33334F] text-[1.1rem] '>Tell us what car you want</p>
            <p className='text-[#636278] text-[1rem] pt-2 '>Specify your preferred car <br/> model, rental period, and pick- <br /> up location. </p>
          </div>
        </div>

        <div className='rounded-2xl  bg-[#edf0f7] border-2 border-white shadow-lg pb-5 '>
          <div className='p-4'>
            <PiUserCheck size={50} className='bg-[#C6E6DD] p-2 text-[#29B474] rounded-2xl' />
          </div>
          <div className=' pl-5 flex flex-col gap-2'>
            <p className='text-[#33334F] text-[1.1rem] '>Match with seller</p>
            <p className='text-[#636278] text-[1rem] pt-2 '>Our algorithm will match you <br /> with the best available car <br /> rental options.</p>
          </div>
        </div>

        <div className='rounded-2xl bg-[#edf0f7] border-2 border-white shadow-lg pb-5 '>
          <div className='p-4'>
            <LuNotebookPen size={50} className='bg-[#D8D2F1] p-2 text-[#8051D4] rounded-2xl' />
          </div>
          <div className=' pl-5 flex flex-col gap-2'>
            <p className='text-[#33334F] text-[1.1rem]'>Make a deal</p>
            <p className='text-[#636278] text-[1rem] pt-2 '>Finalize the rental agreement <br /> with the car owner and enjoy <br /> your hassle-free ride.</p>
          </div>
        </div>


      </div>

      </div>

    </div>
  )
}

export default Four_Steps
