import userInterface from './ui'
import getWeatherData from './api'

userInterface.DOMElements.searchBtn.addEventListener('click', getWeatherData)