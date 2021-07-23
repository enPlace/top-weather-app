import { populateWeeklyForecast } from "./weekly-forecast";
import { populateMain } from "./main-weather";
import { getWeather, reverseGeocode } from "./forecast";

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

async function success(pos) {
  try {
    const crd = pos.coords;
    console.log(crd);
    const reverseGeocodeData = await reverseGeocode(
      crd.latitude,
      crd.longitude
    );
    const weatherData = await getWeather(crd.latitude, crd.longitude);
    console.log(reverseGeocodeData.data[0].label);
    console.log(weatherData);
    populateMain(weatherData, reverseGeocodeData.data[0]);
    populateWeeklyForecast(weatherData);
    if (document.getElementById("menu-button").classList.contains("active")) {
      document.getElementById("weekly-forecast").classList.add("hidden");
    }
    document.getElementById("loader-container").classList.remove("active");
  } catch {
    document.getElementById("loader-container").classList.remove("active");
  }
  return crd;
}

function error(err) {
  document.getElementById("loader-container").classList.remove("active");
  console.warn(`ERROR(${err.code}): ${err.message}`);
  const message = document.createElement("div");
  message.id = "initial-message";
  message.classList.add("initial-message");
  message.textContent = "Search for a city and press 'Enter' to get started";
  document.getElementById("main-weather").appendChild(message);
}

function populateFromUserLocation() {
  document.getElementById("loader-container").classList.add("active");
  navigator.geolocation.getCurrentPosition(success, error, options);
}

export { populateFromUserLocation };
