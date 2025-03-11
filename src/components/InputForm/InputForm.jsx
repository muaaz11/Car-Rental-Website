import React from 'react'

function InputForm() {
    return (

        <div className='bg-[#edf0f7] grid grid-cols-1 p-4 m-8 rounded-3xl border-2 border-white gap-10 shadow-lg shadow-[#4e5d8940]/50  md:grid-cols-4 md:w-2xl lg:w-4xl lg:ml-50 lg:mt-0 '>


            <div className='flex flex-col gap-3 text-[14px] relative w-full  '>
                <p className='text-gray-400'>Model, car or brand</p>
                <input type="text" placeholder='what are you looking for' className='text-[#4E5D89] focus:outline-none focus:ring-0 placeholder-[#4E5D89]' />
            </div>

            <div className='flex flex-col gap-3 text-[14px]'>
                <p className='text-gray-400 text-nowrap'>Max, monthly payment</p>
                <input type="text" placeholder='Add an amount in $' className='text-gray-600 focus:outline-none focus:ring-0 placeholder-[#4E5D89]' />
            </div>

            <div className='flex flex-col gap-3 text-[14px]'>
                <p className='text-gray-400'>Make year</p>
                <input type="text" placeholder='Add a minimal make year' className='text-[#4E5D89] focus:outline-none focus:ring-0 placeholder-[#4E5D89]' />
            </div>

            <button className='bg-[#39acf9] rounded-2xl p-3 text-white text-[1.1rem] '>Search</button>
        </div>
    )
}

export default InputForm
