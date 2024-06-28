import React from 'react';
import { CiSearch } from "react-icons/ci";

function SearchBar({setSearchTerm}) {
 
const setSearchValue = () =>{
  setSearchTerm(document.getElementById("search-input").value);
}

const setSearchCategory = (category, e) => {
  setSearchTerm(category);
[...document.getElementsByClassName("categories")].forEach(el => el.classList.remove("active"));
  e.target.classList.add("active")
}

  return ( 
    <div className=' flex justify-evenly flex-wrap  space-y-5 xxs:space-y-0 text-[#808080] text-xs font-PtSans tracking-widest items-center'>
     
    <ul className=' flex justify-center space-x-6 md:space-x-10'>
    <li className='hover:text-white cursor-pointer categories' id="general"  onClick={(e) => setSearchCategory("general", e)}>All</li>
      <li className="cursor-pointer hover:text-white categories" onClick={(e) => setSearchCategory("Planet", e) }>Planets</li>
      <li className="cursor-pointer hover:text-white categories" onClick={(e) => setSearchCategory("Star", e) }>Stars</li>
      <li className="cursor-pointer hover:text-white categories" onClick={(e) => setSearchCategory("Galaxies", e) }>Galaxies</li>
      {/* <li className="cursor-pointer" onClick={() => setSearchTerm("Nebulas")}>Nebulas</li> */}
        </ul>  
<div className='border-b-[1px] flex items-center  border-[#808080] pb-1 px-3 '><input type="text" placeholder={`search to explore`} className='bg-transparent text-[#808080] outline-0 w-40 md:w-52 px-3' id='search-input' ></input> <CiSearch onClick={setSearchValue} className='cursor-pointer hover:scale-[.92]'/></div>        
    </div>
  )
}

export default SearchBar
