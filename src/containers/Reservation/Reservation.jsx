import React from 'react'
import { Dialog } from '../../components'
import decoration from '../../assets/decorationTitle.png'
const Reservation = () => {
  return (
    <section className="py-[152px]  flex justify-center items-center">
      <main className="bg-[#0C0C0C] flex flex-col items-center justify-center py-12">
        <div className="mb-8">
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="font-cormorant font-bold text-[23px] text-[#FFFFFF] leading-[30px] tracking-[0.92px]">Reservations</p>
          </div>
          <div className="flex justify-center items-center">
            <img src={decoration} alt="decoration" />
          </div>
          <h1 className="font-cormorant font-semibold text-primary text-[64px] leading-[83.2px] tracking-[1.92px]">Book A Table</h1>
        </div>
        <form className="flex flex-col  items-center justify-center gap-8">
          <div className="flex flex-row flex-wrap items-center justify-center gap-8">
          <select className="py-3 px-8 w-[280px] font-cormorant font-semibold text-[1rem] leading-7 tracking-[0.64px] border bg-slate-500 border-primary text-primary outline-none  ">
            <option>1 Person</option>
            <option>2 Persons</option>
            <option>4 Persons</option>
            <option>8 Persons</option>
          </select>
            <input type="date" className="py-2 px-8 w-[280px] font-cormorant font-semibold text-[1rem] leading-7 tracking-[0.64px] bg-slate-500 border border-primary text-primary outline-none" />
            <input type="time" step="360" className="py-2 px-8 w-[280px] font-cormorant font-semibold text-[1rem] leading-7 tracking-[0.64px] bg-slate-500 border border-primary text-primary outline-none" />
          </div>
            <input type="button" value="Book a Table" className="bg-primary py-2 px-8 cursor-pointer font-cormorant font-bold text-[1rem] leading-7 tracking-[0.64px] mt-8 " />
          
        </form>
      </main>
    </section>
  )
}

export default Reservation