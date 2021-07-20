import { removeChildren } from ".";

function unixTime(unixString) {
  let dateObj = new Date(unixString * 1000);
  return dateObj.toTimeString().slice(0, 5);
}

function newHourInfo(hourlyObj) {
  const hourInfo = document.createElement("div");
  hourInfo.classList.add("hour-info");

  const temp = document.createElement("div");
  temp.classList.add("hour-temp");
  temp.textContent = `${hourlyObj.temp}°`;
  hourInfo.appendChild(temp);

  const iconDiv = document.createElement("div");
  iconDiv.classList.add("hour-icon");
  const icon = document.createElement("img");
  icon.classList.add("small-icon");
  icon.src = `http://openweathermap.org/img/wn/${hourlyObj.weather[0].icon}@2x.png`;
  iconDiv.appendChild(icon);
  hourInfo.appendChild(iconDiv);

  const precipDiv = document.createElement("div");
  precipDiv.classList.add("hour-precip");
  precipDiv.innerHTML = "<div>precip:</div>";
  const pop = document.createElement("div");
  pop.textContent = `${hourlyObj.pop}%`;
  precipDiv.appendChild(pop);
  hourInfo.appendChild(precipDiv);

  const time = document.createElement("div");
  time.classList.add("hour-time");
  time.textContent = unixTime(hourlyObj.dt);
  hourInfo.appendChild(time);

  return hourInfo;
}

function populateHourly(weatherData) {
  const hourlyContainer = document.getElementById("hourly-forecast");
  removeChildren(hourlyContainer);
  for (let i = 0; i < 24; i++) {
    hourlyContainer.appendChild(newHourInfo(weatherData.hourly[i]));
  }
}

function currentTemp(weatherData) {
  /*    const tempDiv = document.createElement("div")
    const higlow = document.createElement("div")
    highlow.classList.add("main-hightlow")
    highlow.id ="main-highlow"
    const high = document.createElement("div")
    const low = document.createElement("div")
    high.classList.add("current-high")
    high.id = "current-high"
    high.textContent = weatherData.daily[0].temp.max.slice(0,2)
    low.classList.add("current-low")
    low.id = "current-low" */
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
    ${Math.floor(weatherData.current.temp / 1)}<span class="c" id="c">°C</span>
    </div>
    <div class="feels-like" id="feels-like">Feels like ${Math.floor(
      weatherData.current.feels_like / 1
    )}°C</div>
    `;

  return tempDiv;
}

export { populateHourly, currentTemp };
