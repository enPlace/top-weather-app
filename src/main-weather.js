import { unix } from ".";
import { getUnitType } from "./nav";
import { changebg } from "./change-background";

let degreeType;

function newHourInfo(hourlyObj) {
  //Returns an HTML element for a single hour's weather
  const hourInfo = document.createElement("div");
  hourInfo.classList.add("hour-info");

  const temp = document.createElement("div");
  temp.classList.add("hour-temp");
  temp.textContent = `${Math.floor(hourlyObj.temp / 1)}°`;
  hourInfo.appendChild(temp);

  const iconDiv = document.createElement("div");
  iconDiv.classList.add("hour-icon");
  const icon = document.createElement("img");
  icon.classList.add("small-icon");
  icon.src = `https://openweathermap.org/img/wn/${hourlyObj.weather[0].icon}@2x.png`;
  iconDiv.appendChild(icon);
  hourInfo.appendChild(iconDiv);

  const precipDiv = document.createElement("div");
  precipDiv.classList.add("hour-precip");
  precipDiv.innerHTML = "<div>precip:</div>";
  const pop = document.createElement("div");
  pop.textContent = `${Math.floor(hourlyObj.pop * 100)}%`;
  precipDiv.appendChild(pop);
  hourInfo.appendChild(precipDiv);

  const time = document.createElement("div");
  time.classList.add("hour-time");
  time.textContent = unix(hourlyObj.dt).time();
  hourInfo.appendChild(time);

  return hourInfo;
}
function populateHourly(weatherData) {
  //Returns and HTML element with 24 hours of hourly weather forecasts
  const hourlyContainer = document.createElement("div");
  hourlyContainer.id = "hourly-forecast";
  hourlyContainer.classList.add("hourly-forecast");
  for (let i = 0; i < 24; i++) {
    hourlyContainer.appendChild(newHourInfo(weatherData.hourly[i]));
  }
  return hourlyContainer;
}

function currentTemp(weatherData) {
  //Returns the HTML element containing current temp info
  const tempDiv = document.createElement("div");
  tempDiv.classList.add("current-temp-data");
  tempDiv.id = "current-temp-data";
  tempDiv.innerHTML = `
    <div class="main-highlow" id="main-highlow">
      <div class="current-high" id="current-high">High: ${Math.floor(
        weatherData.daily[0].temp.max / 1
      )}°</div>
      <div class="current-low" id="current-low">Low: ${Math.floor(
        weatherData.daily[0].temp.min
      )}°</div>
    </div>
    <div class="current-temp" id="current-temp">
    ${Math.floor(
      weatherData.current.temp / 1
    )}<span class="c" id="c">°${degreeType}</span>
    </div>
    <div class="feels-like" id="feels-like">Feels like ${Math.floor(
      weatherData.current.feels_like / 1
    )}°${degreeType}</div>
    `;

  return tempDiv;
}

function currentConditions(weatherData) {
    //Returns the HTML element containing the current conditions info
  const conditions = document.createElement("div");
  conditions.classList.add("main-conditions");
  conditions.id = "main-conditions";
  conditions.innerHTML = `
    <div class="main-icon" id="main-icon">
          <img
            id="icon-img"
            src="https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png"
            alt=""
          />
        </div>
        <div class="main-description" id="main-description">${weatherData.current.weather[0].description}</div>
    `;
  return conditions;
}

function placeName(geocodeData, type) {
  //Returns the HTML element containing a place name.
  const place = document.createElement("div");
  place.classList.add("city-name");
  place.id = "city-name";
  if (type === "local") {
    //Does this if the weather comes from automatically getting the user's location
    let pluscode = geocodeData.plus_code.compound_code.split(" ") 
    place.textContent = pluscode.slice(1, pluscode.length).join(" ")
  }else{
    //Does this on any manual user search
    place.textContent = geocodeData.results[0].formatted_address;
  }
  return place;
}


function populateMain(weatherData, geocodeData, type) {
 /*  Removes any previous weather info and (re)appends the info and HTML 
elements of the main weather section fo the site.  */

  getUnitType() === "metric" ? (degreeType = "C") : (degreeType = "F");

  const mainWeather = document.getElementById("main-weather");
  if (document.getElementById("current-temp-data")) {
    mainWeather.removeChild(document.getElementById("current-temp-data"));
  }
  if (document.getElementById("main-conditions")) {
    mainWeather.removeChild(document.getElementById("main-conditions"));
  }
  if (document.getElementById("city-name")) {
    mainWeather.removeChild(document.getElementById("city-name"));
  }
  if (document.getElementById("hourly-forecast")) {
    mainWeather.removeChild(document.getElementById("hourly-forecast"));
  }
  mainWeather.appendChild(currentTemp(weatherData));
  mainWeather.appendChild(currentConditions(weatherData));
  mainWeather.appendChild(placeName(geocodeData,type));
  mainWeather.appendChild(populateHourly(weatherData));
  changebg(weatherData.current.weather[0].icon);
}

export { populateMain };
