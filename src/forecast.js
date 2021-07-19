import { weatherAPI, geocodingAPI } from "./config";

// forecast.js contains scripts for communicating with api's and formating data.
let allGeocode;
let geocodeData;
let latitude;
let longitude;
let weather;
let current;
let errCount = 0;

/*______Communicating with API's______ */
const geocode = async (searchText) => {
  if (errCount < 3) {
    const URL = `http://api.positionstack.com/v1/forward?access_key=${geocodingAPI}&query=${searchText}`;
    const response = await fetch(URL);
    if (!response.ok) {
      throw Error(response.status);
    }
    const data = await response.json();
    allGeocode = data;
    for (let i = 0; i < data.data.length; i++) {
      if (
        searchBar.value.split(",")[0].toLowerCase() ==
        data.data[i].name.toLowerCase()
      ) {
        latitude = Math.floor(data.data[i].latitude * 100) / 100;
        longitude = Math.floor(data.data[i].longitude * 100) / 100;

        geocodeData = data.data[i];
        console.log(geocodeData);
        break;
      } else {
        geocodeData = data.data[0];
        latitude = Math.floor(data.data[0].latitude * 100) / 100;
        longitude = Math.floor(data.data[0].longitude * 100) / 100;
      }
    }
  }
};

const getWeather = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely&appid=${weatherAPI}`
  );
  if (!response.ok) {
    throw Error(response.status);
  }
  const data = await response.json();
  weather = data;
  return data;
};

const getCurrentWeather = async (stringA, stringB) => {
  if (!stringB) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${stringA}&units=imperial&appid=${weatherAPI}`
    );
    //
    if (!response.ok) {
      throw Error(response.status);
    }
    const data = await response.json();
    return data;
  }
  if (stringA && stringB) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${stringA}&lon=${stringB}&appid=${weatherAPI}`
    );
    if (!response.ok) {
      throw Error(response.status);
    }
    const data = await response.json();
    return data;
  }
};
