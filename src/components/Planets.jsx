import React, { useEffect, useState } from 'react'
import marsBg from '../assets/mars-3d-bg.jpg';
import mercuryBg from '../assets/mercury-bg.jpg';
import venusBg from '../assets/venus-bg.jpg';

import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";



function Planets() {
  const [currentPlanet, setCurrentPlanet] = useState(0)
  
  const planets = [{name : 'mercury', bgColor : "#DCDCDC", textColor : "#fff", image : mercuryBg }, {name :'venus', bgColor : "#FFA500", textColor : "#FFD700", image: venusBg}, 'earth', {name: 'Mars', textColor : "#FFE4B5", bgColor : "#FF7F50", image : marsBg}, 'jupiter', 'saturn', 'uranus', 'neptune'] 

   const planetAfter = () =>{
   
   }
   const planetBefore = () =>{

   }
   //FFE4B5
   //${planets[currentPlanet].bgColor}

   setTimeout(()=>{
   document.getElementById("line").style.width = "100%";
   document.getElementById("planet").style.width = "fit-content";
   document.getElementById("planet").style.opacity = "1";

   }, 800)

   
   const handleMouseEnter = () => {
    document.getElementById('planet').style.height = "100%"
    document.getElementById('planet').classList.remove("text-shadow");
    document.getElementById('planet').style.color = "transparent";
    
   }
   const handleMouseleave = () => {
   document.getElementById('planet').style.height = "0"
   document.getElementById('planet').classList.add("text-shadow");
    document.getElementById('planet').style.color = `${planets[currentPlanet].bgColor}`;
   }

  return (

      <div className={`h-screen pt-10 px-10 bg-[${planets[currentPlanet].bgColor}] overflow-hidden`}>
        <MdOutlineKeyboardArrowRight color={`${planets[currentPlanet].textColor}`} size={30} className='absolute top-1/2 -translate-y-1/2 right-8 cursor-pointer hover:scale-95' />
        <MdOutlineKeyboardArrowLeft color={`${planets[currentPlanet].textColor}`}   size={30} className='absolute top-1/2 -translate-y-1/2 left-8 cursor-pointer hover:scale-95'/>
  
  
       <div><span className={`bg-[${planets[currentPlanet].textColor}] w-[0%] block h-[0.4px] transition-all duration-[2000ms]`} id='line'></span></div> 
        < div className='relative flex justify-center items-center h-[90vh]'>     
        <h1 className={`font-space-age text-9xl w-0 opacity-0 absolute left-1/2 trasition-all duration-1000 -translate-x-1/2 text-[${planets[currentPlanet].bgColor}] bg-[${planets[currentPlanet].textColor}]  cursor-default  bg-clip-text  h-0  transition-all text-shadow top-14 tracking-tighter` }id='planet'>{planets[currentPlanet].name}
           </h1>
  
  
          <button className={`px-3 py-1 hover:text-[${planets[currentPlanet].bgColor}]  text-[${planets[currentPlanet].textColor}]  rounded-[10px]  border-[1px] hover:scale-95  active:scale-95 border-[${planets[currentPlanet].textColor}]  relative z-10 text-xs font-bold font-roboto  after:w-full after:content-[''] after:absolute after:z-[-1] after:top-full after:left-0 after:bg-[${planets[currentPlanet].textColor}] hover:after:top-0  after:h-0 hover:after:h-full overflow-hidden after:transition-all after:duration-700`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseleave}>Explore Surface</button>
        </div>
       
       <div className=''>

         <img src={planets[currentPlanet].image} className="w-[800px] h-[800px]  absolute left-1/2  -bottom-[80%] -translate-x-1/2  rounded-[50%]
      animate-rotatePlanet  shadow-planet-shadow" alt="planet" />
      <div className="w-[800px] h-[800px] absolute left-1/2  -bottom-[80%] -translate-x-1/2   rounded-[50%]
         bg-gradient-to-r from-transparent via-transparent to-black"></div>
  </div>
     
         </div>
       
       
      )



    }
 

export default Planets

