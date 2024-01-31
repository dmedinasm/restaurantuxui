import React from 'react'
import Article from '../../components/Article/Article'
import decoration from '../../assets/decorationTitle.png'
import img1 from '../../assets/img1_blog.png'
import img2 from '../../assets/img2_blog.png'
import img3 from '../../assets/img3_blog.png'
const Blog = () => {
  return (
    <section className="flex flex-row items-center justify-center py-[200px] px-[150px]">
      <article className="flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-cormorant font-bold text-[23px] text-white leading-[130%] tracking-[4%]">Blogs</h3>
          <img src={decoration} alt='decoration title' />
          <h1 className="font-semibold font-cormorant text-[64px] text-center md:text-start text-primary leading-[130%] tracking-[3%]">Gerícht Updates</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[64px] lg:grid-cols-3 gap-8">
          <Article 
          title={"Tips For Prepping And Caring For Your Grill"} 
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in."}
          image={img1}
          author = {"- Annalisa L"}
          date={"16 Apr 2021"}
          />
          <Article 
          title={"Summer Cocktails And Mocktails"} 
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in."}
          image={img2}
          author = {"- John Micheal"}
          date={"23 May 2021"}
          />
          <Article 
          title={"Easy Cooking For College Students"} 
          text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in."}
          image={img3}
          author = {"- Fred W"}
          date={"06 Aug 2021"}
          />
         
        </div>
        <button className="bg-primary py-2 px-8">
          <p className="font-bold font-cormorant text-[1rem] text-[#0C0C0C] leading-[175%] tracking-[4%]">View More</p>
        </button>
      </article>
    </section>
  )
}

export default Blog