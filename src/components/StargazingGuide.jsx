import React, { useState } from 'react'
import { getLocation } from '../helpers'

function StargazingGuide() {
  const [showData, setShowData] = useState(false);
    let longitude, latitude;
    getLocation().then((val) => {
      latitude = val.latitude,
      longitude = val.longitude
      setShowData(true)
      console.log(longitude, latitude)
    }).catch(error => console.log(error.code));

   
  return (
    <div className='min-h-screen text-white ' >
      <nav className='fixed top-7 bg-[#2a2929b3] z-10 left-1/2 -translate-x-1/2 p-2 rounded-full cursor-pointer'>
        <ul className='flex space-x-1 text-sm text-lato font-semibold'>
         <li className='hover:bg-[#181717b3] rounded-full py-2 px-3'>Astronomy Event</li>
         <li className='hover:bg-[#181717b3] rounded-full py-2 px-3'>Local Weather</li>
         <li className='hover:bg-[#181717b3] rounded-full py-2 px-3'>Moon phases</li>
         <li className='hover:bg-[#181717b3] rounded-full py-2 px-3'>Star Chart</li>
        </ul>
      </nav>
     <div className={`h-screen bg-center brightness-90 bg-contain bg-stargazing-bg flex justify-center items-center flex-col space-y-3`}>
      <h2 className='text-5xl font-lato font-bold'>Explore the <span className='font-serif italic font-light'>Night</span> Sky....</h2>
      <p className='w-1/2 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi suscipit aspernatur veritatis excepturi quisquam. Inventore saepe mollitia possimus ducimus minus aperiam dicta! Sequi suscipit maxime repellendus placeat amet obcaecati impedit?</p>
      <button className='bg-white text-black px-3 py-2  shadow-btn-shadow rounded-2xl scale-100 text-sm hover:scale-90 hover:shadow-btn-shadow-hover transition-all'>Get Started</button>
     </div>
   { showData && <div className='bg-black h-screen py-20 px-20'>
    <div className='bg-[#181717b3] h-full  rounded-2xl'>

    </div>
     </div>}

    </div>
  )
}

export default StargazingGuide


