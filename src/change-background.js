
import clearSkyDay from './images/clear-sky/pexels-francesco-ungaro-281260.jpg'
import fewCloudsDay from './images/few-clouds/pexels-skitterphoto-3768.jpg'
import scatteredCloudsDay from './images/scattered-clouds/pexels-pixabay-158163.jpg'
import brokenCloudsDay from './images/broken-clouds/broken-clouds3.jpg'
import showerRainDay from './images/rain/pexels-chris-kane-166360.jpg'
import thunderstormDay from './images/thunderstorm/pexels-andre-furtado-1162251.jpg'
import snowDay from './images/snow/pexels-henrikas-mackevicius-4069601.jpg'
import mistDay from './images/mist/pexels-nohk-1715476.jpg'
function changeMainBg(importedImage){
    const main = document.getElementById("main-weather")
    main.style.background = `url(${importedImage}) no-repeat center center`
    main.style.backgroundSize = "cover"
}

function changebg(iconCode){
    if(iconCode == "01d" ){ changeMainBg(clearSkyDay)}
    if(iconCode == "02d" ){ changeMainBg(fewCloudsDay)}
    if(iconCode == "03d" ){ changeMainBg(scatteredCloudsDay)}
    if(iconCode == "04d" ){ changeMainBg(brokenCloudsDay)}
    if(iconCode == "09d" ){ changeMainBg(showerRainDay)}
    if(iconCode == "10d" ){ changeMainBg(showerRainDay)}
    if(iconCode == "11d" ){ changeMainBg(thunderstormDay)}
    if(iconCode == "13d" ){ changeMainBg(snowDay)}
    if(iconCode == "50d" ){ changeMainBg(mistDay)}
    else{
        {document.getElementById("main-weather").style.backgound = "none"}
    }
}

export {changebg}