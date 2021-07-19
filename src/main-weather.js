function unixTime(unixString){
    let dateObj = new Date(unixString*1000)
    return dateObj.toTimeString().slice(0,5)
}

function newHourInfo(hourlyObj){
    const hourInfo = document.createElement("div")
    hourInfo.classList.add("hour-info")

    const temp = document.createElement("div")
    temp.classList.add("hour-temp")
    temp.textContent = `${hourlyObj.temp}°`
    hourInfo.appendChild(temp)

    const iconDiv = document.createElement("div")
    iconDiv.classList.add("hour-icon")
    const icon = document.createElement("img")
    icon.classList.add("small-icon")
    icon.src = `http://openweathermap.org/img/wn/${hourlyObj.weather[0].icon}@2x.png`
    iconDiv.appendChild(icon)
    hourInfo.appendChild(iconDiv)

    const precipDiv = document.createElement("div")
    precipDiv.classList.add("hour-precip")
    precipDiv.innerHTML = "<div>precip:</div>"
    const pop = document.createElement("div")
    pop.textContent= `${hourlyObj.pop}%`
    precipDiv.appendChild(pop)
    hourInfo.appendChild(precipDiv)

    const time = document.createElement("div")
    time.classList.add("hour-time")
    time.textContent = unixTime(hourlyObj.dt)
    hourInfo.appendChild(time)

    return hourInfo
}

function populateHourly(weatherData){
    const hourlyContainer = document.getElementById("hourly-forecast")
    removeChildren(hourlyContainer)
    for(let i = 0; i<24; i++){
        hourlyContainer.appendChild(newHourInfo(weatherData.hourly[i]))
    }
}

function removeChildren(parent){
    //removes all children of an element
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    };
}


export { populateHourly }