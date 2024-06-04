import React , {useEffect, useState} from 'react';
import { CiSearch } from "react-icons/ci";

function SearchBar({setSearchTerm}) {
const setSearchValue = () =>{
  setSearchTerm(document.getElementById("search-input").value);
}
  return ( 
    <div className='pt-7 flex justify-evenly text-[#808080] text-xs font-PtSans tracking-widest items-center'>
     
    <ul className=' flex justify-center space-x-10 '>
        <li className='hover:text-white'>All</li>
      <li className="cursor-pointer hover:text-white" onClick={() => setSearchTerm("planet")}>Planets</li>
      <li className="cursor-pointer hover:text-white" onClick={() => setSearchTerm("Star")}>Stars</li>
      <li className="cursor-pointer hover:text-white" onClick={() => setSearchTerm("Galaxies")}>Galaxies</li>
      {/* <li className="cursor-pointer" onClick={() => setSearchTerm("Nebulas")}>Nebulas</li> */}
        </ul>  
<div className='border-b-[1px] flex items-center  border-[#808080] pb-2 px-3 '><input type="text" placeholder={`search to explore`} className='bg-transparent text-[#808080] outline-0 w-52 px-3' id='search-input' ></input> <CiSearch onClick={setSearchValue} className='cursor-pointer hover:scale-[.92]'/></div>        
    </div>
  )
}

export default SearchBar
