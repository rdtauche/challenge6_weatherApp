// DOM Reference Elements
var button = document.querySelector(".button");
var input = document.querySelector(".input");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");

// Add event listener on search button
button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q=charlotte&units=metric&appid=0f6ad76ad64b1605608ad88589bd9c16')
  .then(response => response.json())
  .then(
    displayData)
    .catch(err => alert('Wrong City'));
  })


  
// Function to diplay weather on html document
const displayData=(weather)=>{
  temp.innerText=`${weather.main.temp}°C`
  desc.innerText=`${weather.weather[0].main}`

}

