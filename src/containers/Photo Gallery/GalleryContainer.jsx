import React from 'react'
import Gallery from '../../components/Gallery/Gallery'
import decoration from '../../assets/decorationTitle.png'
import { galleryImages } from '../../data'
const GalleryContainer = () => {
  return (
    <section className="bg-bgGallery bg-cover flex flex-col gap-[64px] md:gap-0 md:flex-row items-center py-[64px] px-[64px] ">
      <article className="flex flex-col items-center md:items-start justify-center gap-6">
        <s></s><div className="flex flex-col items-center md:items-start md:text-start">s

          <h3 className="font-cormorant font-bold text-[23px] text-white leading-[130%] tracking-[4%]">Instagram</h3>
          <div>
            <img src={decoration} alt='decoration title' />
          </div>
        </div>
      
        <h1 className="font-cormorant font-semibold text-[64px] text-center sm:text-start text-primary leading-[130%] tracking-[3%]">Photo Gallery</h1>
        <p className="font-opensans font-normal text-[1rem] text-colortext leading-[175%] tracking-[4%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button className="bg-primary py-2 px-8">
          <p className="font-cormorant font-bold text-[1rem] text-[#0c0c0c] leading-[175%] tracking-[4%]">View More</p>
        </button>
      </article>
      <aside>
        <Gallery images={galleryImages} />
      </aside>
    </section>
  )
}

export default GalleryContainer