const apiKey="d2f9a9d569eea7e95ca36a9c4c08d11f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let tempText=document.querySelector('.temp');
let cityText=document.querySelector('.city');
let humidityText=document.querySelector('.humidity');
let windText=document.querySelector('.wind');
let inputText=document.querySelector('.search input');
let search=document.querySelector('.search button');
let weatherDisplay=document.querySelector('.weather');
let errorPara=document.querySelector('.error');
let imgChange=document.querySelector('.weather img');
let errorDisplay=document.querySelector('.error');
search.addEventListener('click',()=>{
    weatherDisplay.style.display='block';
    checkWeather(inputText.value);
});

async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404){
        errorDisplay.style.display='block';
        weatherDisplay.style.display='none';
    }
    else{
        var data=await response.json();
        errorDisplay.style.display='none';
        if(data.weather[0].description=='Mist'){
            imgChange.src="./images/mist.png";
        }
        else if(data.weather[0].main=='Clouds'){
            imgChange.src="./images/clouds.png";
        }
        else if(data.weather[0].main=='Rain'){
            imgChange.src="./images/rain.png";
        }
        else if(data.weather[0].main=='Drizzle'){
            imgChange.src="./images/drizzle.png";
        }
        else if(data.weather[0].main=='Clear'){
            imgChange.src="./images/clear.png";
        }
        else if(data.weather[0].main=='Snow'){
            imgChange.src="./images/snow.png";
        }
                
        tempText.innerHTML=Math.round(data.main.temp)+'°c';
        cityText.innerHTML=data.name;
        humidityText.innerHTML=data.main.humidity+'%';
        windText.innerHTML=data.wind.speed+'km/h';
    } 
}