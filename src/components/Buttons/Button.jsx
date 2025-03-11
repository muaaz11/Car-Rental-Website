import React from 'react'

function Button(props) {
  
  return (
    <div>
      <a 
      href="#">
      <button 
      className='
      bg-[#39acf9]
      text-white 
      mt-1 
      pr-4 
      pl-4 
      pt-2 
      pb-2 
      rounded-2xl 
      text-sm 
      cursor-pointer 
      hover:bg-[#50b7fc]
      transition-all duration-300'
      >
        {props.value}
        </button>
      </a>
    </div>
  )
}

export default Button;
