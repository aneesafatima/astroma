import React, { useState } from "react";
import sunBg from "/assets/sun-bg.jpg";
import moonBg from "/assets/moon-bg.jpg";
import { EventsItem } from ".";
import { useGetPlanetInfoQuery } from "../services/planetsApi";

function Events() {
  const [starBody, setStarBody] = useState("sun");
  const { data, isFetching } = useGetPlanetInfoQuery(starBody);

  return (
    !isFetching && (
      <div className="bg-black min-h-screen py-16 px-20">
        <div className="bg-[#181717b3] h-full rounded-2xl flex flex-wrap justify-around  transition-all duration-1000  p-10">
          <div id="body-container" className="space-y-5">
            <div className="mb-6">
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
                  className="w-full py-2 text-center z-20"
                  onClick={() => setStarBody("Moon")}
                >
                  Moon
                </li>
              </ul>
            </div>
            <img
              src={starBody === "sun" ? sunBg : moonBg}
              alt="sun"
              className="w-64 object-cover h-64 rounded-full shadow-sun-shadow block animate-rotate"
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

          <div className="w-1/3 space-y-2 py-4" id="events">
            <h2 className="text-center uppercase tracking-wide ">
              {" "}
              Upcoming events
            </h2>
            <EventsItem starBody={starBody} />
          </div>
        </div>
      </div>
    )
  );
}

export default Events;
