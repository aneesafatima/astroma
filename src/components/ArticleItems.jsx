import React from 'react'
import demo from '../assets/astronaut.png'
function ArticleItems({data, index, setCoverArticle}) {
    const changeCoverArticle = (i) =>{
        
    }
  return (
   
    <ul className='text-[#808080] space-y-8  bg-transparent'> 
        {data.map((el,i) => 
         (
 <li className='flex cursor-pointer' key={i} onClick={() => changeCoverArticle(i)}>
            <img src={el.links[0].href} alt="article-cover" className='w-32 h-32 bg-red-600 object-cover mr-3 '/>
            <div className='flex flex-col justify-between'>
                <div className='info text-xs pt-3'>
                <span className='pr-3 border-r-[1px] border-[#808080]'>{el.data[0].photographer?.split("/")[1] ?? "unknown"}</span>
                <span className='px-3'>October 22,2023</span></div>
                <h2 className='text-white '>{el.data[0].title.substring(0,40)}...</h2>
                <div className='info text-xs pb-3'>
                    <span className='pr-3 border-r-[1px] border-[#808080]' >planet</span>
                    <span className='px-3 border-r-[1px] border-[#808080]' >planet</span>
                    <span className='px-3' >planet</span>
                </div>
            </div>
        </li>


        ))
        
        
        }
       
    </ul>
  )
}

export default ArticleItems
