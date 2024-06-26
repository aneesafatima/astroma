import React from "react";

function EarthInfo() {
  // const { data, isFetching } = useGetPlanetInfoQuery("earth");

  return (
    <div className="md:h-screen min-h-screen bg-black flex flex-wrap md:flex-nowrap items-center justify-center py-16 xxs:px-10 sm:px-0 md:pr-10 text-[#717070] ">
      <div className="w-full pointer-events-none">

      <iframe
        src="https://giphy.com/embed/dusXWjr4Wn5YiNNZpd"
        className="giphy-embed  w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] m-auto"
        allowFullScreen
      ></iframe>
      </div>
      {/* <p>
        <a href="https://giphy.com/gifs/after-effects-form-trapcode-dusXWjr4Wn5YiNNZpd"></a>
      </p> */}

      <div className="sm:w-[80%] text-sm text-white font-medium space-y-4 px-10">
        <p className="">
          <span className="text-2xl font-lato uppercase text-[#3a3b3d] font-light">Planet Earth</span>, located approximately 150 million kilometers (93
          million miles) from the Sun, occupies a pivotal position in our solar
          system. Its distance ensures a temperate climate conducive to life,
          maintained by a unique atmosphere primarily composed of nitrogen and
          oxygen. Earth's surface, encompassing 71% water and 29% landmass,
          supports a breathtaking diversity of ecosystems, from lush rainforests
          to expansive deserts.
        </p>
        <p>
          The planet's rotation, completing one revolution every 24 hours,
          creates day and night cycles essential for life's rhythms. Geological
          processes, including plate tectonics and volcanic activity,
          continuously shape its surface, while its magnetic field shields us
          from solar winds and cosmic rays. Earth is not only a beacon of
          natural beauty but also a testament to the intricate balance of
          physical forces that sustain our existence in the vastness of space.
        </p>
      </div>
    </div>
  );
}

export default EarthInfo;
