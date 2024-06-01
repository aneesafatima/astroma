import React, {useEffect} from 'react'
import {SearchBar} from '.'
import {useGetArticlesByCategoryQuery} from '../services/astronomicalObjects';
import astronauts from '../assets/trial.jpg';

function PlanetaryInfo() {
let first;
  const {data, error, isFetching} = useGetArticlesByCategoryQuery("planet");

  return (
    !isFetching && (
    <div className='bg-black h-screen px-10'> 
      <SearchBar/>
     <div className='flex items-start pt-10'>
     <div className='w-96 space-y-7'>
     <h3 className='text-white text-5xl leading-normal'>
     {data?.collection?.items[0]?.data[0].title}
      </h3>
      <p className='text-[#808080] text-xs leading-5'>
   {   data?.collection?.items[0]?.data[0].description.substring(0,800)}
      </p>
      <ul className='text-[#808080] flex text-xs pr-8'>
        <li className='border-r-[1px] border-[#808080] px-5'>Space and Universe</li>
        <li className='border-r-[1px] border-[#808080] px-5 '>{data?.collection?.items[0]?.data[0].photographer}</li>
        <li className='px-5 '>Date</li>
      </ul>
      
     </div>
     <img src={data?.collection?.items[0].links[0].href} className="w-96 h-60" alt="" />
     
     </div> 
    </div>
    )
  )
}

export default PlanetaryInfo
