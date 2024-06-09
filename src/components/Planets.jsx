import React, { useEffect } from 'react'
import marsBg from '../assets/mars-3d-bg.jpg';
// import { FaStarOfLife } from "react-icons/fa";


function Planets() {

   setTimeout(()=>{
   document.getElementById("line").style.width = "100%";
   }, 800)

   
   const handleMouseEnter = () => {
    document.getElementById('planet').style.height = "100%"
    document.getElementById('planet').classList.remove("text-shadow");
    document.getElementById('planet').style.color = "transparent";
    
   }
   const handleMouseleave = () => {
   document.getElementById('planet').style.height = "0"
   document.getElementById('planet').classList.add("text-shadow");
    document.getElementById('planet').style.color = "black";
   }

  return (
    <div className='h-screen bg-plants-container-bg relative overflow-hidden transition-all pt-10 px-10 '>
     <div><span className=' bg-[#FFE4B5] w-[0%] block h-[0.4px] transition-all duration-[2000ms]' id='line'></span></div> 
      < div className=' '>     
      <h1 className="font-space-age text-8xl absolute  bg-[#FFE4B5]  cursor-default  bg-clip-text  h-0  transition-all duration-[1000ms] text-shadow" id='planet'>Mars
         </h1>


        <button className="px-3 py-1 hover:text-black  text-[#FFE4B5]  rounded-[10px]  border-[1px] hover:scale-95  active:scale-95 border-[#FFE4B5]  relative z-10 text-xs font-bold font-roboto  after:w-full after:content-[''] after:absolute after:z-0 after:top-full after:left-0 after:bg-[#FFE4B5] hover:after:top-0  after:h-0 hover:after:h-full overflow-hidden after:transition-all after:duration-1000" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseleave}>Explore Surface</button>
      </div>
     
        <img src={marsBg} className=" w-[800px] h-[600px]  absolute left-1/2  -bottom-[60%] -translate-x-1/2  rounded-t-[600px] shadow-planet-shadow 
    animate-rotatePlanet" alt="planet" />
     
    </div>
  )
}

export default Planets
