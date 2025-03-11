import React from 'react';
import BlogData from './BlogData';
import { TiStopwatch, TiMessage } from 'react-icons/ti';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css/bundle';



function Blog() {
    return (
        <div className='bg-[#ECF0F6] w-full pt-10'>
            <div className='max-w-[1200px] m-auto justify-center items-center'>
                <h1 className='text-4xl ml-5'>Our Blog</h1>
            </div>

            {/* Swiper Slider */}
            <div className='mt-5 p-4 '>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={30}
                    slidesPerView={1} 
                    breakpoints={{
                        640: { slidesPerView: 1 },  // Mobile screens
                        768: { slidesPerView: 2 },  // Tablets
                        1024: { slidesPerView: 3 }, // Desktops
                    }}
                >
                    {BlogData.map((item) => (
                        <SwiperSlide key={item.id} className='rounded-3xl bg-[#F0F5FC]'>
                            <div className=''>
                                <img src={item.img} className='h-[30vh] rounded-3xl w-full object-cover hover:brightness-75 transition-all duration-500' />
                                <div className='p-2'>
                                    <h2 className='text-[1.5rem] font-medium p-2 hover:text-[#39acf9] cursor-pointer transition-all duration-300'>{item.title}</h2>
                                    <div className='flex items-center justify-between gap-4 mt-5 p-2'>
                                        <p className='flex items-center gap-2 text-[#A2ACBC]'><TiStopwatch className='fill-[#A2ACBC]' />{item.postingDate}</p>
                                        <p className='flex items-center gap-2 text-[#A2ACBC]'><TiMessage className='text-[1.2rem] text-[#A2ACBC]' />{item.comments}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Blog;
