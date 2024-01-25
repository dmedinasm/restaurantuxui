import React from 'react'

const Menu = ({name, price,features}) => {
  return (
    <div className="flex flex-col justify-start gap-1 w-[100%] ">
      <div className="flex flex-row items-center justify-between gap-4 ">
        <div >
          <p className="font-cormorant font-bold text-[23px] text-primary leading-[30px] tracking-[0.92px]">{name}</p>
        </div>
        <div className="flex flex-row items-center justify-end gap-8">
          <div className="bg-[#FAFAFA] w-[85px] h-[1px] " />
          <div >
            <p className="font-cormorant font-bold text-[23px] text-white leading-[30px] tracking-[0.92px]">{price}</p>
          </div>
        </div>
      </div>
      <div>
        <p className="font-opensans font-normal text-[12px] text-colortext leading-7 tracking-[0.64px]">{features}</p>
      </div>
    </div>
  )
}

export default Menu