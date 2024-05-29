import React, { useEffect, useState } from 'react'
import astronauts from '../assets/astronauts.jpg';
import stargazingIcon from '../assets/stargazing-icon.png';
import planetaryHubIcon from '../assets/planetary-hub-icon.png'
import { Link } from 'react-router-dom';
function HomePage() {
 const [visible, setVisible] = useState(false);
 const [showAbout, setShowAbout] = useState(false);
  useEffect(()=>{
    setTimeout(()=> setVisible(true), 150)
    const showAboutSection = () =>  setTimeout(()=> setShowAbout(true), 190)
    window.addEventListener("scroll",  showAboutSection )
  }, [])

  return (<>
    <div className='bg-homepage-bg h-screen bg-no-repeat bg-cover xl:bg-center relative font-lato pt-7'>
    <ul className={`flex justify-center uppercase space-x-10 text-sm font-light opacity-${visible ? '1' : '0'} transition-opacity duration-700  ease-in`}>
    <li>
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
     <h1 className={`font-lato text-[rgba(245, 245, 245, 0.724)] font-extralight tracking-[30px] absolute bottom-6 left-[50%] translate-x-[-50%] uppercase text-7xl opacity-${visible ? '1' : '0'} transition-opacity duration-700  ease-in`}>Astronomy</h1>
    </div>
    <div className='bg-black p-20 '>
  <div className={`bg-black flex flex-wrap justify-center items-center ${showAbout ? "w-full opacity-1" : "w-0 opacity-0"} transition-all duration-1000  ease-in-out p-10 bg-gradient-to-br from-gray-900 via-gray-400 to-black shadow-lg`}><img src={astronauts} alt="Astronauts" className='w-[50%] mr-8'/>
  <p className={`w-[40%] leading-loose ${ showAbout? "opacity-1" : "opacity-30"} `}>
Gaze into the night sky, and you enter a realm of infinite wonder. Each twinkling star tells a story of distant worlds and cosmic mysteries. The dance of celestial bodies, from radiant moons to swirling galaxies, invites us to explore the universe's beauty and secrets. Astronomy isn't just about stars—it's about our place in this vast, breathtaking cosmos, inspiring awe and curiosity in every heart.</p>
  </div></div>

  <div className='about bg-[#111311]'>
    <div className='w-72 p-5 relative bg-cardsCustomGray bg-custom-gradient'><img src={stargazingIcon} alt="" className='w-32 absolute left-[50%] -translate-x-[50%] -top-10' /><p className='pt-20'>Discover the magic of the night sky with our comprehensive stargazing guide. Whether you’re new to stargazing or looking to enhance your celestial knowledge, our guide provides tips, tools, and resources to help you navigate the stars. Explore constellations, learn about upcoming astronomical events, and get the most out of your stargazing experience. Dive into the wonders of the universe and let the stars inspire you.</p></div>
    {/* <div><img src={planetaryHubIcon} alt="" className='w-40 '  /><p>Embark on a journey through our solar system with our Planetary Hub. This section is your gateway to exploring the fascinating worlds that orbit our sun. From the rocky terrains of Mars to the swirling storms of Jupiter, discover detailed information, stunning images, and the latest research on each planet. Unveil the secrets of our celestial neighbors and deepen your understanding of the planetary wonders that make up our cosmic backyard.</p></div>
    <div><img src="" alt="" className='' /><p>Test your knowledge of the cosmos with our exciting AstroQuiz! Challenge yourself with a variety of quizzes designed to spark curiosity and deepen your understanding of astronomy. Whether you’re a beginner or a seasoned space enthusiast, our quizzes offer a fun and interactive way to learn about stars, planets, galaxies, and more. Take the AstroQuiz and see how much you really know about the universe!</p></div> */}
  </div>
    </>
  )
}

export default HomePage





