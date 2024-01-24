import React from 'react'
import gletter from '../../assets/G.png'
import decoration from '../../assets/decorationTitle.png'
import knife from '../../assets/knife.png'
const About = () => {
  return (
    <section className=" bg-bgAbout  bg-no-repeat bg-cover relative flex justify-center items-center p-[4rem]">
      <div className="absolute inset-0 flex justify-center items-center ">
        <img src={gletter} alt="gletter" className="w-[80%] h-[320px] sm:w-[391px] sm:h-[415px]   z-[0]" />
      </div>
      <div className="w-[100%] flex flex-col lg:flex-row justify-center items-center z-[2]">
        <div className="flex flex-col flex-1 items-center justify-center text-center lg:items-end lg:justify-end lg:text-right gap-8" >
          <h1 className="font-cormorant text-primary text-[64px] font-semibold tracking-[1.92px] leading-[83.2px]">About Us</h1>
          <div>
            <img src={decoration} alt="decoration" className="rotate-180" />
          </div>
          <div>
            <p className="text-colortext  font-opensans font-normal text-[1rem] leading-7 tracking-[0.64px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          </div>
          <button className="bg-primary py-2 px-8 cursor-pointer">
            <p className="font-cormorant font-bold text-[1rem] leading-7 tracking-[0.64px]">Know More</p>
          </button>
        </div>
        <div className="py-8 px-[4rem] flex justify-center items-center">
          <img src={knife} alt="knife" className=" h-[703px]" />
        </div>
        <div className="flex flex-col flex-1 items-center justify-center text-center lg:items-start lg:justify-start lg:text-left gap-8  " >
          <h1 className="font-cormorant text-primary text-[64px] font-semibold tracking-[1.92px] leading-[83.2px]">Our History</h1>
          <div>
            <img src={decoration} alt="decoration" />
          </div>
          <div>
            <p className="text-colortext  font-opensans font-normal text-[1rem] leading-7 tracking-[0.64px]">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
          </div>
          <button className="bg-primary py-2 px-8 cursor-pointer">
            <p className="font-cormorant font-bold text-[1rem] leading-7 tracking-[0.64px]">Know More</p>
          </button>

        </div>
        <div>

        </div>
      </div>

    </section>
  )
}

export default About