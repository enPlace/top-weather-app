import "./style.css";
import { geocode, getWeather } from "./forecast";
import { populateMain } from "./main-weather";
import { populateWeeklyForecast } from "./weekly-forecast";
import { navMenu, getDegrees } from "./nav";
import { autoPopulateData } from "./user-location";


const searchForm = document.getElementById("search-form");
const searchBar = document.getElementById("search-bar");
const main = document.getElementById("main-weather");
main.appendChild(navMenu());
console.log(getDegrees());

autoPopulateData()

async function populateAllWeatherData() {
  const geocodeData = await geocode(searchBar.value);
  const weatherData = await getWeather(
    Math.floor(geocodeData.latitude * 100) / 100,
    Math.floor(geocodeData.longitude * 100) / 100
  );
  console.log(geocodeData);
  console.log(weatherData);
  populateMain(weatherData, geocodeData);
  populateWeeklyForecast(weatherData);
  if (document.getElementById("menu-button").classList.contains("active"))
    document.getElementById("weekly-forecast").classList.add("hidden");
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
