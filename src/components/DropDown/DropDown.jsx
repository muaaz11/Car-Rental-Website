import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineUser } from "react-icons/ai";
import { LuNotebookPen } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";
import { GoSignOut } from "react-icons/go";

function DropDown({ isopen, setIsOpen }) {


  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isopen &&
        dropdownRef.current && // Ensure ref is assigned
        !dropdownRef.current.contains(event.target) // Check if click is outside dropdown
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isopen]);
  
  
  return (
    <AnimatePresence>
      {isopen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className=" dropdown-menu top-16 right-17 lg:right-45 md:right-17 fixed bg-[#edf0f7] shadow-md border-2 border-white rounded-xl w-40 p-4 z-50"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center cursor-pointer hover:text-[#39acf9]">
              <button className="text-gray-500 text-[14px] cursor-pointer flex items-center gap-3 ">
              <AiOutlineUser className="text-gray-700 cursor-pointer text-[20px]" />
              My Account</button>
            </div>

            <div className="flex items-center gap-2 cursor-pointer rounded">
              <button className="text-gray-500 cursor-pointer text-[14px] flex items-center gap-3">
              <LuNotebookPen className="text-gray-700 cursor-pointer text-[20px]" />
              Billing</button>
            </div>

            <div className="flex items-center gap-2 cursor-pointer rounded">
              <button className="text-gray-500 cursor-pointer text-[14px] flex items-center gap-3">
              <SlSettings className="text-gray-700 cursor-pointer text-[20px]" />
              Settings</button>
            </div>

            <div className="flex items-center gap-2 cursor-pointer rounded">
              <button className="text-gray-500 cursor-pointer text-[14px] flex items-center gap-3">
              <GoSignOut className="text-gray-700 cursor-pointer text-[20px]" />
              Sign out</button>
            </div>
          
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default DropDown;
