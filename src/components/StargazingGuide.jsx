import React from 'react'
// import starGazingBg from '../assets/stargazing-guide-bg.jpg'

function StargazingGuide() {
  return (
    <div className='min-h-screen text-white'>
     <div className={`h-screen bg-center brightness-90 bg-contain bg-stargazing-bg flex justify-center items-center flex-col space-y-3`}>
      <h2 className='text-5xl font-lato font-bold'>Explore the <span className='font-serif italic font-light'>Night</span> Sky....</h2>
      <p className='w-1/2 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi suscipit aspernatur veritatis excepturi quisquam. Inventore saepe mollitia possimus ducimus minus aperiam dicta! Sequi suscipit maxime repellendus placeat amet obcaecati impedit?</p>
      <button className='bg-white text-black px-3 py-2  shadow-btn-shadow rounded-2xl scale-100 text-sm hover:scale-90 hover:shadow-btn-shadow-hover transition-all'>Get Started</button>
     </div>
    </div>
  )
}

export default StargazingGuide


