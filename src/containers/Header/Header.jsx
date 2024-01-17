import React from 'react'
import {Navbar} from '../../components/index'
import  logo from '../../assets/Logo.png'
const Header = () => {
  return (
    <section className='flex flex-row justify-between items-center px-[40px] py-8'>
        <div className="flex-[0.50]">
            <img src={logo} alt="logo" className="cursor-pointer" />
        </div>
        <Navbar/>
        <div className="flex flex-row items-center tracking-[0.04rem] text-white font-semibold">
              <div className="flex flex-row font-opensans">
                  <p className="cursor-pointer hover:text-slate-300">Log in</p>
                  <p className="mx-[2px]">/</p>
                  <p className="cursor-pointer hover:text-slate-300">Registration</p>
              </div>
              <div className=" mx-3 bg-white w-10 h-[1px] rotate-90  "/>
              <div>
                  <p className="cursor-pointer hover:text-slate-300">Book Table</p>
              </div>
        </div>
    </section>
  )
}

export default Header