import userInterface from './ui'
import getWeatherData from './api'

getWeatherData('London')

userInterface.DOMElements.searchBtn.addEventListener('click', function(e){
    e.preventDefault()
    const location = userInterface.DOMElements.locationInput.value
    getWeatherData(location)
})