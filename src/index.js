import "./style.css";
import { geocode, getWeather, getCurrentWeather } from "./forecast";

const searchForm = document.getElementById("search-form");
const searchBar = document.getElementById("search-bar");

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const geocodeData = await geocode(searchBar.value);
  console.log(geocodeData);
  const latitude = Math.floor(geocodeData.latitude * 100) / 100;
  const longitude = Math.floor(geocodeData.longitude * 100) / 100;
  console.log(latitude, longitude)
  const weatherData = await getWeather(latitude, longitude)
  console.log(weatherData)
});
