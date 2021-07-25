
import cloud from './images/pexels-eberhard-grossgasteiger-1074428.jpg'
import cloud2 from './images/pexels-konevi-3789871.jpg'





function changebg(){
    const button = document.getElementById("menu-button")
    const main = document.getElementById("main-weather")
    if(button.classList.contains("active")){
        main.style.background = cloud
    }else{
        main.style.background = cloud2
    }
}

export {changebg}