let apikey = "51993776f68964b570514918390e046c"
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let searchinput = document.querySelector(".searchbox input")
let searchbutton = document.querySelector(".searchbox button")
let weatherimage = document.querySelector(".sun")




searchbutton.addEventListener("click",()=>{
    weatherupdate(searchinput.value);
})

async function weatherupdate(location)
{
    const response = await fetch(apiurl +location+`&appid=${apikey}`);
    
    if (response.status== 404)
    {  document.querySelector(".error404").style.display="block"
        document.querySelector(".info").style.display="none"
        document.querySelector("footer").style.display="block"
    }
    else if (response.status == 400)
    {
        document.querySelector(".error404").style.display="block"
        document.querySelector(".info").style.display="none"
        document.querySelector("footer").style.display="block"
    }
    else
    {  
        var data = await response.json();

    
    document.querySelector(".location").innerHTML= data.name;
    document.querySelector(".celsius").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector(".wind").innerHTML =`${data.wind.speed} km/h`;
    document.querySelector(".Humidity").innerHTML=`${data.main.humidity} %`;
    document.querySelector("p.addon").innerHTML=`Windspeed`;
    document.querySelector("p.addon1").innerHTML=`Humidity`;
    document.querySelector(".windy").src="images/anemometer2.png"
    document.querySelector(".humid").src="images/humidity1.png"
    document.querySelector(".info").style.display="flex"
    document.querySelector(".error404").style.display="none"
    document.querySelector("footer").style.display="block"
    
    
    if (data.weather[0].main == 'Clouds'){
        weatherimage.src = "images/cloudy.png"
    }
    else if(data.weather[0].main == 'Clear'){
        weatherimage.src = "images/sun.png"
    }
    else if(data.weather[0].main == 'Rain'){
        weatherimage.src = "images/rainy.png"
    }
    else if(data.weather[0].main == 'Mist'){
        weatherimage.src = "images/foggy.png"
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherimage.src = "images/drizzle.png.png"
    }
    

    }
  

}