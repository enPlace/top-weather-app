# Enplace Weather App

I made this project to practice making dynamic and responsive webpages, and to practice working with APIs. The project is compiled using webpack and uses three APIs: the Google Places API, Google Geocoding API, and Openweathermap's One Call API. It is deployed to Heroku using an express server. 

https://enplace-weather.herokuapp.com/


<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank" background-color= "white"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkokhLLsOrtw9NlwdK9Z1Il7nq_5FQCAzZUIiSM8-9lAII8FxJG_2u5reGqIBdxy4miE&usqp=CAU" alt="express" width="50" height="40"/> </a> <a href="https://heroku.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="60" height="60"/> </a> <a href="https://webpack.js.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="60" height="60"/> </a> </p>


<img src="./desktop.gif" alt="desktop" width="600"/>

## Usage and Features
The app displays current conditions, an hourly forecast, and an 8 day forecast including today's forecast.


Features: 

- Gets user location and automatically loads weather data for that location.
- Automatically sets unit of measurement depending on where the user is located (imperial if in the U.S., metric  otherwise).
- The unit of measurement can be changed manually by the user in the side menu.
- App changes the background photo depending on type of weather and on time of day. 
- Autocomplete search bar for suggestions, accuracy and ease of use.
- Is optimized for both mobile and desktop use. 

Searching for cities  in the Openweathermap API does not always return optimum results, especially when there are multiple cities with the same name, so I decided to use a geocoding api to retrieve specific coordinates to be submitted to the openweathermap api for maximum accuracy. I also chose to use the Google Places API to provide a search bar with autocomplete for added accuracy and to prevent user misspellings. 

Some search suggestions for seeing different weather displays. Search in different parts of the world to see different displays for day/night:
- Ushuaia, Argentina /Chamonix, France-- often snowy depending on season
- Beijing, China/Honolulu, HI-- often rainy
- Miami, FL -- frequent thunderstorms in the afternoons
- Lima, Peru -- usually cloudy
- Tokyo, Japan -- often with few clouds or broken clouds
- Sydney, Australia/ Mendoza, Argentina -- usually clear skies. 



## License
MIT License

Copyright (c) 2021 Nicholas Place 
[MIT](https://choosealicense.com/licenses/mit/)
