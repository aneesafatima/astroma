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
    <div className="w-full h-fit md:w-[45%] md:h-screen overflow-hidden">
      <ul className='text-[#808080]  md:space-y-7 space-x-10 md:space-x-0 bg-transparent flex flex-row md:flex-col overflow-auto'>
        {
          data?.map((el, i) => {
            if (i !== coverArticleIndex && !uniqueTitlesSet.has(el.data[0].title)) {
              uniqueTitlesSet.add(el.data[0].title);
              articlesNum+=1;
              return (
                <li className='flex w-96 bg-red-50 md:w-fit md:space-x-0 space-x-5 scroll-item  items-center cursor-pointer transition-all' key={i} onClick={() => changeCoverArticle(i)}>
                  <img src={el.links[0].href} alt="article-cover" className='w-28 h-28 md:w-32 md:h-32 object-cover md:mr-3 ' />
                  <div className='flex flex-col text-xs md:justify-between'>
                    <div className='info text-xs pt-3'>
                      <span className='pr-3 border-r-[1px] border-[#808080]'>{el.data[0].photographer?.split("/")[1] ?? "unknown"}</span>
                      <span className='px-3'>{new Date(el.data[0].date_created).toLocaleDateString()}</span>
                    </div>
                    <h2 className='text-white text-sm md:text-lg '>{el.data[0].title.substring(0, 40)}...</h2>
                    <div className='info text-xs pb-3 space-x-1 '>
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
      <div className='flex w-full md:flex-col fixed md:right-10 h-[85vh] justify-between bottom-0'>
        <CiCircleChevDown color="white" size={30} className='cursor-pointer hover:scale-95 active:scale-95 ' onClick={scrollItemsUp} />
        <CiCircleChevUp color="white" className='hover:scale-95 active:scale-95 cursor-pointer' onClick={scrollItemsDown} size={30} />
      </div>
    </div>
  );
}

export default ArticleItems;
