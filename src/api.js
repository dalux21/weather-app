import userInterface from './ui';

function getWeatherData(location) {
    

const apiKey = '20f7632ffc2c022654e4093c6947b4f4'
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`,

{mode: 'cors'})

.then(function(response){
    return response.json()
})
.then (function(response){
    const wind = response.wind.speed + ' m/s | ' +  response.wind.gust + ' gust'
    const description = response.weather[0].description
    const icon = response.weather[0].icon
    const iconUrl = `http://openweathermap.org/img/wn/${icon}@4x.png`
    userInterface.DOMElements.weatherNowLocation.innerText = response.name
    const temperature = response.main.temp
    userInterface.DOMElements.humidity.innerText = response.main.humidity + '%'
    userInterface.DOMElements.feels_like.innerText = userInterface.convertKelvin(response.main.feels_like) + '°'
    userInterface.DOMElements.visibility.innerText = response.visibility + ' m'
    userInterface.DOMElements.wind.innerText = wind
    userInterface.DOMElements.todayWeatherIcon.innerHTML = `<img src="${iconUrl}" alt="${description}"></img>`
    userInterface.DOMElements.todayDescription.innerText = description
    userInterface.DOMElements.todayTemperature.innerText = userInterface.convertKelvin(temperature) + '°'
    
})


.catch(function(err){
    console.log('Oopsie! ' + err)
    userInterface.DOMElements.weatherNowLocation.innerText = 'Location not found, try again!'
    
})


};

export default getWeatherData

