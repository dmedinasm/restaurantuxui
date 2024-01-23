import React from 'react'
import gletter from '../../assets/G.png'
import decoration from '../../assets/decorationTitle.png'
import knife from '../../assets/knife2.png'
const About = () => {
  return (
    <section className="my-[152px] p-[155px] h-[150vh] flex flex-row justify-center items-center  bg-bgAbout relative gap-8">
      <div className="flex flex-col items-end justify-center gap-8  z-[3]  mr-[100px]" >
        <h1 className="font-cormorant text-primary text-[64px] font-semibold tracking-[1.92px] leading-[83.2px]">About Us</h1>
        <div>
          <img src={decoration} alt="decoration" className="rotate-180"/>
        </div>
        <div>
          <p className="text-colortext text-end font-opensans font-normal text-[1rem] leading-7 tracking-[0.64px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        </div>
        <button className="bg-primary py-2 px-8 cursor-pointer">
          <p className="font-cormorant font-bold text-[1rem] leading-7 tracking-[0.64px]">Know More</p>
        </button>
      </div>
      <img src={gletter} alt="gletter" className="w-[391px] h-[415px] absolute z-[1]" />
        <img src={knife} alt="knife" className=" absolute  w-[703px] h-[84px] rotate-90 z-[2]" />
      
      <div className="flex flex-col items-start justify-center gap-8 z-[3] ml-[100px]" >
        <h1 className="font-cormorant text-primary text-[64px] font-semibold tracking-[1.92px] leading-[83.2px]">Our History</h1>
        <div>
          <img src={decoration} alt="decoration"/>
        </div>
        <div>
          <p className="text-colortext text-start font-opensans font-normal text-[1rem] leading-7 tracking-[0.64px]">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        </div>
        <button className="bg-primary py-2 px-8 cursor-pointer">
          <p className="font-cormorant font-bold text-[1rem] leading-7 tracking-[0.64px]">Know More</p>
        </button>

      </div>
      <div>

      </div>
    </section>
  )
}

export default About