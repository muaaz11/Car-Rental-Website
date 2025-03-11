import React, { useState } from "react";
import Button from '../Buttons/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGaugeSimple, faGasPump, faPeopleRobbery, faGaugeSimpleHigh } from "@fortawesome/free-solid-svg-icons";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavLink, Link } from 'react-router-dom'

function Card({ id, images, title, model, capacity, average, vehicle, Transmission, price, limit }) {

  const [currentPosition, setCurrentPosition] = useState(1);
  const nextImg = () => {
    setCurrentPosition((prev) => (prev + 1) % images.length);
  }
  const prevImg = () => {
    setCurrentPosition((prev) => (prev - 1 + images.length) % images.length);
  }
  return (
    <div className="rounded-[24px] mt-5 bg-[#edf0f7] border-2 border-white shadow-lg p-2 pb-7 relative ">
      {/* Image Slider Container */}
      <div className="relative w-full overflow-hidden rounded-[24px] bg-[#edf0f7]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentPosition * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-[24px] flex-shrink-0"
              style={{ minWidth: "100%" }}
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-[10px] h-[15rem] items-center left-0 right-0 flex justify-between px-4 opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
        <button
          onClick={prevImg}
          className="w-[30px] h-[30px] bg-white rounded-[10px] shadow-md">
          <img src="./icons/left.png" alt="left" />
        </button>
        <button
          onClick={nextImg}
          className="w-[30px] h-[30px] bg-white rounded-[10px] shadow-md text-rose-950">
          <img src="./icons/next.png" alt="next" />
        </button>
      </div>
      <div>

        {/* Title */}
        <div className="flex justify-between max-w-[360px] items-center m-auto">
          <h2 className="text-[1.4rem] font-sans ml-4 mt-4 hover:text-[#39acf9] cursor-pointer transition-all duration-300">{title}</h2>
          <p className="mt-5 mr-4 border-dashed border-2 pl-3 pr-3 rounded-[20px] border-[#7fcafd]">{model}</p>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5 ml-4">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faPeopleRobbery} className="text-[#39acf9]" />
            <p>{capacity}</p>
          </div>

          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faGasPump} className="text-[#39acf9]" />
            <p>{Transmission}</p>
          </div>

          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faGaugeSimpleHigh} className="text-[#39acf9]" />
            <p>{average}</p>
          </div>

          <div className="flex items-center gap-3 ">
            <FontAwesomeIcon icon={faGaugeSimple} className="text-[#39acf9]" />
            <p>{vehicle}</p>
          </div>
        </div>

        <div className="flex justify-between mt-5 border-t-2 border-[#dae1e9] pt-4" >
          <div className=" ml-4">
            <h1 className="text-[25px] flex items-center gap-1">{price}<nav className="text-[15px] mt-2">/ month</nav></h1>
          </div>

          <div className="flex items-center gap-4 mr-4">
            <button className="bg-[#d7ebfc] p-2 rounded-[10px] cursor-pointer hover:bg-[#f9e3e3] text-[#39acf9] hover:text-[#D23787] transition-all duration-300 ">
              <IoMdHeartEmpty size={20} className=' rounded-2xl' />
            </button>

          
           <Link  to={`/Product/${id}`}>
           <Button value="Rent Now"/>
           </Link> 

          </div>
        </div>


      </div>
    </div>
  );
}

export default Card;