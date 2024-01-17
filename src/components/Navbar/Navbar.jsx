import React from 'react'
import { navElements } from '../../data'
const Navbar = () => {
  return (
    <div>
        <ul className="flex flex-row ">
            {
                navElements.map (value => 
                    <li key={value} className="p-[1rem] text-white cursor-pointer hover:text-slate-300 font-opensans tracking-[0.04rem] font-normal leading-7">{value}</li>
                    )
            }
        </ul>
    </div>
  )
}

export default Navbar