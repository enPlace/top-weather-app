import { weatherAPI, geocodingAPI } from "./config";
import { getUnitType } from "./nav";

const geocode = async (searchText) => {
  //returns an object with latitude and longitude information from search text /
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchText}&key=${geocodingAPI}`;
  const response = await fetch(URL);
  if (!response.ok) {
    throw Error(response.status);
  }
  const data = await response.json();
  return data;
};

const reverseGeocode = async (lat, lon) => {
  //gets an address from latitude and longitude
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${geocodingAPI}`;
  const response = await fetch(URL);
  if (!response.ok) {
    throw Error(response.status);
  }
  const data = await response.json();
  return data;
};

const getWeather = async (lat, lon) => {
  //uses the one call api from openweathermap.org to get detailed weather information for a location from latitude and longitude
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${getUnitType()}&exclude=minutely&appid=${weatherAPI}`
  );
  if (!response.ok) {
    throw Error(response.status);
  }
  const data = await response.json();
  return data;
};

export { geocode, reverseGeocode, getWeather };
