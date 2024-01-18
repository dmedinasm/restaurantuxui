import React from 'react'
import { navElements } from '../../data'
const Navbar = () => {
  return (
    <div>
        <ul className="flex mb-3 lg:mb-0 flex-col items-end lg:flex-row ">
            {
                navElements.map (value => 
                    <li key={value} className=" text-[14px]  p-[0.5rem] text-white cursor-pointer hover:text-slate-300 font-opensans tracking-[0.05rem] font-normal lg:text-[1rem] leading-7">{value}</li>
                    )
            }
        </ul>
    </div>
  )
}

export default Navbar