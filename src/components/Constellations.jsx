import React, { useEffect, useState } from "react";
import { useGetStarChartMutation } from "../services/StargazingApi";

function Constellations({ geoData }) {
  const [constellation, setConstellation] = useState("ori");

  const requestBody = {
    observer: {
      latitude: +geoData?.lat,
      longitude: +geoData?.lng,
      date: "2024-06-29",
    },
    view: {
      type: "constellation",
      parameters: {
        constellation: constellation, // 3 letter constellation id
      },
    },
  };

  const [getStarChart, { data, isLoading }] = useGetStarChartMutation({
    skip: !geoData?.lat || !geoData?.lng,
  });

  useEffect(() => {
    getStarChart(requestBody);
    console.log(data);
    console.log(constellation);
  }, [geoData, constellation]);


  return (
   
      <div
        className=" h-fit bg-black font-lato  py-20 space-y-5"
        id="constellations"
      >
        <h1 className="uppercase text-2xl sm:text-3xl text-[#fff] mb-6 font-lato font-bold text-center pointer-events-none">
          Constellations
        </h1>
        <select
          className="block  bg-[#212121] text-center h-7  text-xs sm:text-sm outline-0 w-fit m-auto rounded-md"
          onChange={(e) => setConstellation(e.target.value)}
        >
          <option value="ori">Orion</option>
          <option value="uma">Ursa Major</option>
          <option value="umi">Ursa Minor</option>
          <option value="cas">Cassiopeia</option>
          <option value="leo">Leo</option>
          <option value="peg">Pegasus</option>
          <option value="cyg">Cygnus</option>
          <option value="cru">Crux</option>
          <option value="sco">Scorpius</option>
          <option value="tau">Taurus</option>
        </select>
        {isLoading && <div className="loader"></div>}
       { !isLoading &&
        <img
          src={data?.data.imageUrl}
          alt="star chart"
          className="mt-10 w-[80%] object-contain sm:px-20 lg:px-40 m-auto rounded-lg"
        />}
      </div>
    )
  
}

export default Constellations;
