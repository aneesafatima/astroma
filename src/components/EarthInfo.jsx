import React from 'react'
import { useGetPlanetInfoQuery, useGetPlanetDefQuery } from '../services/planetsApi'
import millify from 'millify';

function EarthInfo() {
    const {data, isFetching} = useGetPlanetInfoQuery("earth");

  return (
    !isFetching && 
    <div className='min-h-screen bg-[#070a0d] flex flex-wrap items-center px-10 py-7 text-[#717070] justify-around space-y-9'>
      <img  src="/assets/earth-night-bg.jpg" className=' w-72 h-72 xxs:w-96 xxs:h-96 object-cover rounded-full shadow-earth-shadow animate-rotate border-black' id="earth"></img>

      <div className=''>
      <ul className='leading-10 pointer-events-none tracking-widest '>
      <li className='font-lato font-bold'>Radius :  <span className=''>{data.meanRadius} km</span></li>
      <li className='font-lato font-bold'>Distance from sun : <span>{millify(data.perihelion, {space: true})} km</span></li>
      
      <li className='font-lato font-bold'>Moons : <span>{data?.moons?.length ?? "none"}</span></li>
      <li className='font-lato font-bold'>Gravity : <span>{data.gravity} m/s²</span></li>
      <li className='font-lato font-bold'>Axial Tilt : <span>{`${Math.round(data.axialTilt * 10)/10}\u00B0`}</span></li>
        <li className='font-lato font-bold'>Length of Year : <span>{millify(Math.round(data.sideralOrbit))}  days</span></li>
        <li className='font-lato font-bold'>Temperature :  <span>{data.avgTemp} K</span></li>
        <li className='font-lato font-bold'>Density :  <span>{data.density} g/cm³</span></li>
      </ul>
      </div>
    </div>
  )
}

export default EarthInfo
