import React, { useEffect } from 'react';
import InputForm from '../../components/InputForm/InputForm.jsx';
import Blog from '../../components/Blog/Blog.jsx';
import Four_Steps from '../../components/4 Steps/Four_Steps.jsx';
import { IoIosArrowForward } from "react-icons/io";
import CardContainer from '../../components/Cards/CardContainer'
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";



function Home() {

    useEffect( () => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div>
                <div className='bg-[#edf0f7] grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 lg:'>
                    <div className='text-[#33334f] text-[2.0rem]/tight uppercase font-medium  flex flex-col justify-center items-center mt-10 gap-5 md:text-[2.5rem] lg:text-[3rem] md:items-center md:justify-center'>The easy way to
                        <br />takeover a lease <nav className='text-[1rem]/10 text-center font-light '>Live in New York, New Jerset and Connecticut!</nav></div>
                    <div className='hidden md:block '>
                        <img src="./carimg.webp" alt="" className=' rounded-[24px] md:w-[320px] md:h-[700px] lg:w-[680px] lg:h-[500px] md:object-cover ml-10 mt-20' />
                    </div>
                    <div className='lg:absolute top-130'>
                        <InputForm />
                    </div>
                </div>


                {/* Car Cards */}
                <div className='bg-[#edf0f7] h-full pt-10 '>
                    <div className='lg:max-w-[1200px] m-auto'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-[1.8rem] ml-5'>Featured Cars</h1>
                            <a href="#" className='flex gap-1 items-center text-gray-500 mr-3'>view more <IoIosArrowForward /> </a>
                        </div>

                        <div className='flex gap-10'>
                            <CardContainer />
                        </div>
                    </div>
                </div>


            </div>


            <Four_Steps />
            <Blog />
        </>
    )
}

export default Home
