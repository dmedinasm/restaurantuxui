import React, { useEffect, useState } from 'react'
import {Navbar} from '../../components/index'
import  logo from '../../assets/Logo.png'
import Hamburger from 'hamburger-react'
const Header = () => {
  const [isOpen, setOpen] = useState(false)
  
  return (
    <section className='flex lg:flex-row justify-between items-center px-[30px] py-8'>
        <div >
            <img src={logo} alt="logo" className="cursor-pointer" />
        </div>
        <div className="hidden lg:block">
        <Navbar/>
        </div>
      <div className=" flex flex-row relative justify-between items-center tracking-[0.04rem] text-white text-[1rem] font-semibold ">
        <div className="hidden md:flex flex-row items-center font-opensans">
          <p className="cursor-pointer hover:text-slate-300">Log in</p>
          <p className="mx-[2px]">/</p>
          <p className="cursor-pointer hover:text-slate-300">Registration</p>
        </div>
        <div className=" hidden md:block mx-1 bg-white w-10 h-[1px] rotate-90  " />
        <div>
          <p className="hidden md:block cursor-pointer hover:text-slate-300">Book Table</p>
        </div>
        <div className=" lg:hidden ml-2">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      {
        isOpen &&
         <div className=" lg:hidden z-10 flex flex-col items-end absolute top-[80px] right-3 bg-slate-600 rounded">
          <Navbar />
          <p className="md:hidden ml-3 mr-2 mb-3 cursor-pointer hover:text-slate-300 font-opensans font-semibold text-white">Log in</p>
          <p className="md:hidden ml-3 mr-2 mb-3 cursor-pointer hover:text-slate-300 font-opensans font-semibold text-white">Registration</p>
          <p className="md:hidden ml-3 mr-2 mb-3 cursor-pointer hover:text-slate-300 font-opensans font-semibold text-white">Book Table</p>
          </div>
      }
    </section>
  )
}

export default Header