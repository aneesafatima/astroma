import React, {useEffect, useState} from 'react'
import {SearchBar, ArticleItems} from '.'
import {useGetArticlesByCategoryQuery} from '../services/astronomicalObjects';
import {MoonLoader} from "react-spinners/MoonLoader";
import { MdOutlineSearchOff } from "react-icons/md";


function PlanetaryInfo() {
  const titles = [];
  const [searchTerm , setSearchTerm] = useState("");
const [coverArticleIndex, setCoverArticleIndex] = useState(0);
  const {data, isFetching} = useGetArticlesByCategoryQuery(searchTerm);
  const [coverArticle, setCoverArticle] = useState("");
  const [isloading, setIsLoading] = useState(true)
  useEffect(()=>{
    setCoverArticle(data?.collection?.items[0]);
  },[data])

//   if(isFetching) return  <MoonLoader
//   color="gray"
//   loading={!isloading}
//   size={100}
//   aria-label="Loading Spinner"
//   data-testid="loader"
// />

console.log(data)

 
  return (
   !isFetching && 
    <div className='bg-black h-screen px-5 overflow-hidden transition-all'> 
      <SearchBar setSearchTerm={setSearchTerm}/>
      {!isFetching && data?.collection?.items.length === 0 && <div className="h-[90vh] flex justify-center items-center bg-transparent text-[#808080] text-[2rem]">No results<MdOutlineSearchOff className='mx-3' color="#808080"/></div>}
      <div className="flex pt-10 ">
     <div className='flex mr-20 pr-4 items-start flex-col w-[70%]' >
     <div className='w-fit flex items-center space-x-3'>
     <h3 className='text-white text-5xl font-light leading-[1.3] w-[400px]'>
     {coverArticle?.data[0]?.title}
      </h3>
      <img src={coverArticle?.links[0]?.href} className="w-[390px] h-72 object-cover" alt="" />
     </div>
     <div className='w-full space-y-5'>
       <p className='text-[#808080] text-xs leading-5 mt-5'>
   {   coverArticle?.data[0]?.description}
      </p>
      <ul className='text-[#808080] flex text-xs pr-8'>
        <li className='border-r-[1px] border-[#808080] px-5 flex space-x-1'>{coverArticle?.data[0]?.keywords?.map((el, i) => { if(i<2) return (<li>{el + `${i!==1 ? "," : ""}`}</li>)}) ?? "Space and Universe"}</li>
        <li className='border-r-[1px] border-[#808080] px-5 '>{coverArticle?.data[0]?.photographer?.split("/")[1] ?? "unknown"}</li>
        <li className='px-5 '>{new Date(coverArticle?.data[0]?.date_created).toLocaleDateString()
}</li>
      </ul>
     </div>
     </div> 
     <ArticleItems data={data?.collection?.items} coverArticleIndex = {coverArticleIndex} setCoverArticleIndex={setCoverArticleIndex} setCoverArticle = {setCoverArticle}/>
     </div>
    </div>
    )
  
  
}

export default PlanetaryInfo
