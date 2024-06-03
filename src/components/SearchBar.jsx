import React , {useEffect, useState} from 'react';
import { CiSearch } from "react-icons/ci";

function SearchBar({setSearchTerm}) {

  return ( 
    <div className='pt-7 flex justify-evenly text-[#808080] text-xs font-PtSans tracking-widest items-center'>
     
    <ul className=' flex justify-center space-x-10 '>
        <li>All</li>
      <li className="cursor-pointer" onClick={() => setSearchTerm("planet")}>Planets</li>
      <li className="cursor-pointer" onClick={() => setSearchTerm("Star")}>Stars</li>
      <li className="cursor-pointer" onClick={() => setSearchTerm("Galaxies")}>Galaxies</li>
      {/* <li className="cursor-pointer" onClick={() => setSearchTerm("Nebulas")}>Nebulas</li> */}
        </ul>  
<div className='border-b-[1px] flex items-center  border-[#808080] pb-2 px-3 '> <CiSearch/><input type="text" placeholder={`search to explore`} className='bg-transparent text-[#808080] outline-0 w-52 px-3' onClick={(e) => setSearchTerm(e.target.value)}></input></div>        
    </div>
  )
}

export default SearchBar
