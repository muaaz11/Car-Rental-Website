import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Breadcrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import { FaFacebookF, FaInstagram, FaTwitter, FaTelegram, FaSkype, FaEnvelope } from 'react-icons/fa';



function Contact() {

  const socialIcons = [FaFacebookF, FaInstagram, FaTwitter, FaTelegram, FaSkype, FaEnvelope];

  return (

    <div className='bg-[#edf0f7] h-full pb-10'>
      <div className=' max-w-xs m-auto flex flex-col gap-10 pt-5 lg:max-w-[1200px] '>
        <div className=''>
          <Breadcrumbs />
        </div>

        <div className='flex flex-col'>
          <div>
            <h1 className='text-3xl'>Get in touch</h1>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-50 '>

          {/* Form */}
          <div className=" pb-5 rounded-[24px] bg-[#edf0f7] shadow-md border-2  border-white p-3 md-w-170 lg:w-170 flex flex-col gap-5">

            <div className='bg-white p-1 rounded-2xl'>
              <input type="text" placeholder='Name' className='  w-full p-2 rounded-2xl outline-none ' />
            </div>

            <div className='bg-white p-1 rounded-2xl'>
              <input type="text" placeholder='Email' className='  w-full p-2 rounded-2xl outline-none ' />
            </div>

            <div className='bg-white p-1 rounded-2xl'>
              <input type="text" placeholder='Subject' className='  w-full p-2 rounded-2xl outline-none ' />
            </div>

            <div className='bg-white p-1 rounded-2xl'>
              <textarea name="" id="" className='  w-full p-2 rounded-2xl outline-none h-40' placeholder='Type your message'></textarea>
            </div>

            <div className='text-center'>
              <button className='bg-[#39acf9] pr-30 pl-30 pt-2 pb-2 text-white rounded-2xl text-[1.1rem] cursor-pointer hover:bg-[#50b7fc] transition-all duration-300 shadow-black'>
                Send
              </button >
            </div>
          </div>

          {/* info */}

          <div className=' mt-10 lg:mt-5 lg:ml-10 w-90 '>

            <div className='mb-7'>
              <h1 className='text-3xl'>Info</h1>
            </div>

            <div className='mb-7'>
              <p>We are always happy to help and provide more information about our services. You can contact us through email, phone, or by filling out the form on our website. Thank you for considering us!</p>
            </div>

            <div className='flex flex-col gap-5'>
              <p>03308299410</p>
              <p>support@waydex.com</p>
              <p>221B Baker St, Marylebone, London</p>
            </div>

            <div className="flex gap-4 mt-10 md:mt-0">
              {socialIcons.map((Icon, index) => (
                <Icon key={index} className="text-gray-600 mt-7 hover:text-[#39acf9] cursor-pointer transition-all duration-300" />
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact
