import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTelegram, FaSkype, FaEnvelope } from 'react-icons/fa';
import { FooterMenus } from './FooterMenus'


const socialIcons = [FaFacebookF, FaInstagram, FaTwitter, FaTelegram, FaSkype, FaEnvelope];

const Footer = ({category, links}) => {
  return (
    <footer className="bg-[#E5EAF2] ">
      <div className="max-w-[1200px] m-auto grid grid-cols-1 md:grid-cols-4 p-5">
        {/* Company Description */}
        <div className='w-full pb-10'>
          <h2 className="text-xl font-semibold">Waydex</h2>
          <p className="text-[#4E5D78] text-[14px] mt-2">
            Search for cheap rental cars in New York. With a diverse fleet of 19,000 vehicles, Waydex offers consumers an attractive and fun selection.
          </p>
          <div className="flex items-center mt-4 gap-2">
            <img src="../../Flags/UK.png" alt="flag" className="w-5 h-5" />
            <span className="text-gray-700">English</span>
          </div>
        </div>

        {/* Dynamic Footer Links */}
        {FooterMenus.map((section, index) => (
          <div key={index} className='flex flex-col gap-2 '>
            <h3 className="text-[16px]">{section.category}</h3>
            <ul className="text-[14px] flex flex-col gap-2">
              {section.links.map((link, i) => (
                <li key={i} className="text-gray-600 hover:text-[#39acf9] cursor-pointer transition-all duration-300">{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className=" max-w-[1200px] border-t border-gray-300 mt-6 pt-6 pb-10 flex flex-col md:flex-row justify-between items-center px-6 mx-auto">
        <p className="text-gray-600">&copy; Waydex, 2022—2023. Created by Dmitry Volkov.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          {socialIcons.map((Icon, index) => (
            <Icon key={index} className="text-gray-600 hover:text-[#39acf9] cursor-pointer transition-all duration-300" />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
