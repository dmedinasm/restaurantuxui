import React from 'react'

const Award = ({awardName,text,image}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <div>
        <img src={image} alt="award1 picture" />
      </div>
      <div>
        <h4 className="font-cormorant font-bold text-[23px] text-center sm:text-start text-primary leading-[130%] tracking-[4%]">{awardName}</h4>
        <p className="font-opensans font-normal text-[1rem]  text-center sm:text-start text-colortext leading-[175%] tracking-[4%]">{text}</p>
      </div>
    </div>
  )
}

export default Award
