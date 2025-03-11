import React from 'react'

function FooterItems({ Links, title }) {
  return (
    <ul>
        <h1 className='mb-1 font-semibold'>{title}</h1>

        {
            Links.map((link) => (
                <li key={link.name} className='text-[#A2ACBC] cursor-pointer hover:text-[#39acf9] transition-all duration-300 text-[14px] pt-3' >  
                    <a href={link.link}>{link.name}</a>
                </li>
            ))
        }
    </ul>
  )
}

export default FooterItems
