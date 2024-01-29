import React from 'react'
import chef from '../../assets/chef.png'
import decoration from '../../assets/decorationTitle.png'
import coma from '../../assets/coma.png'
function Chef() {
  return (
   <section className="bg-bgChef bg-cover  py-[100px] px-[60px] mt-8">
    <div className="flex flex-col md:flex-row items-center justify-center">
    <aside className="flex items-center justify-center p-4  flex-1 ">
        <img src={chef} alt="chef picture" className=" max-w-[100%]  w-[453px] " />
      </aside>
      <aside className="flex flex-col mt-8 md:mt-0 items-center xl:items-start justify-center flex-1 ">
        <h2 className="font-cormorant font-bold text-white text-[23px] leading-[30px] tracking-[0.92px] ">Chef’s Word</h2>
        <div className="mt-2">
          <img src={decoration} alt="decoration text" />
        </div>
        <h1 className="font-cormorant font-semibold text-primary text-center xl:text-start  text-[50px]   xl:text-[64px] leading-[130%] tracking-[3%] mt-6 mb-9">What We Believe In</h1>
        <div>
          <div className="flex flex-row items-center">
          <img src={coma} alt="coma capital letter" className="w-[47px] h-[40px] " />
          <p className="font-opensans text-center xl:text-start font-normal text-colortext text-[1rem] leading-7 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
          </div>
          <p className="font-opensans font-normal text-center xl:text-start text-colortext text-[1rem] leading-10 tracking-[0.64px] mb-9">auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
        </div>
        <h2 className="font-cormorant font-normal text-primary text-[2.5rem] leading-[130%] tracking-[4%]">Kevin Luo</h2>
        <div>
          <p className="font-opensans font-normal text-colortext text-[1rem] leading-7 tracking-[4%] mb-10">Chef & Founder</p>
        </div>
        <h3 className="font-bester font-normal text-colortext text-[64px] leading-[130%] tracking-[4%]">Kevin Luo</h3>
      </aside>
    </div>
      
   </section>
  )
}

export default Chef