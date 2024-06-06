import React from 'react'
import marsBg from '../assets/mars-3d-bg.jpg'

function Planets() {
  return (
    <div className='h-screen bg-plants-container-bg relative overflow-hidden'>
      <div className='planet-container mix-blend-screen '>
        <img src={marsBg} className=" w-[800px] h-[600px]  absolute left-1/2  -bottom-[60%] -translate-x-1/2  rounded-t-[600px] shadow-planet-shadow 
    animate-rotatePlanet" alt="planet" />
     
      </div>
    </div>
  )
}

export default Planets
