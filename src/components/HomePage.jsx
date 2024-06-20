import React, { useEffect, useState } from 'react'
import astronauts from '/assets/astronauts.jpg';
import { Link } from 'react-router-dom';
import {Features} from '.';
function HomePage() {
 const [visible, setVisible] = useState(false);
 const [showAbout, setShowAbout] = useState(false);
  useEffect(()=>{
    setTimeout(()=> setVisible(true), 150)
    const showAboutSection = () =>  setTimeout(()=> setShowAbout(true), 160)
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
  <Link to="/cosmic-gallery"  className='hover:text-white'>Cosmic Gallery</Link>
    </li>
  </ul>
     <h1 className={`font-lato text-[rgba(245, 245, 245, 0.724)] font-extralight tracking-[20px] sm:tracking-[27px] absolute bottom-[10%] sm:bottom-[8%] left-[50%] translate-x-[-50%] uppercase text-2xl xs:text-4xl sm:text-5xl md:text-6xl opacity-${visible ? '1' : '0'} transition-opacity duration-700  ease-in`}>Astronomy</h1>
    </div>
    <div className='  bg-gradient-to-br from-gray-900 via-gray-400 to-black'>
  <div className={`bg-transparent flex flex-wrap   ${showAbout ? "w-full opacity-1" : "w-0 opacity-0"} transition-all duration-1000  ease-in-out `}><img src={astronauts} alt="Astronauts" className='w-full  sm:w-[50%] mr-8'/>
  <p className={`sm:w-[40%] leading-9 ${ showAbout? "opacity-1" : "opacity-30"} font-medium text-white flex items-center`}>
Gaze into the night sky, and you enter a realm of infinite wonder. Each twinkling star tells a story of distant worlds and cosmic mysteries. The dance of celestial bodies, from radiant moons to swirling galaxies, invites us to explore the universe's beauty and secrets. Astronomy isn't just about stars—it's about our place in this vast, breathtaking cosmos, inspiring awe and curiosity in every heart.</p>
  </div></div>
  <Features/>
 
    </>
  )
}

export default HomePage





