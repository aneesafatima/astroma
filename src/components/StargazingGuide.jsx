import React, { useEffect, useState } from "react";
import { Constellations, Events, Weather } from ".";
import { getLocation } from "../helpers";
function StargazingGuide() {
  const [geoData, setGeoData] = useState();
  useEffect(() => {
    getLocation()
      .then((val) => {
        setGeoData({ lat: val.latitude, lng: val.longitude });
      })
      .catch((error) =>alert("Location access is needed to provide data"));
  }, []);
  return (
    <div className="min-h-screen text-white">
      <nav className="fixed top-7 bg-[#2a2929b3] z-10 left-1/2 -translate-x-1/2 p-2 rounded-full cursor-pointer ">
        <ul className="flex space-x-1 text-xs md:text-sm text-center text-lato font-semibold">
          <li className="hover:bg-[#181717b3] rounded-full py-2 px-3">
            <a href="#events">Astronomy Event</a>
          </li>
          <li className="hover:bg-[#181717b3] rounded-full py-2 px-3">
            <a href="#weather">Local Weather</a>
          </li>
          <li className="hover:bg-[#181717b3] rounded-full py-2 px-3">
            <a href="#constellations">Constellations</a>
          </li>
        </ul>
      </nav>
      <div
        className={`h-screen bg-center brightness-90 bg-contain bg-stargazing-bg flex justify-center items-center flex-col space-y-6`}
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-lato font-bold">
          Explore the
          <span className="font-serif italic font-light">Night</span> Sky....
        </h2>
        <p className=" w-[80%] text-xs leading-5 sm:text-sm sm:w-[60%] lg:text-lg lg:w-1/2 font-semibold">
          Embark on a celestial journey with us as we explore the wonders of the
          night sky. From dazzling constellations to the mysterious depths of
          distant galaxies, let's uncover the beauty and mysteries that unfold
          above us every night.
        </p>
        <button className="bg-white text-black px-2 py-1 sm:px-3 sm:py-2  shadow-btn-shadow rounded-2xl scale-100  text-[10px] sm:text-sm hover:scale-90 hover:shadow-btn-shadow-hover transition-all">
          <a href="#events">Get Started</a>
        </button>
      </div>
      <Events geoData={geoData} setGeoData={setGeoData} />
      <Weather geoData={geoData} />
      <Constellations geoData={geoData} />
    </div>
  );
}

export default StargazingGuide;
