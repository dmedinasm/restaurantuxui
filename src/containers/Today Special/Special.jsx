import React from 'react'
import decoration from '../../assets/decorationTitle.png'
import { Menu } from '../../components'
import special from '../../assets/special.png'
import { menuWines, menuCocktails } from '../../data'
const Special = () => {
  return (
    <section className="flex flex-col items-center justify-between py-[80px] px-[50px] w-[100%] gap-12">
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <p className="font-cormorant font-bold text-white text-center text-[23px] leading-[30px] tracking-[0.92px]">Menu that fits you palatte</p>
        </div>
        <div className="flex items-center justify-center">
          <img src={decoration} alt="decoration" />
        </div>
        <h1 className="font-cormorant font-semibold text-[64px] text-center text-primary leading-[83.2px] tracking-[2.56px]">Today’s Special</h1>
      </div>
      <aside className="flex flex-col lg:flex-row items-start justify-center mt-4 ">
        <div className="flex flex-col items-center justify-center gap-8   ">
          <h2 className="font-cormorant font-semibold text-[45px] text-white  leading-[58.5px] tracking-[1.8px]">Wine & Beer</h2>
          <div className='flex flex-col items-center  gap-8'>
          {
              menuWines.map(data =>
                <Menu key={data.name} name={data.name} price={data.price} features={data.features}/>
                )
             
            }
          </div>
        </div>
        <div className="px-4">
          <img src={special} alt="special" className="w-[300px] h-[550px]"/>
        </div>
        <div className="flex flex-col mt-12 lg:mt-0 items-center justify-center gap-8  ">
          <h2 className="font-cormorant font-semibold text-[45px] text-white  leading-[58.5px] tracking-[1.8px]">Cocktails</h2>
          <div className='flex flex-col items-center justify-start gap-8' >
          {
              menuCocktails.map(data =>
                <Menu key={data.name} name={data.name} price={data.price} features={data.features}/>
                )
             
            }
            
          </div>
        </div>
      </aside>
      <button className="bg-primary py-2 px-8 mt-8">
        <p className="font-cormorant font-bold text-[1rem] leading-7 tracking-[0.64px]">View More</p>
      </button>
    </section>
  )
}

export default Special