import React, { useEffect, useState } from "react";
import marsBg from "/assets/mars-3d-bg.jpg";
import mercuryBg from "/assets/mercury-bg.jpg";
import venusBg from "/assets/venus-bg.jpg";
import jupiterBg from "/assets/jupiter-bg.jpg";
import saturnBg from "/assets/saturn-bg.jpg";
import neptuneBg from "/assets/neptune.jpg";
import {
  useGetPlanetDefQuery,
  useGetPlanetInfoQuery,
} from "../services/planetsApi";
import { handleMouseEnter, handleMouseleave } from "../helpers";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Loader, PlanetsData } from ".";

function Planets() {
  const planets = [
    {
      name: "mercury",
      bgColor: "#DCDCDC",
      textColor: "#fff",
      image: mercuryBg,
    },
    { name: "venus", bgColor: "#FFA500", textColor: "#FFD700", image: venusBg },
    { name: "mars", bgColor: "#FF7F50", textColor: "#FFE4B5", image: marsBg },
    {
      name: "jupiter",
      bgColor: "#B0C4DE",
      textColor: "#F0F8FF",
      image: jupiterBg,
    },
    {
      name: "saturn",
      bgColor: "#d2b96f",
      textColor: "#FFFACD",
      image: saturnBg,
    },
    {
      name: "neptune",
      bgColor: "#00204a",
      textColor: "#1259a4",
      image: neptuneBg,
    },
  ];

  const [currentPlanet, setCurrentPlanet] = useState(0);
  const { data, isFetching } = useGetPlanetInfoQuery(
    planets[currentPlanet].name
  );
  const { data: planetDef, isFetching: isLoading } = useGetPlanetDefQuery(
    planets[currentPlanet].name
  );
  const textShadow =
    "0 0 0 #,  -1px -1px 0 #, 1px -1px 0 #,-1px 1px 0 #, 1px 1px 0 #".replace(
      /#/g,
      planets[currentPlanet].textColor
    );

  const [showPlanetInfo, setShowPlanetInfo] = useState(false);

  const planetAfter = () => {
    if (currentPlanet <= 4) setCurrentPlanet((prev) => prev + 1);
    else alert("You have reached the end of the planetary system !");
  };
  const planetBefore = () => {
    if (currentPlanet != 0) setCurrentPlanet((prev) => prev - 1);
    else alert("Sorry there are no more planets before Mercury !");
  };

  const handlePlanetsInfo = () => {
    setShowPlanetInfo(true);
  };

  const removePlanetInfo = () => {
    setShowPlanetInfo(false);
  };

  useEffect(() => {
    setTimeout(() => {
      const line = document.getElementById("line");
      if (line) line.style.width = "100%";
    }, 200);
  });

  return (
    <div
      className={`px-12 md:px-16 relative overflow-hidden transition-all ${showPlanetInfo ? "pb-8 lg:pb-0 min-h-screen  flex flex-col items-center lg:block lg:h-screen " : "h-screen"}`}
      style={{ backgroundColor: planets[currentPlanet].bgColor }}
    >
      {(isFetching || isLoading) && (
        <Loader color={planets[currentPlanet].textColor} />
      )}
      {!isFetching && !isLoading && (
        <>
          <button
            className={`${showPlanetInfo ? "block" : "hidden"} absolute left-10 top-20 uppercase opacity-50 cursor-pointer hover:opacity-100 translate-y-0 transition-all hover:-translate-y-1 hover:text-shadow bg-transparent text-xs font-bold`}
            onClick={removePlanetInfo}
            style={{ color: planets[currentPlanet].textColor }}
          >
            Back
          </button>
          <MdOutlineKeyboardArrowRight
            color={`${planets[currentPlanet].textColor}`}
            size={30}
            className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8 cursor-pointer hover:scale-95"
            onClick={planetAfter}
          />
          <MdOutlineKeyboardArrowLeft
            color={`${planets[currentPlanet].textColor}`}
            size={30}
            className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-8 cursor-pointer hover:scale-95"
            onClick={planetBefore}
          />

          <span
            className={`mt-10 ${!showPlanetInfo ? "w-[0%]" : ""} block h-[0.4px] transition-all duration-[2000ms] ${showPlanetInfo ? "hidden lg:block" : ""}`}
            id="line"
            style={{ backgroundColor: planets[currentPlanet].textColor }}
          ></span>
          <div
            className={`flex h-fit ${!showPlanetInfo ? " justify-center items-center" : "justify-normal"}   order-2`}
            id="planet-info-container"
          >
            <h1
              className={`font-sans-serif text-8xl  md:text-9xl   left-1/2  z-10  -translate-x-1/2 cursor-default  bg-clip-text  transition-all duration-1000 tracking-tighter sm:tracking-wide lg:mb-9 ${showPlanetInfo ? "text-[75px] relative mb-5 lg:absolute lg:top-[11%] " : " absolute top-[15%] xss:top-[15%] md:top-[11%]"}`}
              style={{
                color: showPlanetInfo
                  ? planets[currentPlanet].textColor
                  : planets[currentPlanet].bgColor,
                textShadow,
              }}
              id="planet"
            >
              {planets[currentPlanet].name}
            </h1>

            <button
              className={`px-3 py-1 rounded-[10px] border-[1px] scale-100 hover:scale-95  active:scale-95 transition-all duration-300  z-10 sm:text-xs font-bold font-roboto overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${showPlanetInfo ? "hidden" : null}`}
              id="explore-button"
              style={{
                color: planets[currentPlanet].textColor,
                border: `1px solid ${planets[currentPlanet].textColor}`,
              }}
              onMouseEnter={() => handleMouseEnter(planets, currentPlanet)}
              onMouseLeave={() =>
                handleMouseleave(planets, currentPlanet, showPlanetInfo)
              }
              onClick={handlePlanetsInfo}
            >
              Explore Surface
            </button>
          </div>
          <div className="order-3">
            <PlanetsData
              showPlanetInfo={showPlanetInfo}
              planets={planets}
              currentPlanet={currentPlanet}
              planetDef={planetDef}
              data={data}
            />
          </div>

          <div
            className={`order-1 lg:mt-0  ${!showPlanetInfo ? "w-[80vw] h-[80vw] top-[40%] absolute left-1/2 -translate-x-1/2" : "w-[50vw] h-[50vw] relative mx-auto md:w-[45vw] mt-14 md:h-[45vw] lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[70%] "} rounded-full transition-all duration-1000
        shadow-planet-shadow object-cover mb-5 animate-rotate`}
          >
            <img
              src={planets[currentPlanet].image}
              className={` absolute w-full h-full rounded-full
         object-cover  animate-rotate z-10`}
              alt="planet"
              id="planet-figure"
            />

            <div
              className={`object-cover rounded-full 
          bg-gradient-to-l absolute  from-black via-transparent to-black w-full h-full animate-rotate z-20`}
              id="planet-figure-overlay"
            ></div>
          </div>
        </>
      )}
    </div>
  );
}

export default Planets;
