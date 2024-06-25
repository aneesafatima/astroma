import React from "react";
import { FaLongArrowAltDown, FaLongArrowAltUp, FaWind } from "react-icons/fa";
import { useGetWeatherQuery, useGetUvIndexQuery } from "../services/Weather";
import { MdOutlineDescription } from "react-icons/md";
import { BsArrowUpLeftCircle } from "react-icons/bs";
import { WiSunrise, WiSunset } from "react-icons/wi";
import { IoMdSunny } from "react-icons/io";
import { FaArrowTrendUp, FaDroplet } from "react-icons/fa6";

function Weather({ geoData }) {
  const { data, isFetching } = useGetWeatherQuery(
    { lat: geoData?.lat, lng: geoData?.lng },
    {
      skip: !geoData?.lat || !geoData?.lng,
    }
  );

  // console.log(data);
  const { data: uvIndex, isFetching: isLoading } = useGetUvIndexQuery(
    { lat: geoData?.lat, lng: geoData?.lng },
    {
      skip: !geoData?.lat || !geoData?.lng,
    }
  );

  return (
    <div className=" h-fit flex flex-col justify-center items-center py-20 font-lato bg-black sm:space-y-6">
      {!isFetching && !isLoading && (
        <>
          <h2 className="uppercase text-3xl text-[#a3a3a3] mb-6 font-roboto font-bold">
            Local Weather
          </h2>

          <section className="flex items-center flex-col py-5 pointer-events-none">
            <div className="flex items-center">
              <img
                src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] "
                alt="weather icon"
              />
              <h2 className="text-7xl md:text-8xl font-extrabold font-lato">{`${Math.round(data?.main.temp - 273.15)}\u00B0 C`}</h2>
            </div>

            <div className="temp-container flex w-40 justify-around">
              <div className="min flex items-center ">
                <FaLongArrowAltDown />
                <div className="mx-3">
                  <span className="block text-[#7e7c7c] text-[10px] sm:text-xs">
                    Min
                  </span>
                  {`${Math.round(data?.main.temp_min - 273.15)}\u00B0 C`}
                </div>
              </div>
              <div className="max flex items-center">
                <FaLongArrowAltUp />
                <div className="mx-3">
                  <span className="block text-[#7e7c7c] text-[10px] sm:text-xs">
                    Max
                  </span>
                  {`${Math.round(data?.main.temp_max - 273.15)}\u00B0 C`}
                </div>
              </div>
            </div>
          </section>

          <section className="flex weather-info py-8 px-5 flex-wrap sm:flex-nowrap sm:px-20  pointer-events-none space-y-5 sm:space-y-0">
            <div className="left-section grid grid-cols-2 gap-5 px-5 sm:py-8  w-full  ">
              <div className="rain flex items-center text-sm sm:text-[16px]">
                <MdOutlineDescription size={20} style={{ color: "gray" }} />
                <div className="mx-3">
                  <span className="block text-[#7e7c7c] text-[10px] sm:text-xs">
                    Description
                  </span>
                  {data?.weather[0].description}
                </div>
              </div>
              <div className="wind flex items-center text-sm sm:text-[16px]">
                <BsArrowUpLeftCircle size={20} />
                <div className="mx-3">
                  <span className="block text-[#7e7c7c] text-[10px] sm:text-xs">
                    Wind
                  </span>
                  {Math.round(data?.wind.speed * 3.6)} km/h
                </div>
              </div>
              <div className="uv-index flex items-center text-sm sm:text-[16px]">
                <IoMdSunny style={{ color: "yellow" }} size={20} />
                <div className="mx-3">
                  <span className="block text-[#7e7c7c] text-[10px] sm:text-xs">
                    UV Index
                  </span>
                  {uvIndex?.value}
                </div>
              </div>
              <div className="pressure flex items-center text-sm sm:text-[16px]">
                <FaArrowTrendUp style={{ color: "lightpink" }} size={20} />
                <div className="mx-3">
                  <span className="block text-[#7e7c7c] text-[10px] sm:text-xs">
                    Pressure
                  </span>
                  {data?.main.pressure} hPa
                </div>
              </div>
            </div>

            <div className="right-section grid grid-cols-2 px-5 gap-5 w-full">
              <div className="rain flex items-center text-sm sm:text-[16px]">
                <WiSunrise size={20} style={{ color: "yellow" }} />
                <div className="mx-3">
                  <span className="block text-[#7e7c7c] text-xs">Sunrise</span>
                  {new Date(data?.sys.sunrise * 1000).toLocaleTimeString(
                    "en-US",
                    { hour: "numeric", minute: "numeric" }
                  )}
                </div>
              </div>
              <div className="wind flex items-center text-sm sm:text-[16px]">
                <WiSunset size={20} style={{ color: "orange" }} />
                <div className="mx-3">
                  <span className="block text-[#7e7c7c] text-[10px] sm:text-xs">
                    Sunset
                  </span>
                  {new Date(data?.sys.sunset * 1000).toLocaleTimeString(
                    "en-US",
                    { hour: "numeric", minute: "numeric" }
                  )}
                </div>
              </div>
              <div className="uv-index flex items-center text-sm sm:text-[16px]">
                <FaDroplet size={20} style={{ color: "lightblue" }} />
                <div className="mx-3">
                  <span className="block text-[#7e7c7c] text-[10px] sm:text-xs">
                    Humidity
                  </span>
                  {data?.main.humidity}%
                </div>
              </div>
              <div className="pressure flex items-center text-sm sm:text-[16px]">
                <FaWind size={20} style={{ color: "lightgreen" }} />
                <div className="mx-3">
                  <span className="block text-[#7e7c7c] text-[10px] sm:text-xs">
                    Wind direction
                  </span>
                  {`${data?.wind.deg}\u00B0`}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Weather;
