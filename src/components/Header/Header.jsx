import React, { useEffect, useState } from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from '../Buttons/Button';
import ResponsiveMenu from './ResponsiveMenu';
import { FaCarSide } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom'
import { LuNotebookPen } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";
import { GoSignOut } from "react-icons/go";
import DropDown from '../DropDown/DropDown';



// import Button from './Buttons/Button';

const Header = () => {

  const [open, setOpen] = React.useState(false)

  const [isScrolled, setScrolled] = useState(false)

  const [isopen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>

      <div className={` bg-[#edf0f7] sticky top-0 z-20 ${isScrolled ? "shadow-lg transition-all duration-500" : "shadow-none"} `}>
        <div className={`flex justify-between items-center gap-10 w-full max-w-[1200px] m-auto`}>
          <div className='text-2xl p-4 md:text-3xl'>
            <Link
              to="/">
              Waydex
            </Link>
          </div>

          <nav className='hidden lg:block'>
            <ul className='flex gap-[40px]'>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-gray-400 hover:text-[#39acf9] transition-all duration-300 ${isActive ? "!text-[#39acf9]" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ExploreCars"
                  className={({ isActive }) =>
                    `text-gray-400 hover:text-[#39acf9] transition-all duration-300 
                     ${isActive ? "!text-[#39acf9]" : ""}`
                  }
                >
                  Explore Cars
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/HelpCentre"
                  className={({ isActive }) =>
                    `text-gray-400 hover:text-[#39acf9] transition-all duration-300
                    ${isActive ? "text-[#39acf9]" : "text-gray-400"}`
                  }
                >
                  Help centre
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    `text-gray-400 hover:text-[#39acf9] transition-all duration-300
                    ${isActive ? "text-[#39acf9]" : "text-gray-400"}`
                  }
                >
                  Contact
                </NavLink>
              </li>

            </ul>
          </nav>

          {/* Right side of Navbar */}
          <div className='flex gap-5 mr-4'>

            <button className='bg-[#39acf9] text-white mt-1 pr-4 pl-4 pt-2 pb-2 rounded-2xl text-xm cursor-pointer  hover:bg-[#50b7fc] transition-all duration-300  shadow-black hidden md:inline'>
              Explore Cars
            </button >

            <button className='bg-[#189cf4] text-white h-[40px] w-[40px] flex items-center justify-center rounded-[14px] md:hidden '>
              <FaCarSide size={25} />
            </button>

            <button
              className='user-button h-[40px] w-[40px] flex justify-center items-center bg-white shadow-cyan-200 rounded-[14px] text-[#4e5d78] hover:text-[#50b7fc] cursor-pointer transition-all duration-300'
              onClick={(e) => {
                e.stopPropagation(); // Prevent closing immediately
                setIsOpen(prev => !prev);
              }}
            >
              <AiOutlineUser size={25} />
            </button>



            {isopen && <DropDown isopen={isopen} setIsOpen={setIsOpen} />}



            {/* <div className='bg-[#edf0f7] shadow-md border-1 border-white rounded-2xl w-[50%] absolute top-14 right-17 p-4 hidden'>
              <div className='flex flex-col gap-2'>

                <div className='flex items-center gap-2'>
                  <div>
                    <AiOutlineUser className='text-gray-500'/>
                  </div>

                  <div>
                    <button className='text-gray-500'>My Account</button>
                  </div>
                </div>

                <div className='flex items-center gap-2'>
                  <div>
                  <LuNotebookPen className='text-gray-500'/>
                  </div>

                  <div>
                    <button className='text-gray-500'>Billing</button>
                  </div>
                </div>

                <div className='flex items-center gap-2'>
                  <div>
                  <SlSettings className='text-gray-500'/>
                  </div>

                  <div>
                    <button className='text-gray-500'>Setting</button>
                  </div>
                </div>

                <div className='flex items-center gap-2'>
                  <div>
                  <GoSignOut className='text-gray-500'/>
                  </div>

                  <div>
                    <button className='text-gray-500'>Sign out</button>
                  </div>
                </div>

              </div>
            </div> */}

            <div className='flex items-center z-20'>
              <button className=' lg:hidden'
                onClick={() =>
                  setOpen(!open)
                }>
                <RxHamburgerMenu size={30} />
              </button>
            </div>

          </div>

        </div>
      </div>

      <ResponsiveMenu open={open} setOpen={setOpen}/>

    </>
  )
}

export default Header