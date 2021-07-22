import { weatherAPI, geocodingAPI } from "./config";
import { getUnitType } from "./nav";

// contains functions for communicating with APIs and formating data.

const geocode = async (searchText) => {
  //returns an object with latitude and longitude information from search text
  const URL = `http://api.positionstack.com/v1/forward?access_key=${geocodingAPI}&query=${searchText}`;
  const response = await fetch(URL);
  if (!response.ok) {
    throw Error(response.status);
  }
  const data = await response.json();

  for (let i = 0; i < data.data.length; i++) {
    if (
      document
        .getElementById("search-bar")
        .value.split(",")[0]
        .toLowerCase() === data.data[i].name.toLowerCase()
    ) {
      return data.data[i];
    }
  }
  return data.data[0];
};

const reverseGeocode = async (lat, lon) => {
  const URL = `http://api.positionstack.com/v1/reverse?access_key=fcf207d586416db580282480768a64e6&query=${lat},${lon}`;
  const response = await fetch(URL);
  if (!response.ok) {
    throw Error(response.status);
  }
  const data = await response.json();
  return data
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
