import React, { useEffect, useState } from 'react'
import astronauts from '../assets/astronauts2.jpg'
function HomePage() {
 const [visible, setVisible] = useState(false);
 const [showAbout, setShowAbout] = useState(false);
  useEffect(()=>{
    setTimeout(()=> setVisible(true), 150)
    const showAboutSection = () =>  setTimeout(()=> setShowAbout(true), 190)
    window.addEventListener("scroll",  showAboutSection )

  }, [])
  return (<>
    <div className='bg-homepage-bg h-screen bg-no-repeat bg-cover xl:bg-center relative'>
     <h1 className={`font-lato text-[rgba(245, 245, 245, 0.724)] font-extralight tracking-[30px] absolute bottom-6 left-[50%] translate-x-[-50%] uppercase text-7xl opacity-${visible ? '1' : '0'} transition-opacity duration-700  ease-in`}>Astronomy</h1>
    </div>
    <div className='bg-black p-20 '>
  <div className={`bg-black flex flex-wrap justify-center items-center ${showAbout ? "w-full opacity-1" : "w-0 opacity-0"} transition-all duration-1000  ease-in-out p-10 bg-gradient-to-br from-gray-900 via-gray-400 to-black shadow-lg`}><img src={astronauts} alt="Astronauts" className='w-[50%] mr-8'/>
  <p className={`w-[40%] leading-loose ${ showAbout? "opacity-1" : "opacity-30"} `}>
Gaze into the night sky, and you enter a realm of infinite wonder. Each twinkling star tells a story of distant worlds and cosmic mysteries. The dance of celestial bodies, from radiant moons to swirling galaxies, invites us to explore the universe's beauty and secrets. Astronomy isn't just about stars—it's about our place in this vast, breathtaking cosmos, inspiring awe and curiosity in every heart.</p>
  </div></div>
    </>
  )
}

export default HomePage
