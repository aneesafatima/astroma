import React , {useEffect, useState} from 'react'
import { TbSunrise, TbSunset } from "react-icons/tb";
import { getLocation } from "../helpers";
import {
  useGetElevationQuery,
  useGetEventsApiQuery,
} from "../services/StargazingApi";

function EventsItem() {
    const [geoData, setGeoData] = useState();
  console.log(geoData);
  const { data: elevation, isFetching : isElevationLoading } = useGetElevationQuery(
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
      skip: !geoData?.lat || !geoData?.lng || isElevationLoading,
    }
  );
  

  console.log(events?.data.table.rows[0].cells[0]);
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
  return (
    !isElevationLoading &&
    !isEventsLoading &&
    <ul className="flex flex-col w-full p-3 font-lato space-y-2">
    <li className="border-t border-b border-white p-3">
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
          <span className="font-light">{`${date?.getHours()} : ${date?.getMinutes()} : ${date?.getSeconds()}`}</span>
        </div>
        <div>
          Altitude :
          <span className="font-light">
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
            })}
          </span>
        </div>
        <div className="flex space-x-4">
          <TbSunrise /> <TbSunset />
        </div>
      </div>
    </div>
    </li>
  </ul>
  )
}

export default EventsItem
