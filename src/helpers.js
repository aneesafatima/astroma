export const handleMouseEnter = (planets, currentPlanet) => {
  document.getElementById("planet").style.height = "100%";
  document.getElementById("planet").classList.remove("text-shadow");
  document.getElementById(
    "planet"
  ).style.color = `${planets[currentPlanet].textColor}`;
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
