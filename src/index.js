import "./style.css";
import { geocode, getWeather } from "./forecast";
import { populateMain } from "./main-weather";

const searchForm = document.getElementById("search-form");
const searchBar = document.getElementById("search-bar");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const geocodeData = await geocode(searchBar.value);
  const weatherData = await getWeather(
    Math.floor(geocodeData.latitude * 100) / 100,
    Math.floor(geocodeData.longitude * 100) / 100
  );
  console.log(weatherData);
  populateMain(weatherData);
});

function removeChildren(parent) {
  //removes all children of an element
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export { removeChildren };
