import React, { useEffect, useState } from 'react';
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";

function ArticleItems({ data, coverArticleIndex, setCoverArticleIndex, setCoverArticle }) {
  const uniqueTitlesSet = new Set();
  const [offset, setOffset] = useState(0);
  let articlesNum = 0;

  const changeCoverArticle = (i) => {
    setCoverArticleIndex(i);
    setCoverArticle(data[i]);
    setOffset(0);
    [...document.getElementsByClassName("scroll-item")].forEach(el => el.style.transform = `translateY(0)`);
    articlesNum = 0;
  };

  // useEffect(() => {
  //   setOffset(0);
  //   articlesNum = 0;
  //   [...document.getElementsByClassName("scroll-item")].forEach(el => el.style.transform = `translateY(0)`);
  // }, [coverArticleIndex, data]);

  useEffect(() => {
    console.log(offset);
  }, [offset]);

  const scrollItemsUp = () => {
    setOffset(prev => {
      let newOffset = prev;
      console.log(Math.round(articlesNum/2) + 2 * 200)
      
      if(!(prev + 200 === (Math.round(articlesNum/2) + 2) * 200))
        {
        newOffset += 200;
        [...document.getElementsByClassName("scroll-item")].forEach(el => el.style.transform = `translateY(-${newOffset}%)`);
      }
      
      return newOffset;
     
    });
  };

  const scrollItemsDown = () => {
    setOffset(prev => {
      let newOffset = prev - 200;
      if (newOffset < 0) newOffset = 0;
      [...document.getElementsByClassName("scroll-item")].forEach(el => el.style.transform = `translateY(-${newOffset}%)`);
      return newOffset;
    });
  };

  return (
    <div className="w-[45%] flex overflow-y-hidden">
      <ul className='text-[#808080] space-y-8 bg-transparent'>
        {
          data?.map((el, i) => {
            if (i !== coverArticleIndex && !uniqueTitlesSet.has(el.data[0].title)) {
              uniqueTitlesSet.add(el.data[0].title);
              articlesNum+=1;
              return (
                <li className='scroll-item flex cursor-pointer transition-all' key={i} onClick={() => changeCoverArticle(i)}>
                  <img src={el.links[0].href} alt="article-cover" className='w-32 h-32 object-cover mr-3 ' />
                  <div className='flex flex-col justify-between'>
                    <div className='info text-xs pt-3'>
                      <span className='pr-3 border-r-[1px] border-[#808080]'>{el.data[0].photographer?.split("/")[1] ?? "unknown"}</span>
                      <span className='px-3'>{new Date(el.data[0].date_created).toLocaleDateString()}</span>
                    </div>
                    <h2 className='text-white '>{el.data[0].title.substring(0, 40)}...</h2>
                    <div className='info text-xs pb-3 space-x-1'>
                      {el.data[0].keywords?.map((keyword, i) => { if (i < 2) return (<span className=''>{keyword + `${i !== 1 ? "," : ""}`}</span>) }) ?? "Space and Universe"}
                    </div>
                  </div>
                </li>
              );
            }
            return null;
          })
        }
      </ul>
      <div className='flex flex-col absolute right-10 h-[85vh] justify-between bottom-2'>
        <CiCircleChevDown color="white" size={30} className='cursor-pointer hover:scale-95 active:scale-95 ' onClick={scrollItemsUp} />
        <CiCircleChevUp color="white" className='hover:scale-95 active:scale-95 cursor-pointer' onClick={scrollItemsDown} size={30} />
      </div>
    </div>
  );
}

export default ArticleItems;
