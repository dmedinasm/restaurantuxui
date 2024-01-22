import React from 'react'
import { Title } from '../../components/index'
import HeroImg from '../../assets/Hero img.png'
import slider from '../../assets/Slider.png'
const Hero = () => {
  return (
    <section className="flex flex-row justify-center items-center my-12 gap-[128px] relative">
      <div className="absolute -rotate-90 left-10 top-[40px]">
        <p className="font-opensans cursor-pointer  font-normal text-[14px] text-white leading-6 tracking-[0.56px]inline-block">#Gericht</p>
      </div>
      <div className="absolute -rotate-90 left-[50px] inline">
        <p className="font-opensans cursor-pointer absolute font-normal text-[14px] text-white leading-6 tracking-[0.56px]">#Bar</p>
      </div>
      <div className="flex flex-col justify-center items-start w-[323px] ">
        <div>
          <Title title={"Chase the new Flavour"} />
        </div>
        <div className="mt-2">
          <h1 className="text-primary text-[64px] font-cormorant font-bold leading-[84px]">The Key to Fine Dining</h1>
        </div>
        <div className="mt-8">
          <p className="font-opensans text-[#AAAAAA] font-normal text-[14px] tracking-[0.56px] leading-6">Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
        </div>
        <div className="mt-8">
          <button className="bg-primary font-bold text-[1rem] py-2 px-8 font-cormorant"><p>Explore Menu</p></button>
        </div>
      </div>
      <div className="w-[476px] h-[526]">
        <img src={HeroImg} alt='hero' className="w-[100%]" />
      </div>
      <div className="position absolute top-[100%] mt-12">
        <img className="w-[116px] h-[28px] " src={slider} alt="slider" />
      </div>
      <div className="absolute right-[5%] top-[99%]  ">
        <div className="mb-10">
          <div className="  border border-solid bg-gradient-to-r from-primary to-[rgba(220,202,135,0.24)]   rotate-90"></div>
        </div>
        <div>
          <p className="font-cormorant font-bold text-[14px] leading-6 text-primary">SCROLL</p>
        </div>
      </div>
    </section>
  )
}

export default Hero