import React, {useEffect, useState} from 'react'
import {SearchBar, ArticleItems, Loader} from '.'
import {useGetArticlesByCategoryQuery} from '../services/astronomicalObjects';
import { MdOutlineSearchOff } from "react-icons/md";


function CosmicGallery() {
  console.log("Hello from cosmic gallery !")
  //hide scrollbar

  const [searchTerm , setSearchTerm] = useState("general");
const [coverArticleIndex, setCoverArticleIndex] = useState(0);
  const {data, isFetching} = useGetArticlesByCategoryQuery(searchTerm);
  const [coverArticle, setCoverArticle] = useState("");
  useEffect(()=>{
    setCoverArticle(data?.collection?.items[0]);
  },[data])


 
  return ( 
    <div className='bg-black min-h-screen relative px-5 pb-5 pt-5 transition-all main-scrollbar'> 
      <SearchBar setSearchTerm={setSearchTerm}/>
      {isFetching &&  <Loader color="#808080"/>  }

      {!isFetching && data?.collection?.items.length === 0 && 
      <div className=" bg-green-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent text-[#808080] text-[1rem] sm:text-[2rem]">No results<MdOutlineSearchOff className='mx-3' color="#808080"/></div>}

      {!isFetching && data?.collection?.items.length !== 0 && 
      <div className="flex pt-10 flex-col spaxe-x-5 md:flex-row flex-wrap md:flex-nowrap space-y-10 ">
     <div className='flex mr-10 pr-4 space-y-6 justify-center md:justify-normal items-start flex-col flex-wrap w-full md:w-[70%]' >
     <div className='w-full flex flex-col md:flex-row items-center space-x-3 space-y-6'>
     <h3 className='text-white text-4xl font-light leading-[1.3] w-full text-center  md:w-[400px]'>
     {coverArticle?.data[0]?.title}
      </h3>
      <img src={coverArticle?.links[0]?.href} className="w-[390px] h-72 mx-10 object-cover" alt="article cover" />
     </div>
     <div className='w-full space-y-5'>
       <p className='text-[#808080] text-xs leading-5 mt-5'>
   {   coverArticle?.data[0]?.description}
      </p>
      <ul className='text-[#808080] flex text-xs pr-8' id="tag">
        <li className='border-r-[1px] border-[#808080] px-5 flex space-x-1'>{coverArticle?.data[0]?.keywords?.map((el, i) => { if(i<2) return (<li key={i}>{el + `${i!==1 ? "," : ""}`}</li>)}) ?? "Space and Universe"}</li>
        <li className='border-r-[1px] border-[#808080] px-5 '>{coverArticle?.data[0]?.photographer?.split("/")[1] ?? "unknown"}</li>
        <li className='px-5 '>{new Date(coverArticle?.data[0]?.date_created).toLocaleDateString()
}</li>
      </ul>
     </div>
     </div> 
     <ArticleItems data={data?.collection?.items} coverArticleIndex = {coverArticleIndex} setCoverArticleIndex={setCoverArticleIndex} setCoverArticle = {setCoverArticle}/>
     </div> }
    </div>
    )
  
  
}

export default CosmicGallery
