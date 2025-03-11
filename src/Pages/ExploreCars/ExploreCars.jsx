import React, { useEffect } from 'react'
import { FiFilter } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import CardContainer from '../../components/Cards/CardContainer';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';



function ExploreCars() {

  useEffect( () => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className='bg-[#edf0f7] h-full'>
      <div className=' max-w-xs m-auto flex flex-col gap-10 pt-5 lg:max-w-[1200px] md:max-w-[700px] '>
        <div className=''>
          <BreadCrumbs />
        </div>

        <div className='flex flex-col'>
          <div>
            <h1 className='text-3xl pb-5'>Choose the right lease</h1>
          </div>

          {/* Filter */}
          <div className='bg-[#EFF4FB] border-1 border-white rounded-xl shadow-md w-full h-17 flex items-center justify-between'>

            {/* for Mobile Screen */}
            <div className='pl-2 flex gap-2 lg:hidden md:hidden'>
              <FiFilter size={20} className='text-[#39acf9]' />
              <p>Filter</p>
            </div>

            <div className='lg:hidden md:hidden'>
              <p className='text-[0.9rem] mr-3'>showing 6 of 120</p>
            </div>

            {/* for Desktop Screen */}
            <div className='lg:flex hidden gap-10 md:flex'>
              <div className='flex bg-white items-center rounded-xl w-2xs ml-7 hover:border-1 border-[#39acf9] cursor-pointer transition-all ease-in-out duration-300 '>
                <input type="text" placeholder='Search...' className='bg-white rounded-xl w-1xs p-2  outline-none ' 
                /><FiSearch className=' hover:text-[#39acf9] cursor-pointer transition-all ease-in-out duration-300 ml-14' />
                
              </div>

              <div className='flex gap-10 items-center'>
                <div className='flex items-center gap-3 text-[#758197] cursor-pointer'>
                  relavance
                  <IoIosArrowDown />
                </div>

                <div className='flex items-center gap-3 text-[#758197] cursor-pointer'>
                  All brands
                  <IoIosArrowDown />
                </div>
              </div>
            </div>
          </div>
          <div className='mb-10'>
            <CardContainer limit={4}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreCars
