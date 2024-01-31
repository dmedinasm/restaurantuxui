import React from 'react'
import decoration from '../../assets/decorationTitle.png'
import Award from '../../components/Award/Award'
import imgMainAward from '../../assets/AwardMain.png'
import { awardsData } from '../../data'
import Gletter2 from '../../assets/Gletter2.png'
const Awards = () => {
  return (
    <section className="flex  flex-col md:flex-row items-center justify-between bg-bgAward bg-cover py-[200px] px-[100px] gap-[64px] relative">
      <aside className="flex flex-col items-center md:items-start justify-center gap-6 lg:gap-10">
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="font-cormorant font-bold leading-[130%] text-[18px]  lg:text-[23px] text-white tracking-[4%]">Awards & recognition</h3>
          <img src={decoration} alt="decoration title" />
          <h1 className="font-cormorant font-semibold text-[50px] leading-[100%] text-center lg:text-start lg:text-[64px] text-primary lg:leading-[130%] tracking-[3%] mt-2">Our Laurels</h1>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-10 gap-x-4">
          {
            awardsData.map(value =>
              <Award key={value.awardName} awardName={value.awardName} text={value.text} image={value.image} />
              )
          }
        </div>
      </aside>
      <aside className="relative p-4" >
      <div>
        <img src={imgMainAward}  alt="img Main" className=" max-w-[100%] w-[483px]"  />
      </div>
      <img src={Gletter2} alt="G letter image" className="absolute  w-[60%] bottom-[16px] left-[-34px]" />
      </aside>
      
    </section>
  )
}

export default Awards