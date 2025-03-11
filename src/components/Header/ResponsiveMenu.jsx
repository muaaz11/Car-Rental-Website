import React, { useEffect, useRef } from 'react';  
import { AnimatePresence, motion } from "framer-motion";  
import { Link, useLocation } from 'react-router-dom'; // Correct import for React Router v6  

function ResponsiveMenu({ open , setOpen}) { 
  
  const menuRef = useRef(null)
  const location = useLocation(); // Detect route change
 
useEffect(() => {
    setOpen(false);
}, [location.pathname]);


    return (  
        <AnimatePresence mode='wait'>  
            {  
                open && (  
                    <motion.div  
                    ref={menuRef}
                        initial={{ opacity: 0, x: 100 }}  
                        animate={{ opacity: 1, x: 0 }} // Slide in from right  
                        exit={{ opacity: 0, x: 100 }} // Slide out to right  
                        className='fixed top-15 right-0 bottom-0 w-[240px] h-screen bg-[#edf0f7] border-t border-l border-white p-6 z-[9999]'  
                    >  
                        <div className='w-full h-full relative'> {/* Removed redundant bg style */}  
                            <ul className='flex flex-col justify-start w-full relative'>  
                                <li className='mb-5 relative'>  
                                    <Link  
                                        to="/"  
                                        className={({ isActive }) =>  
                                            `text-[14px] text-[#4e5d78] flex-row justify-start items-center font-normal font-Nunito, sans-serif ${isActive ? "!text-[#39acf9]" : ""}`  
                                        }  
                                    >  
                                        Home  
                                    </Link>    
                                </li>  
                                <li className='mb-5 relative'>  
                                <Link    
                                        to="/ExploreCars"  
                                        className={({ isActive }) =>  
                                            `text-[14px] text-[#4e5d78] flex-row justify-start items-center font-normal font-Nunito, sans-serif ${isActive ? "!text-[#39acf9]" : ""}`  
                                        }  
                                    >  
                                        Explore Cars  
                                    </Link>  
                                </li>  
                                <li className='mb-5 relative'>  
                                    <Link  
                                        to="/HelpCentre"  
                                        className={({ isActive }) =>  
                                            `text-[14px] text-[#4e5d78] flex-row justify-start items-center font-normal font-Nunito, sans-serif ${isActive ? "!text-[#39acf9]" : ""}`  
                                        }  
                                    >  
                                        Help centre  
                                    </Link>  
                                </li>  
                                <li className='mb-5 relative'>  
                                    <Link  
                                        to="/Contact"  
                                        className={({ isActive }) =>  
                                            `text-[14px] text-[#4e5d78] flex-row justify-start items-center font-normal font-Nunito, sans-serif ${isActive ? "!text-[#39acf9]" : ""}`  
                                        }  
                                    >  
                                        Contact  
                                    </Link>  
                                </li>  
                            </ul>  
                        </div>  
                    </motion.div>  
                )  
            }  
        </AnimatePresence>  
    );  
}  

export default ResponsiveMenu;  