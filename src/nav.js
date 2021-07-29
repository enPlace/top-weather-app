//Creates HTML elements associated with the nav bar
import { populateFromUserLocation } from "./user-location";
import { populateAllWeatherData } from ".";

let unitType = "metric";
function setUnitType(type) {
  unitType = type;
}

function getUnitType() {
  return unitType;
}
function getDegrees() {
  return unitType == "metric" ? "C" : "F";
}

const changeUnits = (e) => {
  //changes the unitType and re-requests/repopulates weather info
  e.preventDefault();
  if (e.target.id === "c") unitType = "metric";
  else unitType = "imperial";
  if (document.getElementById("search-bar").value) populateAllWeatherData();
  else populateFromUserLocation();
  document.getElementById("weekly-forecast").classList.add("hidden");
};

function hideWeekly() {
  //pushes down the weekly forecast on smaller screens when menu is opened
  const menuButton = document.getElementById("menu-button");
  const weekly = document.getElementById("weekly-forecast");

  if (menuButton.classList.contains("active")) {
    weekly.classList.remove("hidden");
    menuButton.classList.remove("active");
  } else {
    weekly.classList.add("hidden");
    menuButton.classList.add("active");
  }
}

function appendSpan(parent, num) {
  //used in creating the nav bar icon
  for (let i = 0; i < num; i++) {
    const span = document.createElement("span");
    parent.appendChild(span);
  }
}

function navMenu() {
  //creates the side menu HTML elements
  const nav = document.createElement("nav");
  nav.role = "navigation";
  const menuToggle = document.createElement("div");
  menuToggle.id = "menuToggle";
  nav.appendChild(menuToggle);

  const menuButton = document.createElement("input");
  menuButton.type = "checkbox";
  menuButton.id = "menu-button";
  menuButton.addEventListener("click", hideWeekly);
  menuToggle.appendChild(menuButton);

  appendSpan(menuToggle, 3);

  const ul = document.createElement("ul");
  ul.id = "menu";
  menuToggle.appendChild(ul);

  const cfcontainer = document.createElement("a");
  cfcontainer.id = "c-f";
  ul.appendChild(cfcontainer);

  const c = document.createElement("button");
  c.id = "c";
  c.classList.add("unitButton");
  c.textContent = "°C";
  c.addEventListener("click", (e) => {
    changeUnits(e);
  });

  const f = document.createElement("button");
  f.id = "f";
  f.textContent = "°F";
  f.classList.add("unitButton");
  f.addEventListener("click", (e) => {
    changeUnits(e);
  });
  cfcontainer.appendChild(c);
  cfcontainer.appendChild(f);
  const menuTitles = ["Home", "About", "Github"];
  const menuRefs = {
    Home: "https://enplace-weather.herokuapp.com/",
    About: "https://github.com/enPlace/top-weather-app/blob/main/README.md",
    Github: "https://github.com/enPlace/top-weather-app",
  };
  menuTitles.forEach((title) => {
    const a = document.createElement("a");
    a.href = menuRefs[title];
    a.innerHTML = `<li>${title}</li>`;
    a.id = title;
    if(title!=="Home")a.target = "_blank"
    ul.appendChild(a);
  });
  return nav;
}

export { navMenu, getUnitType, getDegrees, setUnitType };
