import "./style.css";
import { geocode, getWeather } from "./forecast";
import { populateMain } from "./main-weather";
import { populateWeeklyForecast } from "./weekly-forecast";
import { navMenu, getDegrees } from "./nav";
import { populateFromUserLocation } from "./user-location";

const searchForm = document.getElementById("search-form");
const searchBar = document.getElementById("search-bar");
const main = document.getElementById("main-weather");
console.log(process.env.WEATHER_KEY);
console.log(process.env.GEO_KEY);
main.appendChild(navMenu());
console.log(getDegrees());

populateFromUserLocation();

async function populateAllWeatherData() {
  document.getElementById("loader-container").classList.add("active");
  try {
    const geocodeData = await geocode(searchBar.value);
    console.log(geocodeData);
    console.log(geocodeData.results[0].formatted_address);
    const weatherData = await getWeather(
      geocodeData.results[0].geometry.location.lat,
      geocodeData.results[0].geometry.location.lng
    );
    console.log(weatherData);
    populateMain(weatherData, geocodeData);
    populateWeeklyForecast(weatherData);
    document.getElementById("loader-container").classList.remove("active");
  } catch {
    document.getElementById("loader-container").classList.remove("active");
  }
}

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  populateAllWeatherData();
});

function removeChildren(parent) {
  //removes all children of an element
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function unix(unixString) {
  //converts a unix string into time or day
  const dateObj = new Date(unixString * 1000);
  function time() {
    return dateObj.toTimeString().slice(0, 5);
  }
  function day() {
    const day = dateObj.toDateString().slice(0, 3);
    if (day === "Sun") return "Sunday";
    if (day === "Mon") return "Monday";
    if (day === "Tue") return "Tuesday";
    if (day === "Wed") return "Wednesday";
    if (day === "Thu") return "Thursday";
    if (day === "Fri") return "Friday";
    if (day === "Sat") return "Saturday";
  }
  return { time, day };
}

export { removeChildren, unix, populateAllWeatherData };
