(()=>{"use strict";const e={DOMElements:{locationInput:document.getElementById("search-location-input"),searchBtn:document.getElementById("search-icon"),weatherNowLocation:document.getElementById("current-location"),todayTemperature:document.getElementById("today-temperature"),todayHigh:document.getElementById("today-high"),todayLow:document.getElementById("today-low"),todayIcon:document.getElementById("today-weather-icon"),humidity:document.getElementById("humidity"),visibility:document.getElementById("visibility"),wind:document.getElementById("wind"),feels_like:document.getElementById("feels-like"),todayWeatherIcon:document.getElementById("today-weather-icon"),todayDescription:document.getElementById("today-description")}};e.DOMElements.searchBtn.addEventListener("click",(function(){const t=e.DOMElements.locationInput.value;fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&appid=20f7632ffc2c022654e4093c6947b4f4`,{mode:"cors"}).then((function(e){return e.json()})).then((function(t){const n=t.wind.speed+" "+t.wind.deg+" deg "+t.wind.gust+" gust",i=t.weather[0].description,o=t.weather[0].icon,d=(t.weather[0].id,`http://openweathermap.org/img/wn/${o}@4x.png`);e.DOMElements.weatherNowLocation.innerText=t.name,e.DOMElements.todayTemperature.innerText=t.main.temp,e.DOMElements.humidity.innerText=t.main.humidity,e.DOMElements.feels_like.innerText=t.main.feels_like,e.DOMElements.visibility.innerText=t.visibility,e.DOMElements.wind.innerText=n,e.DOMElements.todayWeatherIcon.innerHTML=`<img src="${d}" alt="${i}"></img>`,e.DOMElements.todayDescription.innerText=i})).catch((function(e){console.log("there was a problem with the request"+e)}))}))})();