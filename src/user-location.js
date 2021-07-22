import { populateWeeklyForecast } from "./weekly-forecast";
import { populateMain } from "./main-weather";
import { getWeather, reverseGeocode } from "./forecast";

let latitude;
let longitude;
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

async function success(pos) {
  const crd = pos.coords;
  console.log(crd);
  const reverseGeocodeData = await reverseGeocode(crd.latitude, crd.longitude);
  const weatherData = await getWeather(crd.latitude, crd.longitude);
  console.log(reverseGeocodeData.data[0].label);
  console.log(weatherData);

  populateMain(weatherData, reverseGeocodeData.data[0]);
  populateWeeklyForecast(weatherData);
  if (document.getElementById("menu-button").classList.contains("active"))
    document.getElementById("weekly-forecast").classList.add("hidden");

  return crd;
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function populateFromUserLocation() {
  navigator.geolocation.getCurrentPosition(success, error, options);

}

export { populateFromUserLocation };
