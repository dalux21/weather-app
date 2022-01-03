import userInterface from './ui';

function getWeatherData() {
    
const location = userInterface.DOMElements.locationInput.value
const apiKey = '20f7632ffc2c022654e4093c6947b4f4'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`,

{mode: 'cors'})

.then(function(response){
    return response.json()
})
.then (function(response){
    const wind = response.wind.speed + ' ' + response.wind.deg + ' deg ' + response.wind.gust + ' gust'
    const description = response.weather[0].description
    const icon = response.weather[0].icon
    const id = response.weather[0].id
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@4x.png`
    userInterface.DOMElements.weatherNowLocation.innerText = response.name
    userInterface.DOMElements.todayTemperature.innerText = response.main.temp
    userInterface.DOMElements.humidity.innerText = response.main.humidity
    userInterface.DOMElements.feels_like.innerText = response.main.feels_like
    userInterface.DOMElements.visibility.innerText = response.visibility
    userInterface.DOMElements.wind.innerText = wind
    userInterface.DOMElements.todayWeatherIcon.innerHTML = `<img src="${iconUrl}" alt="${description}"></img>`
    userInterface.DOMElements.todayDescription.innerText = description




    
})

.catch(function(err){
    console.log('there was a problem with the request' + err)
    
})

};

export default getWeatherData

