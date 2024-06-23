import React from "react";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

function Weather() {
  return (
    <div className="bg-green-400 h-screen flex flex-col justify-center font-lato">
      <section className="flex items-center justify-betwwen px-8 bg-red-200">
        <div className="flex items-center bg-pink-400">
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            className="w-[300px] h-[300px] "
            alt="weather icon"
          />
          <h2 className="text-8xl font-extrabold font-lato">{`26\u00B0`}</h2>
        </div>

        <div className="temp-container flex w-40 justify-around">
          <div className="min flex items-center ">
            <FaLongArrowAltDown />
            <div className="mx-3">
              <span className="block text-[#7e7c7c] text-xs">Min</span>
              {`24\u00B0`}
            </div>
          </div>
          <div className="max flex items-center">
            <FaLongArrowAltUp />
            <div className="mx-3">
              <span className="block text-[#7e7c7c] text-xs">Max</span>
              {`24\u00B0`}
            </div>
          </div>
        </div>
      </section>

<section className="flex weather-info">

<div className="left-section grid grid-cols-2 gap-5 bg-orange-200 w-full py-5 px-20 space-y-5">
       
       <div className="rain flex items-center">
         <FaLongArrowAltDown />
         <div className="mx-3">
           <span className="block text-[#7e7c7c] text-xs">Chance of rain</span>
           0%
         </div>
       </div>
       <div className="wind flex items-center">
         <FaLongArrowAltDown />
         <div className="mx-3">
           <span className="block text-[#7e7c7c] text-xs">Wind</span>
           300 km/h
         </div>
       </div>
       <div className="uv-index flex items-center">
         <FaLongArrowAltDown />
         <div className="mx-3">
           <span className="block text-[#7e7c7c] text-xs">UV Index</span>
           1.2
         </div>
       </div>
       <div className="pressure flex items-center">
         <FaLongArrowAltDown />
         <div className="mx-3">
           <span className="block text-[#7e7c7c] text-xs">Pressure</span>
           952 hPa
         </div>
       </div>
     </div>
     <div className="right-section grid grid-cols-2 gap-5 bg-blue-300 w-full">
       <div className="rain flex items-center">
         <FaLongArrowAltDown />
         <div className="mx-3">
           <span className="block text-[#7e7c7c] text-xs">Chance of rain</span>
           0%
         </div>
       </div>
       <div className="wind flex items-center">
         <FaLongArrowAltDown />
         <div className="mx-3">
           <span className="block text-[#7e7c7c] text-xs">Wind</span>
           300 km/h
         </div>
       </div>
       <div className="uv-index flex items-center">
         <FaLongArrowAltDown />
         <div className="mx-3">
           <span className="block text-[#7e7c7c] text-xs">UV Index</span>
           1.2
         </div>
       </div>
       <div className="pressure flex items-center">
         <FaLongArrowAltDown />
         <div className="mx-3">
           <span className="block text-[#7e7c7c] text-xs">Pressure</span>
           952 hPa
         </div>
       </div>
     </div>


    
</section>
     
   
    </div>
  );
}

export default Weather;
