import React, { useEffect, useState } from 'react'
import astronauts from '../assets/astronauts.jpg';
import planetsHubIcon from '../assets/planets-hub-icon.png'
import quizIcon from '../assets/quiz.png'
import starGazeIcon from "../assets/stargaze.png"
import { Link } from 'react-router-dom';
function HomePage() {
 const [visible, setVisible] = useState(false);
 const [showAbout, setShowAbout] = useState(false);
  useEffect(()=>{
    setTimeout(()=> setVisible(true), 150)
    const showAboutSection = () =>  setTimeout(()=> setShowAbout(true), 170)
    window.addEventListener("scroll",  showAboutSection )
  }, [])

  return (<>
    <div className='bg-homepage-bg h-screen bg-no-repeat bg-cover bg-center relative font-lato pt-7 text-white'>
    <ul className={`flex flex-col items-center space-y-8 xs:flex-row justify-center uppercase xs:space-x-7 sm:space-x-10 text-xs sm:text-sm font-light opacity-${visible ? '1' : '0'} transition-opacity duration-700  ease-in`}>
    <li className=''>
  <Link to="/" className='hover:text-white'>Home</Link>
    </li>
    <li>
  <Link to="/planetary-hub" className='hover:text-white'>PLanetary hub</Link>
    </li>
    <li>
  <Link to="/stargazing-guide" className='hover:text-white'>Stargazing</Link>
    </li>
    <li>
  <Link to="/astro-quiz"  className='hover:text-white'>AstroQuiz</Link>
    </li>
  </ul>
     <h1 className={`font-lato text-[rgba(245, 245, 245, 0.724)] font-extralight tracking-[20px] sm:tracking-[27px] absolute bottom-[10%] sm:bottom-[8%] left-[50%] translate-x-[-50%] uppercase text-2xl xs:text-4xl sm:text-5xl md:text-6xl opacity-${visible ? '1' : '0'} transition-opacity duration-700  ease-in`}>Astronomy</h1>
    </div>
    <div className='  bg-gradient-to-br from-gray-900 via-gray-400 to-black'>
  <div className={`bg-transparent flex flex-wrap   ${showAbout ? "w-full opacity-1" : "w-0 opacity-0"} transition-all duration-1000  ease-in-out `}><img src={astronauts} alt="Astronauts" className='w-full  sm:w-[50%] mr-8'/>
  <p className={`sm:w-[40%] leading-9 ${ showAbout? "opacity-1" : "opacity-30"} font-medium text-white flex items-center`}>
Gaze into the night sky, and you enter a realm of infinite wonder. Each twinkling star tells a story of distant worlds and cosmic mysteries. The dance of celestial bodies, from radiant moons to swirling galaxies, invites us to explore the universe's beauty and secrets. Astronomy isn't just about stars—it's about our place in this vast, breathtaking cosmos, inspiring awe and curiosity in every heart.</p>
  </div></div>

  <div className='features bg-black font-roboto text-white flex justify-around flex-wrap items-center px-8 py-24'>
   <div className='w-[30%] space-y-4'>
    <p className='uppercase text-sm font-semibold tracking-wide'>Features</p>
    <h2 className='font-extrabold tracking-wider text-3xl'><span className='border-b-[1px] border-white'>What</span> Astroma <span className='text-gray-700'>Offers</span>.</h2>
  <p className='leading-6 text-sm'>Welcome to Astroma, your gateway to the cosmos! Whether you're a seasoned stargazer or an aspiring astronomer, Astroma is your digital universe, brimming with resources to fuel your curiosity. Delve into the depths of space with our comprehensive guides and interactive tools.</p>
   </div>

   <div className='grid grid-cols-2 grid-rows-2'>
    <div className='flex flex-col w-40 p-4 items-center'><img src={planetsHubIcon} alt="" className='w-12'/><h3 className='font-bold '>Planetary Hub</h3><p className='text-[0.6rem] text-center'>Galactic gateway for planetary connections</p></div>
    <div className='flex flex-col w-40 p-4 items-center bg-gradient-to-b from-black via-gray to-gray-500'><img src={starGazeIcon} alt="" className='w-12'/><h3 className='font-bold '>Stargazing</h3><p className='text-[0.6rem] text-center'>Your guide to stargazing adventures</p></div>
    <div className='flex flex-col w-40 p-4 items-center bg-gradient-to-b from-black via-gray to-gray-500'><img src={quizIcon} alt="" className='w-10'/><h3 className='font-bold '>AstroQuiz</h3><p className='text-[0.6rem] text-center'>Cosmic challenge for astro buffs</p></div>
    <div className='flex flex-col w-40 p-4 items-center '><img src={quizIcon} alt="" className='w-12'/><h3 className='font-bold '>Planetary Hub</h3><p className='text-[0.6rem] text-center'>Galactic gateway for planetary connections</p></div>
   </div>
  </div>
    </>
  )
}

export default HomePage





