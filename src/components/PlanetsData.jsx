import React from 'react'
import millify from "millify";


function PlanetsData({showPlanetInfo, planets, currentPlanet, data, planetDef}) {
    
  return (
    <div className={` ${!showPlanetInfo ? "opacity-0 h-0 duration-0" : " h-fit lg:h-[90vh] flex space-x-5 lg:justify-between lg:items-center w-full text-sm uppercase opacity-100"} transition-all duration-1000`} style={{color: planets[currentPlanet].textColor}} id="planets-info">
    <div className={``} id="general-info">
      <ul className='leading-8 test'>
      <li className='font-lato font-medium'>Radius <li >{data.meanRadius} km</li></li>
      <li className='font-lato font-medium'>Distance from sun <li >{millify(data.perihelion, {space: true})} km</li></li>
      
      <li className='font-lato font-medium'>Moons <li >{data?.moons?.length ?? "none"}</li></li>
      <li className='font-lato font-medium'>Gravity<li >{data.gravity} m/s²</li></li>
      
      </ul> </div>
      <p className={`w-[50%] hidden lg:block text-sm tracking-wide lowercase  transition-opacity duration-[2000ms]`}>{planetDef.extract}</p>
  <div className='' id="physical-info"> 
  <ul className='leading-8'>
  <li className='font-lato font-medium'>Axial Tilt<li >{`${Math.round(data.axialTilt * 10)/10}\u00B0`}</li></li>
  <li className='font-lato font-medium'>Length of Year <li >{millify(Math.round(data.sideralOrbit))} days</li></li>
  <li className='font-lato font-medium'>Temperature <li >{data.avgTemp} K</li></li>
  <li className='font-lato font-medium'>Density <li >{data.density} g/cm³</li></li>
      </ul>   </div>
  </div>
  )
}

export default PlanetsData
