import React from 'react'
import decoration from '../../assets/decorationTitle.png'
const Title = ({title}) => {
  return (
    <div >
      <div className=" text-white font-cormorant font-bold text-[18px] leading-[30px] tracking-tight[0.92px]">
        {title}
      </div>
      <div className="mt-2">
        <img src={decoration} alt="title"/>
      </div>
    </div>
  )
}

export default Title