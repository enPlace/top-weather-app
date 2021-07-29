import { populateWeeklyForecast } from "./weekly-forecast";
import { populateMain } from "./main-weather";
import { getWeather, reverseGeocode } from "./forecast";
import { setUnitType } from "./nav";

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
let initialLoad = true; 
function setInitialUnitType(reverseGeocodeData) {
  //sets unit of measurement depending on the user location
  if (initialLoad === true) {
    initialLoad = false;
    let country;
    for (let i = 0; i < reverseGeocodeData.results.length; i++) {
      if (reverseGeocodeData.results[i].types[0] == "country") {
        country = reverseGeocodeData.results[i].formatted_address;
        break;
      }
    }
    if (country === "United States") {
      setUnitType("imperial");
    } else {
      setUnitType("metric");
    }
  }
}

async function success(pos) {
  //if user location is available
  const crd = pos.coords;
  try {
    const reverseGeocodeData = await reverseGeocode(
      crd.latitude,
      crd.longitude
    );
    setInitialUnitType(reverseGeocodeData);
    const weatherData = await getWeather(crd.latitude, crd.longitude);
    populateMain(weatherData, reverseGeocodeData, "local");
    populateWeeklyForecast(weatherData);
    if (document.getElementById("menu-button").classList.contains("active")) {
      document.getElementById("weekly-forecast").classList.add("hidden");
    }
    document.getElementById("loader-container").classList.remove("active");
  } catch {
    document.getElementById("loader-container").classList.remove("active");
  }
}

function error(err) {
  //if user location is not available
  document.getElementById("loader-container").classList.remove("active");
  console.warn(`ERROR(${err.code}): ${err.message}`);
  const message = document.createElement("div");
  message.id = "initial-message";
  message.classList.add("initial-message");
  message.textContent = "Search for a city and press 'Enter' to get started";
  document.getElementById("main-weather").appendChild(message);
}

function populateFromUserLocation() {
  //populates the page from user location weather data
  document.getElementById("loader-container").classList.add("active");
  navigator.geolocation.getCurrentPosition(success, error, options);
}

export { populateFromUserLocation };
