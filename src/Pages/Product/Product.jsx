import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Breadcrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import carData from '../../components/Cards/carData'
import Button from '../../components/Buttons/Button'
import { IoMdHeartEmpty } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGaugeSimple, faGasPump, faPeopleRobbery, faGaugeSimpleHigh, faL } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF } from "react-icons/fa6";
import { IoLinkOutline } from "react-icons/io5";
import CardContainer from '../../components/Cards/CardContainer'



function Product() {

  const { id } = useParams();

  const cars = carData.find((car) => car.id === parseInt(id, 10)); // Corrected line!  

  const [changeImage, setChangeImage] = useState(false); // Initialize to null

  const [selectedImage, setSelectedImage] = useState(false)  // for tracking image index to highlish colour
  // useEffect to set isSelected AFTER cars is defined  
  useEffect(() => {
    if (cars) {
      setChangeImage(cars.images[0]); // Initialize with the first image  
    }
  }, [cars]);

  if (!cars) {
    return <div>Car not found!</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0); // Page top pe scroll karega
}, []);


  const imageClicked = (image, index) => {
    setChangeImage(image);
    setSelectedImage(index)
  }



  return (
    <div className='bg-[#edf0f7] h-full pb-10'>
      <div className=' max-w-xs m-auto flex flex-col gap-10 pt-5 lg:max-w-[1200px] '>
        <div className=''>
          <Breadcrumbs />
        </div>

        <div className='flex flex-col'>
          <div>
            <h1 className='text-3xl'>{cars.title}</h1>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-50 '>

          {/* Left */}
          <div className=" pb-5 rounded-[24px] bg-[#edf0f7] shadow-md border-2 border-white p-3 lg:w-170 ">
            <div
              className=" rounded-2xl">
              <img src={changeImage} alt="" className='rounded-2xl lg:w-full' />
            </div>

            <div className=' w-[22%] h-[22%] flex gap-3 pt-5 items-center lg:w-[25%]'>

              {
                cars.images.map((image, index) => (
                  <img

                    key={index}
                    src={image}
                    alt={`Product ${index}`}
                    className={`rounded-2xl object-contain ${selectedImage === index ? " border-2  border-[#39acf9]" : "border-none "}`}
                    onClick={() => imageClicked(image, index)}

                  />
                ))
              }
            </div>
          </div>

          {/* Right */}
          <div className=" pb-5 rounded-[24px] bg-[#edf0f7] shadow-md border-2 border-white p-5 pt-2 lg:w-120 ">
            <div className='' >
              <p className='mt-2 text-gray-500'>Offer</p>

              <div className='flex justify-between items-center mt-5'>

                <h1 className="text-[25px] lg:text-[35px] flex items-center gap-1">{cars.price}<nav className="text-[15px] mt-2">/ month</nav></h1>

                <div className='flex gap-2'>
                  <button className="bg-[#d7ebfc] p-3  rounded-[10px] cursor-pointer hover:bg-[#f9e3e3] text-[#39acf9] hover:text-[#D23787] transition-all duration-300 ">
                    <IoMdHeartEmpty size={20} className=' rounded-2xl' />
                  </button>

                  <button className='bg-[#39acf9] text-white mt-1  rounded-2xl   pl-4 pr-4 text-[0.7rem] cursor-pointer  hover:bg-[#50b7fc] transition-all duration-300  shadow-black'>
                    RENT NOW
                  </button >
                </div>
              </div>

              <div className='mt-5'>

                <p>Lease Terms</p>

                <div className='flex mt-5 justify-between items-center border-b-1 border-[#4e5d7857] pb-2.5 text-[0.9rem] text-[#4E5D78]'>
                  <p>Monthly payement</p>
                  <p>{cars.price}</p>
                </div>

                <div className='flex mt-2 justify-between items-center border-b-1 border-[#4e5d7857] pb-2.5 text-[0.9rem] text-[#4E5D78]'>
                  <p>Cash incentive</p>
                  <p>To be provided by seller
                  </p>
                </div>

                <div className='flex mt-2 justify-between items-center border-b-1 border-[#4e5d7857] pb-2.5 text-[0.9rem] text-[#4E5D78]'>
                  <p>Transfer fee</p>
                  <p>To be provided by seller</p>
                </div>

                <div className='flex mt-2 justify-between items-center border-b-1 border-[#4e5d7857] pb-2.5 text-[0.9rem] text-[#4E5D78]'>
                  <p>Disposition fee</p>
                  <p>To be provided by seller</p>
                </div>

                <div className='flex mt-2 justify-between items-center border-b-1 border-[#4e5d7857] pb-2.5 text-[0.9rem] text-[#4E5D78]'>
                  <p>Leasing company</p>
                  <p>Toyota Financial Services</p>
                </div>

                <div className='flex mt-2 justify-between items-center border-b-1 border-[#4e5d7857] pb-2.5 text-[0.9rem] text-[#4E5D78]'>
                  <p>Lease end date</p>
                  <p>01 Dec 2022</p>
                </div>

              </div>

              <div className='mt-5'>
                <h1>Car Details</h1>
              </div>


              <div className="grid grid-cols-2 gap-5 mt-2">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faPeopleRobbery} className="text-[#39acf9]" />
                  <p>{cars.capacity}</p>
                </div>

                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faGasPump} className="text-[#39acf9]" />
                  <p>{cars.Transmission}</p>
                </div>

                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faGaugeSimpleHigh} className="text-[#39acf9]" />
                  <p>{cars.average}</p>
                </div>

                <div className="flex items-center gap-3 ">
                  <FontAwesomeIcon icon={faGaugeSimple} className="text-[#39acf9]" />
                  <p>{cars.vehicle}</p>
                </div>
              </div>

              <div className='mt-2'>
                <p>Share</p>

                <div className='mt-2 flex gap-5'>
                  <FaFacebookF size={20} />
                  <IoLinkOutline size={30} />
                </div>
              </div>

            </div>
          </div>

        </div>

        <div>
          <div className='mt-5'>

            <p className='text-[2rem]'>You may also like</p>

            <div>
              <CardContainer />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Product;
