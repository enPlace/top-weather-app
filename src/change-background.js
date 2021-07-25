
import clearSkyDay from './images/clear-sky/pexels-francesco-ungaro-281260.jpg'
import clearSkyNight from './images/clear-sky/pexels-juan-733475.jpg'

import fewCloudsDay from './images/few-clouds/pexels-skitterphoto-3768.jpg'
import fewCloudsNight from './images/few-clouds/pexels-roberto-nickson-2885320.jpg'

import scatteredCloudsDay from './images/scattered-clouds/pexels-pixabay-158163.jpg'   //this one has a problem with conditions description
import scatteredCloudsNight from './images/scattered-clouds/pexels-brett-sayles-3910141.jpg'

import brokenCloudsDay from './images/broken-clouds/broken-clouds3.jpg'

import showerRainDay from './images/rain/pexels-chris-kane-166360.jpg'
import showerRainNight from './images/rain/pexels-aleksandar-pasaric-2068411.jpg'

import thunderstormDay from './images/thunderstorm/pexels-andre-furtado-1162251.jpg'
import thunderstormNight from './images/thunderstorm/pexels-johannes-plenio-1118869.jpg'

import snowDay from './images/snow/pexels-henrikas-mackevicius-4069601.jpg'
import snowNight from './images/snow/nightsnow2.jpg'

import mistDay from './images/mist/pexels-nohk-1715476.jpg'
function changeMainBg(importedImage){
    const main = document.getElementById("main-weather")
    main.style.background = `url(${importedImage}) no-repeat center center`
    main.style.backgroundSize = "cover"
}

function changebg(iconCode){
    if(iconCode == "01d" ){ changeMainBg(clearSkyDay)}
    if(iconCode == "01n" ){ changeMainBg(clearSkyNight)}

    if(iconCode == "02d" ){ changeMainBg(snowDay)}
    if(iconCode == "02n" ){ changeMainBg(fewCloudsNight)}

    if(iconCode == "03d" ){ changeMainBg(scatteredCloudsDay)} //this one has a problem with conditions description
    if(iconCode == "03n" ){ changeMainBg(scatteredCloudsNight)}

    if(iconCode == "04d" ){ changeMainBg(brokenCloudsDay)}
    if(iconCode == "04n" ){ changeMainBg(scatteredCloudsNight)}

    if(iconCode == "09d" || iconCode == "10d" ){ changeMainBg(showerRainDay)}
    if(iconCode == "09n" ||iconCode == "10n"  ){ changeMainBg(showerRainNight)}

    if(iconCode == "11d" ){ changeMainBg(thunderstormDay)}
    if(iconCode == "11n" ){ changeMainBg(thunderstormNight)}


    if(iconCode == "13d" ){ changeMainBg(snowDay)}
    if(iconCode == "13n" ){ changeMainBg(snowNight)}

    if(iconCode == "50d" ){ changeMainBg(mistDay)}
    if(iconCode == "50d" ){ changeMainBg(mistNight)}


}

export {changebg}