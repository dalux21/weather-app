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
}

return {DOMElements}

})();

export default userInterface