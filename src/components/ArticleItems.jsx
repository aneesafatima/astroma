import React, { useEffect, useState } from 'react'
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
let offset=0;
function ArticleItems({data, coverArticleIndex, setCoverArticleIndex, setCoverArticle}) {
    
    const changeCoverArticle = (i) =>{
      setCoverArticleIndex(i);
      setCoverArticle(data[i])
    }

useEffect(() => {
offset = 0;
[...document.getElementsByClassName("scroll-item")].map(el => el.style.transform = `translateY(0)`)
}, [coverArticleIndex])
    const scrollItemsUp = () => {
    offset+=200;
   [...document.getElementsByClassName("scroll-item")].map(el => el.style.transform = `translateY(-${offset}%)`)
    }
    const scrollItemsDown = () => {
    offset-=200;
    offset < 0 ? null :
   [...document.getElementsByClassName("scroll-item")].map(el => el.style.transform = `translateY(-${offset}%)`)
    }
      return (
   <div className="w-[45%] flex  overflow-y-hidden">
    <ul className='text-[#808080] space-y-8  bg-transparent '> 
        {data.map((el,i) => i === coverArticleIndex ? "" :
         (
 <li className='scroll-item flex cursor-pointer transition-all' key={i} onClick={() => changeCoverArticle(i)}>
            <img src={el.links[0].href} alt="article-cover" className='w-32 h-32 object-cover mr-3 '/>
            <div className='flex flex-col justify-between'>
                <div className='info text-xs pt-3'>
                <span className='pr-3 border-r-[1px] border-[#808080]'>{el.data[0].photographer?.split("/")[1] ?? "unknown"}</span>
                <span className='px-3'>{new Date(el.data[0].date_created).toLocaleDateString()}</span></div>
                <h2 className='text-white '>{el.data[0].title.substring(0,40)}...</h2>
                <div className='info text-xs pb-3 space-x-1'>
                {el.data[0].keywords?.map((keyword, i) => { if(i<2) return (<span className=''>{keyword + `${i!==1 ? "," : ""}`}</span>)}) ?? "Space and Universe"
                
                }
                  
                </div>
            </div>
        </li>


        ))
        
        
        }
       
    </ul> 
    <div className='flex flex-col  absolute right-10 h-[85vh] justify-between bottom-2'>
      <CiCircleChevDown color="white" size={30} className='cursor-pointer hover:scale-95 active:scale-95 ' onClick={scrollItemsUp}/>
      <CiCircleChevUp color="white" className='hover:scale-95 active:scale-95'   onClick={scrollItemsDown} size={30}/>
    </div>
    
    </div>
  )
}

export default ArticleItems
