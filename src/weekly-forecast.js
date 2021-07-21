const d2d = require("degrees-to-direction"); //converts wind degrees to a compass direction
import { unix } from ".";

function createWeeklyForecast(weatherData) {
  let forecastList = [];
  for (let i = 0; i < 8; i++) {
    let day;
    const forecastDiv = document.createElement("div");
    forecastDiv.classList.add("day-forecast");
    if (i === 0) {
      day = "Today's forecast";
      forecastDiv.id = "today-forecast";
    } else day = unix(weatherData.daily[i].dt).day();

    forecastDiv.innerHTML = `
    <div class="day-overview">
      <div class="day-overview-left">
        <div class="day-name">${day}</div>
        <div class="day-description">${
          weatherData.daily[i].weather[0].description
        }</div>
      </div>
      <div class="day-overview-right">
        <div class="day-icon">
          <img
            class="small-icon day-icon"
            src="http://openweathermap.org/img/wn/${
              weatherData.daily[i].weather[0].icon
            }@2x.png"
            alt=""
          />
        </div>
        <div class="day-highlow">
          <div class="day-high">${Math.floor(
            weatherData.daily[i].temp.max / 1
          )}°
          </div>
          <div class="day-low">${Math.floor(weatherData.daily[i].temp.min / 1)}°
          </div>
        </div>
      </div>
    </div>
    <ul class="day-details">
        <li><div>Precipitation</div> <div>${Math.floor(
          (weatherData.daily[i].pop * 100) / 1
        )}%</div>
        </li>
        <li><div>Wind</div> 
          <div>${weatherData.daily[i].wind_speed}km/h 
          ${d2d(weatherData.daily[i].wind_deg)}
          </div>
        </li>
        <li><div>Humidity</div> <div>${weatherData.daily[i].humidity}%</div>
        </li>
        <li><div>UV Index</div> <div>${weatherData.daily[i].uvi}</div>
        </li>
        <li><div>Sunrise/Sunset</div> <div>${unix(
          weatherData.daily[i].sunrise
        ).time()}/${unix(weatherData.daily[i].sunset).time()}</div>
        </li>
    </ul>`;
    forecastList.push(forecastDiv);
  }
  return forecastList;
}

function populateWeeklyForecast(weatherData) {
  if (document.getElementById("weekly-forecast")) {
    document.body.removeChild(document.getElementById("weekly-forecast"));
  }
  const weeklyDiv = document.createElement("div");
  weeklyDiv.classList.add("weekly-forecast");
  weeklyDiv.id = "weekly-forecast";
  createWeeklyForecast(weatherData).forEach((node) => {
    weeklyDiv.appendChild(node);
  });
  document.body.appendChild(weeklyDiv);
}

export { populateWeeklyForecast };
