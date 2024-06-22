export const handleMouseEnter = (planets, currentPlanet) => {
  document.getElementById("planet").style.height = "100%";
  document.getElementById("planet").classList.remove("text-shadow");
  document.getElementById("planet").style.color =
    `${planets[currentPlanet].textColor}`;
};
export const handleMouseleave = (planets, currentPlanet, showPlanetInfo) => {
  document.getElementById("planet").style.height = "0";
  document.getElementById("planet").classList.add("text-shadow");
  document.getElementById("planet").style.color = `${
    showPlanetInfo
      ? planets[currentPlanet].textColor
      : planets[currentPlanet].bgColor
  }`;
};

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log(error.code);
      break;
    case error.POSITION_UNAVAILABLE:
      console.log(error.code);
      break;
    case error.TIMEOUT:
      console.log(error.code);
      break;
    case error.UNKNOWN_ERROR:
      console.log(error.code);
      break;
  }
}

export function getLocation() {
  console.log("Entered location function");
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      console.log("got access to the location");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("got the location from user");
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => reject(error)
      );
    } else {
      console.log("GeoLocation is not supported");
    }
  });
}
