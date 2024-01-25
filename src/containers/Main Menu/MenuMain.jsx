import React from 'react'
import bg from '../../assets/bgMenu.png'
const MenuMain = () => {
  return (
    <section  className="h-[900px] bg-bgMenu bg-cover flex items-center justify-center sm:justify-start p-[72px]">
        <ul className="flex flex-col gap-12">
          <li className="font-cormorant text-[40px] text-center sm:text-start leading-[50px] sm:text-[55px] tracking-[1.20px] cursor-pointer hover:underline text-white font-semibold sm:leading-[71.5px] sm:tracking-[1.65px]">Bar Menu</li>
          <li className="font-cormorant text-[40px] text-center sm:text-start leading-[50px] sm:text-[55px] tracking-[1.20px] cursor-pointer hover:underline text-white font-semibold sm:leading-[71.5px] sm:tracking-[1.65px]">Food Menu</li>
          <li className="font-cormorant text-[40px] text-center sm:text-start leading-[50px] sm:text-[55px] tracking-[1.20px] cursor-pointer hover:underline text-white font-semibold sm:leading-[71.5px] sm:tracking-[1.65px]">Desserts Menu</li>
        </ul>
      
    </section>
  )
}

export default MenuMain