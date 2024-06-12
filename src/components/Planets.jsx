import React, { useEffect, useState } from 'react'
import marsBg from '../assets/mars-3d-bg.jpg';
import mercuryBg from '../assets/mercury-bg.jpg';
import venusBg from '../assets/venus-bg.jpg';

import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

function Planets() {
   const planets = [{name : 'mercury', bgColor : "#DCDCDC", textColor : "#fff",image : mercuryBg },
     {name :'venus', bgColor : "#FFA500", textColor : "#FFD700", image: venusBg},  
     {name: 'Mars', bgColor : "#FF7F50", textColor : "#FFE4B5", image : marsBg}, 
     'jupiter',
      'saturn', 
      'uranus',
       'neptune'] 
  const [currentPlanet, setCurrentPlanet] = useState(0);
  const textShadow = "0 0 0 #,  -1px -1px 0 #, 1px -1px 0 #,-1px 1px 0 #, 1px 1px 0 #".replace(/#/g, planets[currentPlanet].textColor)
  const colorCombo = {
    lineColor : "",
    textColor: ""
  }
  
 
   const planetAfter = () =>{
   
   }
   const planetBefore = () =>{

   }


   setTimeout(()=>{
   document.getElementById("line").style.width = "100%";
   document.getElementById("planet").style.width = "fit-content";
   document.getElementById("planet").style.opacity = "1";

   }, 800)

   
   const handleMouseEnter = () => {
    document.getElementById('planet').style.height = "100%"
    document.getElementById('planet').classList.remove("text-shadow");
    document.getElementById('planet').style.color = `${planets[currentPlanet].textColor}`;
    
   }
   const handleMouseleave = () => {
   document.getElementById('planet').style.height = "0"
   document.getElementById('planet').classList.add("text-shadow");
    document.getElementById('planet').style.color = `${planets[currentPlanet].bgColor}`;
   }

  return (

      <div className="h-screen pt-10 px-10 overflow-hidden" style={{backgroundColor: planets[currentPlanet].bgColor}}>
        <MdOutlineKeyboardArrowRight color={`${planets[currentPlanet].textColor}`} size={30} className='absolute top-1/2 -translate-y-1/2 right-8 cursor-pointer hover:scale-95' />
        <MdOutlineKeyboardArrowLeft color={`${planets[currentPlanet].textColor}`}   size={30} className='absolute top-1/2 -translate-y-1/2 left-8 cursor-pointer hover:scale-95'/>
  
  
       <div><span className="w-[0%] block h-[0.4px] transition-all duration-[2000ms]" id='line' style={{backgroundColor: planets[currentPlanet].textColor}}></span></div> 
        < div className='relative flex justify-center items-center h-[90vh]'>     
        <h1 className="font-space-age text-9xl w-0 opacity-0 absolute left-1/2 trasition-all duration-1000 -translate-x-1/2 cursor-default  bg-clip-text  h-0  transition-all top-14 tracking-tighter" style={{color: planets[currentPlanet].bgColor, textShadow}} id='planet'>{planets[currentPlanet].name}
           </h1>
  
  
          <button className={`px-3 py-1 hover:${colorCombo.textColor} rounded-[10px]  border-[1px]    hover:scale-95  active:scale-95 relative z-10 text-xs font-bold font-roboto  after:w-full after:content-[''] after:absolute after:z-[-1] after:top-full after:left-0 after:${colorCombo.lineColor} hover:after:top-0  after:h-0 hover:after:h-full overflow-hidden after:transition-all after:duration-700`} style={{color: planets[currentPlanet].textColor, border: `1px solid ${planets[currentPlanet].textColor}`}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseleave}>Explore Surface</button>
        </div>
       
       <div className=''>

         <img src={planets[currentPlanet].image} className="w-[800px] h-[800px]  absolute left-1/2  -bottom-[80%] -translate-x-1/2  rounded-[50%]
       shadow-planet-shadow object-cover animate-rotate" alt="planet" />
      <div className="w-[800px] h-[800px] absolute left-1/2  -bottom-[80%] -translate-x-1/2   rounded-[50%]
         bg-gradient-to-l from-black via-transparent to-black"></div>
  </div>
         </div>
      )



    }
 

export default Planets

