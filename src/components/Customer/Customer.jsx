import React from 'react'
import wade from '../../assets/Wade.png'
import coma from '../../assets/coma.png'
const Customer = ({name,quote,occupation, image}) => {
  return (
    <article className="flex flex-col sm:flex-row items-center justify-center gap-4 relative ">
      <div>
        <img src={image} alt="customer picture" className=" max-w-[100%]  "/>
      </div>
      <div className="flex flex-col items-center sm:items-start max-w-[412px] sm:w-[412px] gap-4 ">
        <p className="font-opensans font-normal text-center sm:text-start text-[1rem] text-colortext italic leading-[175%] tracking-[4%]">
        {quote}
        </p>
        <h2 className="font-cormorant font-normal text-[1.5rem] sm:text-[2rem] text-primary">{name}</h2>
        <p className="font-opensans font-normal text-[1rem] text-[#f5efdb] leading-[175%] tracking-[4%]">{occupation}</p>
      </div>
      <img src={coma} alt="big coma text" className="absolute bottom-[-30px]  sm:left-[25%] w-[8%]" />
    </article>

  )
}

export default Customer