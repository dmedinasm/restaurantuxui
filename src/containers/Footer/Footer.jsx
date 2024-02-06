import React from 'react'
import decoration from '../../assets/decorationTitle.png'
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-bgGallery bg-secondary bg-cover flex flex-col   justify-center px-[80px] pt-[100px] pb-8 ">
      <form className="bg-[rgb(28,27,27)] flex flex-col  justify-center px-4 py-[64px] rounded shadow-sm gap-12">
        <div className="flex flex-col place-items-center">
          <div className="flex flex-col place-items-center">
            <h3 className="font-cormorant font-bold text-[18px] md:text-[23px] leading-[130%] text-white tracking-[4%]">Newsletter</h3>
            <img src={decoration} alt="decoration Title" />
          </div>

          <h1 className="font-cormorant font-semibold text-[30px] sm:text-[48px] md:text-[64px] text-primary text-center leading-[130%]  tracking-[3%] mb-4">Subscribe to Our Newsletter</h1>
          <p className="font-opensans font-normal text-[14px] md:text-[16px] text-white leading-[175%] tracking-[4%] text-center">And never miss latest Updates!</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <input type='text' className="border border-[#f5efdb] w-[90%] sm:w-[70%] md:w-[50%] text-white  text-[12px] sm:text-[16px] py-2 px-2 bg-transparent placeholder placeholder: placeholder-[#AAAAA] outline-none" placeholder="Email Address" />
          <input type='submit' value="Subscribe" className="bg-primary font-cormorant text-center  text-[14px] sm:text-[16px] text-[#0C0C0C] font-bold leading-[175%] cursor-pointer tracking-[4%] px-6 py-1 md:px-8 md:py-2" />
        </div>
      </form>
      <article className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-center justify-between mt-[192px] ">
        <div className="flex flex-col place-items-center w-[100%]  ">
          <h3 className="font-cormorant font-normal text-[32px] text-[#f5efdb] leading-[130%] tracking-[4%] mb-5">Contact Us</h3>
          <p className="font-opensans font-normal text-[1rem] text-colortext text-center leading-[175%] tracking-[4%] mb-2">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="font-opensans font-normal text-[1rem] text-colortext leading-[175%] tracking-[4%] " >+1 212-344-1230<br/>+1 212-555-1230</p>
        </div>
        <div className="flex flex-col place-items-center w-[100%]  ">
          <h1 className="font-cormorant font-bold text-[50px] sm:text-[64px] text-primary text-center leading-[130%] tracking-[4%] mb-10">GERÍTCH</h1>
          <p className="font-opensans font-normal text-[1rem] text-white text-center leading-[175%] tracking-[4%] mb-4 ">"The best way to find yourself is to lose yourself<br/> in the service of others.”</p>
          <img src={decoration} alt="decoration Title" className="mb-4"/>
          <div className="flex place-items-center gap-4">
            <BsFacebook className="text-white cursor-pointer w-[60%]" />
            <BsTwitterX className="text-white cursor-pointer w-[60%]" />
            <BsInstagram className="text-white cursor-pointer w-[60%]" />
          </div>
          
        </div>
        <div className="flex flex-col place-items-center w-[100%] ">
          <h3 className="font-cormorant font-normal text-[32px] text-[#f5efdb] text-center leading-[130%] tracking-[4%] mb-5">Working Hours</h3>
          <p className="font-opensans font-normal text-[1rem] text-colortext text-center leading-[175%] tracking-[4%] mb-2">Monday-Friday: <br/>08:00 am -12:00 am</p>
          <p className="font-opensans font-normal text-[1rem] text-colortext text-center leading-[175%] tracking-[4%]">Saturday-Sunday:<br/>07:00am -11:00 pm</p>
        </div>
      </article>
      <div className="flex flex-col place-items-center">
      <p className="font-opensans font-normal text-[1rem] text-center text-colortext leading-[175%] tracking-[4%] mt-[64px]">2024 Gerícht. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer