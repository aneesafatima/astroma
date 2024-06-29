import React, { useEffect, useState } from "react";
import { useGetStarChartMutation } from "../services/StargazingApi";

function Constellations({ geoData }) {
  const [constellation, setConstellation] = useState("ori");

  const requestBody = {
    "observer": {
      "latitude": +geoData?.lat,
      "longitude": +geoData?.lng,
      "date": "2024-06-29",
    },
    "view": {
      "type": "constellation",
      "parameters": {
        "constellation": constellation, // 3 letter constellation id
      },
    },
  };

  const [getStarChart, { data, isLoading }] = useGetStarChartMutation({
    skip: !geoData?.lat || !geoData?.lng,
  });

  useEffect(() => {
    getStarChart(requestBody);
    console.log(data);
    console.log(constellation)
  }, [geoData, constellation]);

  return (
    !isLoading &&
    <div className="text-[] min-h-screen bg-black font-lato px-7 py-5 space-y-5" id="constellations">
      <h1 className="font-lato font-light text-4xl uppercase text-center">Constellations</h1>
      <select className="block  bg-[#212121] text-center h-7  text-sm outline-0 w-fit m-auto rounded-md" onChange={(e) => setConstellation(e.target.value)}>
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
      <img src={data?.data.imageUrl} alt="star chart" className="mt-10 w-1/2 m-auto rounded-lg" />
    </div>
  );
}

export default Constellations;
