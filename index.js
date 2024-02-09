// require('dotenv').config()

const apiKey = "d91979d1744a51bcb3caa02b66dded93"

const searchButton= ()=>{


const cityName = document.getElementById("cityNames");
const getCity = cityName.value;
if(cityName){
    
    document.getElementById("postCity").innerHTML= getCity;
}else{
    document.getElementById("postCity").innerHTML= "Gurgaon";
}
const urlIs = `https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=${apiKey}&units=metric`

fetch(urlIs)
.then(response => {
        // Check if the request was successful (status code 2xx)
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        // Parse the response body as JSON
        return response.json();
      })
      .then(data => {
        // Handle the data from the response
        const gotData = data;
        const currentTem= Math.round(gotData.main.temp)
        const humidity = gotData.main.humidity
        const windSpeed = gotData.wind.speed+ 6.4
        document.getElementById("currentTemp").innerHTML= currentTem+"°C";
        document.getElementById("humidityPercent").innerText=humidity +"%";
        document.getElementById("windSpeed").innerHTML = windSpeed+" km/h"

      })
      .catch(error => {
        // Handle errors that may occur during the fetch operation
        console.error('Fetch error:', error);
      });
}

const onStarts =()=> {

 const getCity = "Gurgaon"
 document.getElementById("postCity").innerHTML= getCity;

const urlIs = `https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=${apiKey}&units=metric`

fetch(urlIs)
.then(response => {
        // Check if the request was successful (status code 2xx)
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        // Parse the response body as JSON
        return response.json();
      })
      .then(data => {
        // Handle the data from the response
        const gotData = data;
        const currentTem= Math.round(gotData.main.temp)
        const humidity = gotData.main.humidity
        const windSpeed = gotData.wind.speed 
        document.getElementById("currentTemp").innerHTML= currentTem+"°C";
        document.getElementById("humidityPercent").innerText=humidity +"%";
        document.getElementById("windSpeed").innerHTML = windSpeed+" km/h"

      })
      .catch(error => {
        // Handle errors that may occur during the fetch operation
        console.error('Fetch error:', error);
      });
}

