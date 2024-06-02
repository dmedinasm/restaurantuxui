import React from 'react'
import HeroImg from '../../assets/Hero img.png'
import slider from '../../assets/Slider.png'
import decoration from '../../assets/decorationTitle.png'
const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row p-8 justify-center items-center my-8 lg:my-12 gap-12 xl:gap-[128px] w-[100%] relative">
      <div className="hidden xl:block absolute -rotate-90 left-10 top-[40px]">
        <p className=" font-opensans cursor-pointer  font-normal text-[14px] text-white leading-6 tracking-[0.56px]inline-block">#Gericht</p>
      </div>
      <div className="hidden xl:block absolute -rotate-90 left-[50px] ">
        <p className="font-opensans cursor-pointer absolute font-normal text-[14px] text-white leading-6 tracking-[0.56px]">#Bar</p>
      </div>
      <div className="flex flex-col justify-center items-center md:items-start w-[323px]">
        <div className="flex flex-col items-center md:items-start" >
          <div >
            <p className=" text-white font-cormorant font-bold text-[18px] leading-[30px] tracking-tight[0.92px]">Chase the new Flavour</p>
          </div>
          <div className="mt-2">
            <img src={decoration} alt="title" />
          </div>
        </div>
        <div className="mt-2">
          <h1 className="text-primary text-[50px] lg:text-[64px] text-center md:text-start font-cormorant font-bold leading-[60px]  lg:leading-[84px]">The Key to Fine Dining</h1>
        </div>
        <div className="mt-8">
          <p className="font-opensans text-center md:text-start text-[#AAAAAA] font-normal text-[14px] tracking-[0.56px] leading-6">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
        </div>
        <div className="mt-8">
          <button className="bg-primary font-bold text-[1rem] py-2 px-8 font-cormorant"><p>Explore Menu</p></button>
        </div>
      </div>
      <div className="  px-5 sm:w-[476px] sm:h-[526]">
        <img src={HeroImg} alt='hero' className="w-[376] h-[476] sm:w-[100%]" />
      </div>
      <div className="position absolute top-[100%] ">
        <img className="w-[116px] h-[28px] " src={slider} alt="slider" />
      </div>

    </section>
  )
}

export default Hero
