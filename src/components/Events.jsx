import React, { useState } from "react";
import sunBg from "/assets/sun-bg.jpg";
import moonBg from "/assets/moon-bg.jpg";
import { TbSunrise } from "react-icons/tb";
import { TbSunset } from "react-icons/tb";
import { useGetPlanetInfoQuery } from "../services/planetsApi";

function Events() {
  const [starBody, setStarBody] = useState("sun");
  const { data, isFetching } = useGetPlanetInfoQuery(starBody);
  console.log(data);

  const setStarMoon = () => {};
  const setStarSun = () => {};
  return (
    !isFetching && (
      <div className="bg-black min-h-screen py-20 px-20">
        <div className="bg-[#181717b3] h-full rounded-2xl flex flex-wrap justify-center items-center transition-all duration-1000 space-y-5">
          <div id="body-container" className="space-y-3">
            <div>
              <ul className="flex border border-1 border-black justify-center   cursor-pointer font-semibold font-lato bg-[#1f1f1fb3] relative">
                <li
                  className={`bg-[#181717b3] w-[127px] h-full absolute ${starBody === "moon" ? "right-0" : "left-0"} z-10`}
                  id="overlay"
                ></li>
                <li
                  className="w-full py-2 text-center z-20"
                  onClick={() => setStarBody("sun")}
                >
                  Sun
                </li>
                <li
                  className="w-full py-2  text-center z-20"
                  onClick={() => setStarBody("moon")}
                >
                  Moon
                </li>
              </ul>
            </div>
            <img
              src={starBody === "sun" ? sunBg : moonBg}
              alt="sun"
              className="w-64 object-center h-64 rounded-full shadow-sun-shadow block"
              id="body"
            />

            <ul
              className={`body-info relative font-lato space-y-2 tracking-wider font-bold ${starBody === "sun" ? "text-[#ff6f3c]" : "text-[#e3e3e3]"}`}
            >
              <li className="">
                FRENCH NAME :
                <li className="inline font-light text-white ml-2">Le Soleil</li>
              </li>
              <li className="">
                AXIAL TILT :
                <li className="inline font-light text-white ml-2">
                  {`${Math.round(data.axialTilt * 10) / 10}\u00B0`}
                </li>
              </li>
              <li className="">
                BODY :
                <li className="inline font-light text-white ml-2"> Star</li>
              </li>
              <li className="">
                RADIUS :
                <li className="inline font-light text-white ml-2">
                  {data.meanRadius} km
                </li>
              </li>
              <li className="">
                VOLUME :
                <li className="inline font-light text-white ml-2">
                  {data.vol.volValue} V☉
                </li>
              </li>
              <li></li>
            </ul>
          </div>

          <div className="bg-green-400 w-full" id="events">
            <h2>EVENTS</h2>
           
              <ul className="flex flex-col border border-white w-full p-5 font-lato space-y-2">
                <li className="text-xl font-semibold">Partial eclipse</li>

                <li className="events-info space-y-1">
                  <div className="flex justify-between">
                    <div className="">Time : <span className="font-light">10:00:23 </span></div>
                    <div>Altitude : <span className="font-light">30m</span> </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="">Date : <span className="font-light">10/4/23 </span></div>
                    <div className="flex space-x-4"><TbSunrise/> <TbSunset/> </div>
                  </div>
                </li>
              </ul>
       
          </div>
        </div>
      </div>
    )
  );
}

export default Events;
