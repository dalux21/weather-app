import userInterface from './ui'
import getWeatherData from './api'
// Just a bunch of cool places for the default display
const coolLocations = ['Antarctica', 'Ushuaia', 'Ittoqqortoormiit', 'Changtang']
//pick one
const randomCoolLocation = coolLocations[Math.floor(Math.random() * coolLocations.length)]

//Default screen
getWeatherData(randomCoolLocation)

//Fetch weather when looked up
userInterface.DOMElements.searchBtn.addEventListener('click', function(e){
    e.preventDefault()
    const location = userInterface.DOMElements.locationInput.value
    getWeatherData(location)
})

userInterface.DOMElements.celsiusSwitch.addEventListener('click', function(e){
    getWeatherData(userInterface.DOMElements.weatherNowLocation.innerText)
})
userInterface.DOMElements.farenheitSwitch.addEventListener('click', function(){
    getWeatherData(userInterface.DOMElements.weatherNowLocation.innerText)
})

