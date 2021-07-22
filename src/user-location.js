import { populateWeeklyForecast } from "./weekly-forecast";
import { populateMain } from "./main-weather";
import { getWeather, reverseGeocode} from "./forecast";



let latitude;
let longitude;
var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

async function success(pos) {
  const crd = pos.coords;
  /*     console.log(crd)
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`); */
    console.log(crd)
    const lat = Math.floor(crd.latitude * 100) / 100;
    const lon= Math.floor(crd.longitude * 100) / 100;
    console.log(lat, lon)
    const reverseGeocodeData = await reverseGeocode(lat, lon)
    const weatherData = await getWeather(crd.latitude, crd.longitude);
    console.log(reverseGeocodeData.data[0])  
    console.log(weatherData);
   
      
 
    populateMain(weatherData, reverseGeocodeData.data[0].label);
    populateWeeklyForecast(weatherData);
    if (document.getElementById("menu-button").classList.contains("active"))
      document.getElementById("weekly-forecast").classList.add("hidden");

  return crd;
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}


async function autoPopulateData() {
  await navigator.geolocation.getCurrentPosition(success, error, options);
  
  const lat = Math.floor(latitude * 100) / 100;
  const long = Math.floor(longitude * 100) / 100;
}

export { autoPopulateData };
