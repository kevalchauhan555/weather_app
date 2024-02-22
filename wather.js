const apiKey = "48157042a4130ff78b4ad10deda611e3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon"); 

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    document.querySelector(".weather").style.display = "none";
    
    if(response.status!==200){
        
        document.querySelector(".errorMessage").innerHTML = `${response.statusText}`;
        document.querySelector(".error").style.display='block';
    }
    else{
        const data = await response.json();

        
    document.getElementById("cityName").innerHTML = data.name;
    document.getElementById("cityTemp").innerHTML = Math.round(data.main.temp)+"°C";
    
    document.getElementById('humidity').innerHTML = `${data.main.humidity} % `
    document.getElementById("wind").innerHTML = `${data.wind.speed} %`;
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})





