import React from 'react'
import decoration from '../../assets/decorationTitle.png'
import Customer from '../../components/Customer/Customer'
import { customersData } from '../../data'
const Testimony = () => {
  return (
    <section className="flex  justify-center items-center py-[128px] px-[100px]" >
      <div className="flex flex-col justify-center items-center">
        <aside>
          <h3 className="font-cormorant font-bold text-[23px] text-center text-[white] leading-[130%] tracking-[4%]">Testimony</h3>
          <div className="flex justify-center items-center mt-2">
            <img src={decoration} alt="decoration title" className="text-center" />
          </div>
          <h1 className="font-cormorant font-semibold text-[50px] sm:text-[64px] text-center text-primary leading-[100%] sm:leading-[130%] tracking-[3%] mb-10">Happy Customers</h1>
        </aside>
        <aside className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-[80px] sm:gap-y-[64px]">
          {
            customersData.map(value =>
              <Customer key={value.name} name={value.name} quote={value.quote} occupation={value.occupation} image={value.image} />
              )
          }
         
        </aside>
      </div>
    </section>
  )
}

export default Testimony