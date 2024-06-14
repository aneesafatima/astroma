import React from 'react'
import { useGetPlanetInfoQuery } from '../services/planetsApi';
import millify from "millify";

function PlanetsData({showPlanetInfo, planets, currentPlanet}) {
    const {data, isFetching} = useGetPlanetInfoQuery(planets[currentPlanet].name);
  return (
    !isFetching &&
    <div className={`${!showPlanetInfo ? "hidden" : "flex justify-between items-center w-full text-sm uppercase"}`} style={{color: planets[currentPlanet].textColor}} id="planets-info">
    <div className={``} id="general-info">
      <ul className='leading-8 test'>
      <li className='font-lato font-medium'>Radius <li className='font-bold text-[#FF4500]'>{data.meanRadius} km</li></li>
      <li className='font-lato font-medium'>Distance from sun <li className='font-bold text-[#FF4500]'>{millify(data.perihelion, {space: true})} km</li></li>
      
      <li className='font-lato font-medium'>Moons <li className='font-bold text-[#FF4500]'>{data?.moons?.length ?? "none"}</li></li>
      <li className='font-lato font-medium'>Gravity<li className='font-bold text-[#FF4500]'>{data.gravity} m/s²</li></li>
      
      </ul> </div>
      <p className={`w-[40%] ${showPlanetInfo ? "opacity-100" : "opacity-0"} transition-opacity duration-[2000ms] `}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quae, suscipit placeat, explicabo error aliquid labore quasi ipsa ex unde distinctio harum assumenda praesentium repellendus earum, laudantium tempora nobis mollitia?</p>
  <div className='' id="physical-info"> 
  <ul className='leading-8'>
  <li className='font-lato font-medium'>Axial Tilt<li className='font-bold text-[#FF4500]'>{`${Math.round(data.axialTilt * 10)/10}\u00B0`}</li></li>
  <li className='font-lato font-medium'>Length of Year <li className='font-bold text-[#FF4500]'>{millify(Math.round(data.sideralOrbit))} days</li></li>
  <li className='font-lato font-medium'>Temperature <li className='font-bold text-[#FF4500]'>{data.avgTemp} K</li></li>
  <li className='font-lato font-medium'>Density <li className='font-bold text-[#FF4500]'>{data.density} g/cm³</li></li>
      
      </ul>   </div>
  </div>
  )
}

export default PlanetsData
