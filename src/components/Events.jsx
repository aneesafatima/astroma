import React, { useEffect, useState } from "react";
import sunBg from "/assets/sun-bg.jpg";
import moonBg from "/assets/moon-bg.jpg";
import { TbSunrise } from "react-icons/tb";
import { TbSunset } from "react-icons/tb";
import { useGetPlanetInfoQuery } from "../services/planetsApi";
import { getLocation } from "../helpers";
import {
  useGetElevationQuery,
  useGetEventsApiQuery,
} from "../services/StargazingApi";

function Events() {
  const [starBody, setStarBody] = useState("sun");
  const [geoData, setGeoData] = useState();
  console.log(geoData);
  const { data: elevation, isFetching } = useGetElevationQuery(
    { lat: geoData?.lat, lng: geoData?.lng },
    {
      skip: !geoData?.lat || !geoData?.lng,
    }
  );
  console.log(`Elevation : ${elevation?.results[0].elevation}`);
  const { data: events, isFetching: isEventsLoading } = useGetEventsApiQuery(
    {
      lat: geoData?.lat,
      lng: geoData?.lng,
      elevation: elevation?.results[0].elevation,
      body: "Sun",
    },
    {
      skip: !geoData?.lat || !geoData?.lng || isFetching,
    }
  );
  const { data, isFetching: isLoading } = useGetPlanetInfoQuery(starBody);

  console.log(events?.data.table.rows[0].cells[0]);
  const event = events?.data.table.rows[0].cells[0];
  console.log(event?.type);
  const date = new Date(event?.eventHighlights.peak.date);

  // {lat: 22.57609973033708, lng: 88.35774399379065}
  useEffect(() => {
    console.log("entered useEffect");
    setGeoData({ lat: "22.57609973033708", lng: "88.35774399379065" });
    console.log("got values");
    getLocation()
      .then((val) => {
        setGeoData({ lat: val.latitude, lng: val.longitude });
      })
      .catch((error) => console.log(error.code));
  }, []);

  return (
    !isLoading &&
    !isFetching &&
    !isEventsLoading && (
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
                  className="w-full py-2 text-center z-20"
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

          <div className="bg-green-400 w-full space-y-2" id="events">
            <h2 className="text-center">EVENTS</h2>

            <ul className="flex flex-col border-t border-b border-white w-full p-5 font-lato space-y-2">
              <li className="">
                {" "}
                Name :
                <span className="font-light ml-1">
                  {event?.type.split("_").join(" ")}
                </span>
              </li>

              <li className="events-info space-y-1">
                <div className="flex justify-between">
                  <div className="">
                    Time :{" "}
                    <span className="font-light">{`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}</span>
                  </div>
                  <div>
                    Altitude :{" "}
                    <span className="font-light">
                      {event.eventHighlights.peak.altitude} m
                    </span>{" "}
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="">
                    Date :{" "}
                    <span className="font-light">
                      {date.toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <TbSunrise /> <TbSunset />{" "}
                  </div>
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
