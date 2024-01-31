import React from 'react'
import imageblog from '../../assets/img1_blog.png'
const Article = ({text, date, author,title, image}) => {
  return (
    <article className="flex flex-col  justify-center "> 
      <img src={image} alt="image card" className="max-w-[100%]  " />
      <div className="flex flex-row justify-between items-center mt-2 mb-12">
          <p className="font-opensans font-normal text-[16px] text-[#fafafa] leading-[175%] tracking-[4%]">{date}</p>
          <p className="font-opensans font-normal text-[16px] text-[#fafafa] leading-[175%] tracking-[4%]">{author}</p>
        </div>
      <div className="flex flex-col  justify-center gap-8 max-h-[100%] h-[300px] ">
        <h2 className="font-cormorant font-normal text-[2rem] hover:underline cursor-pointer text-primary leading-[130%] tracking-[4%]">{title}</h2>
        <p className="font-opensans font-normal text-[16px] text-colortext leading-[175%] tracking-[4%]">{text}</p>
        <p className="font-bold font-cormorant text-[1rem] cursor-pointer text-primary leading-[175%] tracking-[4%]">Read More</p>
      </div>
    </article>
  )
}

export default Article