import React, { useEffect } from 'react'
import marsBg from '../assets/mars-3d-bg.jpg';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";



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
    document.getElementById('planet').style.color = "#FF7F50";
   }

  return (
    <div className='h-screen overflow-hidden pt-10 px-10 bg-[#FF7F50]'>
      <MdOutlineKeyboardArrowRight color='#FFE4B5'  size={30} className='absolute top-1/2 -translate-y-1/2 right-8 cursor-pointer hover:scale-95 ' />
      <MdOutlineKeyboardArrowLeft color='#FFE4B5'   size={30} className='absolute top-1/2 -translate-y-1/2 left-8 cursor-pointer hover:scale-95'/>


     <div><span className=' bg-[#FFE4B5] w-[0%] block h-[0.4px] transition-all duration-[2000ms]' id='line'></span></div> 
      < div className='relative flex justify-center items-center h-[90vh]'>     
      <h1 className="font-space-age text-9xl absolute left-1/2 -translate-x-1/2 text-[#FF7F50] bg-[#FFE4B5]  cursor-default  bg-clip-text  h-0  transition-all duration-[1000ms] text-shadow top-14 tracking-tighter" id='planet'>Mars
         </h1>


        <button className="px-3 py-1 hover:text-[#FF7F50]  text-[#FFE4B5]  rounded-[10px]  border-[1px] hover:scale-95  active:scale-95 border-[#FFE4B5]  relative z-10 text-xs font-bold font-roboto  after:w-full after:content-[''] after:absolute after:z-[-1] after:top-full after:left-0 after:bg-[#FFE4B5] hover:after:top-0  after:h-0 hover:after:h-full overflow-hidden after:transition-all after:duration-700" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseleave}>Explore Surface</button>
      </div>
     
     <div>
       <img src={marsBg} className="w-[1000px] h-[500px]  absolute left-1/2  -bottom-[40%] -translate-x-1/2  rounded-t-[600px] 
    animate-rotatePlanet overflow-hidden  bg-gradient-to-r from-black via-transparent to-transparent shadow-planet-shadow" alt="planet" />
    <div className="w-[1000px] h-[500px]  absolute left-1/2  -bottom-[40%] -translate-x-1/2  rounded-t-[600px] 
     overflow-hidden  bg-gradient-to-r from-transparent via-transparent to-black"></div>
</div>
   
       
     
     </div>
  )
}

export default Planets

