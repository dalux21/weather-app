const apiKey = '20f7632ffc2c022654e4093c6947b4f4'
const locationInput = document.getElementById('search-location-input')
const searchBtn = document.getElementById('search-icon')
const weatherNowLocation = document.getElementById('current-location')
const todayTemperature = document.getElementById('today-temperature')



searchBtn.addEventListener('click', getWeatherData)

function getWeatherData(){

    let location = locationInput.value;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`,
{mode: 'cors'})
.then(function(response){
    return response.json()
})
.then (function(response){

    console.log(response)
    const location = response.name
    const temperatureNow = response.main.temp
    const humidity = response.main.humidity
    const feels_like = response.main.feels_like
    const visibility = response.visibility
    const wind = response.wind.speed + ' ' + response.wind.deg + ' deg ' + response.wind.gust + ' gust'
    const cloudiness = response.clouds.all
    const description = response.weather[0].description
    console.log(temperatureNow, humidity, feels_like, visibility,wind, cloudiness, description)
})

.catch(function(err){
    console.log('there was a problem with the request' + err)
    
})
}

