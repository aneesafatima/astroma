import React, { useEffect, useState } from "react";
import { TbSunrise, TbSunset } from "react-icons/tb";
import { getLocation } from "../helpers";
import { CiNoWaitingSign } from "react-icons/ci";
import {
  useGetElevationQuery,
  useGetEventsApiQuery,
} from "../services/StargazingApi";

function EventsItem({ starBody, geoData, setGeoData }) {
  const { data: elevation, isFetching: isElevationLoading } =
    useGetElevationQuery(
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
      body: starBody,
    },
    {
      skip: !geoData?.lat || !geoData?.lng || isElevationLoading,
    }
  );
  console.log(events);
  const event = events?.data.table.rows[0].cells[0];
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

  if (events?.data.table.rows[0].cells.length === 0)
    return (
      <div className="text-center text-[#7e7c7c]">
        {" "}
        none <CiNoWaitingSign style={{ display: "inline" }} />
      </div>
    );
  return (
    !isElevationLoading &&
    !isEventsLoading &&
    events?.data.table.rows[0].cells.length !== 0 &&
    events?.data.table.rows[0].cells.map((event) => (
      <ul className="flex flex-col p-3 font-lato space-y-2" id="events-list">
        <li
          className={`border-t border-b border-[#7e7c7c] p-3 ${starBody === "sun" ? "text-[#ff6f3c]" : "text-[#e3e3e3]"}`}
        >
          <div>
            Name :
            <span className="font-light ml-1">
              {event?.type.split("_").join(" ")}
            </span>
          </div>

          <div className="events-info space-y-1">
            <div className="flex justify-between">
              <div className="">
                Time :
                <span className="font-light">
                  {" "}
                  {`${date?.getHours()} : ${date?.getMinutes()} : ${date?.getSeconds()}`}
                </span>
              </div>
              <div>
                Altitude :
                <span className="font-light">
                  {" "}
                  {event?.eventHighlights.peak.altitude} m
                </span>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="">
                Date :
                <span className="font-light">
                  {date?.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex space-x-4 ">
                <div className="flex flex-col items-center justify-around">
                  <TbSunrise />
                  <span className="text-xs">
                    {new Date(event?.rise).getHours().toString().padStart(2, 0)}
                    :
                    {new Date(event?.rise)
                      .getMinutes()
                      .toString()
                      .padStart(2, 0)}
                    {starBody === "sun" ? " am" : " pm"}
                  </span>
                </div>
                <div className="flex flex-col items-center justify-around">
                  <TbSunset />
                  <span className="text-xs">
                    {new Date(event?.set).getHours().toString().padStart(2, 0)}:
                    {new Date(event?.set)
                      .getMinutes()
                      .toString()
                      .padStart(2, 0)}
                    {starBody === "sun" ? " pm" : " am"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    ))
  );
}

export default EventsItem;
