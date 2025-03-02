const apiKey="1e920d7a8c61bfe747b20ac15f62ca87";
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherImage=document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response=fetch (url+ city +`&appid=${apiKey}`);
    var data =await (await response).json();

    if((await response).status==404){
        document.querySelector(".error").style.display="block"; //calling error massage
        document.querySelector(".weather").style.display="none";
    }


    //adding weather conditios
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";

    //checking the weather status
    if(data.weather[0].main=="Clouds"){
        weatherImage.src="./public/images/clouds.png";

    }
    else if (data.weather[0].main=="Clear"){
        weatherImage.src ="./public/images/clear.png";
    }
    else if (data.weather[0].main=="Drizzle"){
        weatherImage.src ="./public/images/drizzle.png";
    }
    else if (data.weather[0].main=="Mist"){
        weatherImage.src ="./public/images/mist.png";
    }
    else if (data.weather[0].main=="Rain"){
        weatherImage.src ="./public/images/rain.png";
    }
    else if (data.weather[0].main=="Snow"){
        weatherImage.src ="./public/images/snow.png";
    }

    document.querySelector(".weather").style.display="block"
}
//response to the search click and call the weather function
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})





