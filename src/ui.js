const userInterface = (function(){
    
    const DOMElements = {
locationInput : document.getElementById('search-location-input'),
searchBtn : document.getElementById('search-icon'),
weatherNowLocation : document.getElementById('current-location'),
todayTemperature : document.getElementById('today-temperature'),
todayHigh : document.getElementById('today-high'),
todayLow : document.getElementById('today-low'),
todayIcon : document.getElementById('today-weather-icon'),
humidity : document.getElementById('humidity'),
visibility : document.getElementById('visibility'),
wind : document.getElementById('wind'),
feels_like : document.getElementById('feels-like'),
todayWeatherIcon : document.getElementById('today-weather-icon'),
todayDescription : document.getElementById('today-description'),
farenheitSwitch : document.getElementById('farenheit'),
celsiusSwitch : document.getElementById('celsius')
}

//need a function that takes a Kelvin and returns a F or C depending on whether F or C is checked.
//So: 1. Get Kelvin as parameter. 2 Check what's checked. 3 return.

const convertKelvin = function(temperature){

    if (DOMElements.farenheitSwitch.checked) {
        return Math.floor(((temperature - 273.15) * 1.8 + 32), 2)
    }
    else return Math.floor((temperature - 273.15),2)
}


return {DOMElements, convertKelvin}

})();

export default userInterface