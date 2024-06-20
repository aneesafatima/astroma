import React from 'react'

import planetsHubIcon from '/assets/planets-hub-icon.png'
import quizIcon from '/assets/quiz.png'
import starGazeIcon from "/assets/stargaze.png"

function Features() {
  return (
    <div className='features bg-black font-roboto text-white flex justify-around flex-wrap items-center px-8 py-24'>
   <div className='w-[30%] space-y-4'>
    <p className='uppercase text-sm font-semibold tracking-wide'>Features</p>
    <h2 className='font-extrabold tracking-wider text-3xl'><span className='border-b-[1px] border-white'>What</span> Astroma <span className='text-gray-700'>Offers</span>.</h2>
  <p className='leading-6 text-sm'>Welcome to Astroma, your gateway to the cosmos! Whether you're a seasoned stargazer or an aspiring astronomer, Astroma is your digital universe, brimming with resources to fuel your curiosity. Delve into the depths of space with our comprehensive guides and interactive tools.</p>
   </div>

   <div className='grid grid-cols-2 grid-rows-2'>
    <div className='flex flex-col w-40 p-4 items-center'><img src={planetsHubIcon} alt="" className='w-12'/><h3 className='font-bold '>Planetary Hub</h3><p className='text-[0.6rem] text-center'>Galactic gateway for planetary connections</p></div>
    <div className='flex flex-col w-40 p-4 items-center bg-gradient-to-b from-black via-gray to-gray-500'><img src={starGazeIcon} alt="" className='w-12'/><h3 className='font-bold '>Stargazing</h3><p className='text-[0.6rem] text-center'>Your guide to stargazing adventures</p></div>
    <div className='flex flex-col w-40 p-4 items-center bg-gradient-to-b from-black via-gray to-gray-500'><img src={quizIcon} alt="" className='w-10'/><h3 className='font-bold '>Cosmic Gallery</h3><p className='text-[0.6rem] text-center'> Explore stunning NASA images in a user-friendly interface.</p></div>
    <div className='flex flex-col w-40 p-4 items-center '><img src={quizIcon} alt="" className='w-12'/><h3 className='font-bold '>Planetary Hub</h3><p className='text-[0.6rem] text-center'>Galactic gateway for planetary connections</p></div>
   </div>
  </div>
  )
}

export default Features
