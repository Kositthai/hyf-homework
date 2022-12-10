const input = document.getElementById('input');
const weatherBtn = document.getElementById('weatherBtn');
const paraTemp = document.getElementById('paraTemp'); 
const paraCity = document.getElementById('paraCity'); 
const paraDesWeather = document.getElementById('paraDesWeather');
const sunrise = document.getElementById('sunrise'); 
const sunset = document.getElementById('sunset'); 
const windSpeed = document.getElementById('windSpeed'); 
const cloudiness = document.getElementById('cloudiness'); 
const main = document.getElementById('main'); 
const icon = document.getElementById('icon'); 

weatherBtn.addEventListener('click', isWeather); 

function isWeather(){
    const inputArea = input.value;
    const WEATHER_API_KEY = '5186fb1dc8552e959f81fc18ce1cf432'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputArea}&appid=${WEATHER_API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(weatherInfo => {

            // I got this 3 lines on stackOverFlow but will try to understand it later how it works.
            // https://stackoverflow.com/questions/26630650/detect-404-error-on-page-load
            const http = new XMLHttpRequest();
            http.open('HEAD', url, false);
            http.send();

            if(http.status !== 404){
                const tempIs = Math.round(weatherInfo.main.temp - 273.15);
                const desWeather = weatherInfo.weather[0].description;
                const srTime = new Date((weatherInfo.sys.sunrise + weatherInfo.timezone)*1000);
                const ssTime = new Date((weatherInfo.sys.sunset + weatherInfo.timezone)*1000);

                icon.src = 'http://openweathermap.org/img/wn/'+ weatherInfo.weather[0].icon + '@2x.png';   

                sunrise.style.background = 'rgba(107, 149, 207, 0.396)'; 
                sunset.style.background = 'rgba(107, 149, 207, 0.396)'; 
                windSpeed.style.background = 'rgba(107, 149, 207, 0.396)'; 
                cloudiness.style.background = 'rgba(107, 149, 207, 0.396)'; 
                main.style.background = 'rgba(240, 248, 255, 0.791)';

                paraCity.textContent = weatherInfo.name;
                paraDesWeather.textContent = desWeather; 

                sunrise.innerHTML = 
                `<img src="asset/001-sunrise.png">
                <p>${getSunriseAndSunsetTime(srTime)}</p>
                <span>Sunrise</span>`; 

                sunset.innerHTML = 
                `<img src="asset/002-sunset.png">
                <p>${getSunriseAndSunsetTime(ssTime)}</p>
                <span>Sunset</span>`; 

                windSpeed.innerHTML = 
                `<img src="asset/001-wind.png">
                <p>${weatherInfo.wind.speed}</p>
                <span>Wind speed</span>`; 

                cloudiness.innerHTML = 
                `<img src="asset/001-clouds.png">
                <p>${weatherInfo.clouds.all}%</p>
                <span>Cloudiness</span>`; 

                paraTemp.textContent = `${tempIs}°`;

                changeBackground(inputArea)           
                displayMap(weatherInfo)

            } else { 
                alert('Can not find the location you searched for')
            }
        })            
}

function getSunriseAndSunsetTime(sunTime){     
    const twoDigits = (val) => ('0' + val).slice(-2); 
    const hours = twoDigits(sunTime.getUTCHours());
    const minutes = twoDigits(sunTime.getUTCMinutes());
        
    return (`${hours}:${minutes}`);
}

function changeBackground(inputArea){
    const UNSPLASH_API_KEY = 'I4wHzf_dBj7vDgBMH0txZfavRLj59sc1MN2P6V_24I4'; 
    const url = `https://api.unsplash.com/search/photos?query=${inputArea}&orientation=portrait&client_id=${UNSPLASH_API_KEY}`;
    
        fetch(url)
            .then(response => response.json())
            .then(unsplash => {
                document.getElementById('container').style.cssText = `background: no-repeat url(${unsplash.results[0].urls.raw}); background-size: cover;`
        })
}

function displayMap(weatherInfo) {

    const mapid = document.getElementById('mapid')
    const mapSection = document.getElementById('mapSection')
    mapid.remove();
    mapSection.innerHTML = `
    <div id="mapWrapper" style="background: rgba(107, 149, 207, 0.396)">
    <p id="location"><i class="fas fa-map-marker-alt"></i>  Location</p>
        <div id="mapid"></div>
    </div>
    `; 
    
    const map = L.map('mapid').setView([weatherInfo.coord.lat, weatherInfo.coord.lon], 8);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        
        L.marker([weatherInfo.coord.lat, weatherInfo.coord.lon]).addTo(map);    
}

