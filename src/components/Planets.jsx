import React, { useEffect, useState } from 'react'
import marsBg from '../assets/mars-3d-bg.jpg';
import mercuryBg from '../assets/mercury-bg.jpg';
import venusBg from '../assets/venus-bg.jpg';
import jupiterBg from '../assets/jupiter-bg.jpg';
import saturnBg from '../assets/saturn-bg.jpg';
import neptuneBg from '../assets/neptune.jpg';


import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

function Planets() {
   const planets = [
     {name : 'mercury', bgColor : "#DCDCDC", textColor : "#fff",image : mercuryBg },
     {name :'venus', bgColor : "#FFA500", textColor : "#FFD700", image: venusBg},  
     {name: 'mars', bgColor : "#FF7F50", textColor : "#FFE4B5", image : marsBg}, 
     {name :'jupiter', bgColor : "#B0C4DE", textColor : "#F0F8FF", image: jupiterBg},
     {name :'saturn', bgColor : "#d2b96f", textColor : "#FFFACD", image: saturnBg}, 
     {name :'neptune', bgColor : "#00204a", textColor : "#1259a4", image: neptuneBg}] 
  const [currentPlanet, setCurrentPlanet] = useState(0);
  const textShadow = "0 0 0 #,  -1px -1px 0 #, 1px -1px 0 #,-1px 1px 0 #, 1px 1px 0 #".replace(/#/g, planets[currentPlanet].textColor)
  const colorCombo = {
    lineColor : "",
    textColor: ""
  }
  // 9EC9CF
 
   const planetAfter = () =>{
    if(currentPlanet <= 4 )
   setCurrentPlanet(prev => prev + 1)
   }
   const planetBefore = () =>{
    if(currentPlanet != 0)
      setCurrentPlanet(prev => prev - 1)
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
      
      <div className="h-screen pt-10 px-10 overflow-hidden transition-all" style={{backgroundColor: planets[currentPlanet].bgColor}}>
        <MdOutlineKeyboardArrowRight color={`${planets[currentPlanet].textColor}`} size={30} className='absolute top-1/2 -translate-y-1/2 right-8 cursor-pointer hover:scale-95' onClick={planetAfter} />
        <MdOutlineKeyboardArrowLeft color={`${planets[currentPlanet].textColor}`}   size={30} className='absolute top-1/2 -translate-y-1/2 left-8 cursor-pointer hover:scale-95'  onClick={planetBefore} />
  
  
       <div><span className="w-[0%] block h-[0.4px] transition-all duration-[2000ms]" id='line' style={{backgroundColor: planets[currentPlanet].textColor}}></span></div> 
        < div className=' flex justify-center items-center h-[90vh]'>     
        <h1 className="font-space-age text-9xl w-[0%] opacity-0 absolute left-1/2 trasition-all duration-1000 -translate-x-1/2 cursor-default  bg-clip-text  h-0  transition-all top-[13%] tracking-tighter" style={{color: planets[currentPlanet].bgColor, textShadow}} id='planet'>{planets[currentPlanet].name}
           </h1>
  
  
          <button className={`px-3 py-1 hover:${colorCombo.textColor} rounded-[10px]  border-[1px]    hover:scale-95  active:scale-95 relative z-10 text-xs font-bold font-roboto  after:w-full after:content-[''] after:absolute after:z-[-1] after:top-full after:left-0 after:${colorCombo.lineColor} hover:after:top-0  after:h-0 hover:after:h-full overflow-hidden after:transition-all after:duration-700`} style={{color: planets[currentPlanet].textColor, border: `1px solid ${planets[currentPlanet].textColor}`}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseleave}>Explore Surface</button>
        </div>
       
       <div className=''>

         <img src={planets[currentPlanet].image} className="w-[800px] h-[800px]  absolute left-1/2 top-[40%]  -translate-x-1/2  rounded-[50%]
       shadow-planet-shadow object-cover animate-rotate transition-all duration-1000" alt="planet" />
      <div className="w-[800px] h-[800px] absolute left-1/2 -translate-x-1/2 top-[40%]  rounded-[50%]
         bg-gradient-to-l from-black via-transparent to-black"></div>
  </div>
         </div>
      )



    }
 

export default Planets

