// DOM Reference Elements
var button = document.querySelector(".button");
var input = document.querySelector(".inputValue");
var name1 = document.querySelector(".name");
var lat = document.querySelector(".lat");
var lon = document.querySelector(".lon");
var tempF = document.querySelector(".tempF");
var humidity = document.querySelector(".humidity");
var wind = document.querySelector(".wind");
var apiRootUrl = 'https://api.openweathermap.org';
var apiKey = '0f6ad76ad64b1605608ad88589bd9c16';

 // listener for city search and display lat/lon/name
button.addEventListener('click', function(){
  var apiUrl = `${apiRootUrl}/geo/1.0/direct?q=${input.value}&limit=5&appid=${apiKey}`;
  fetch(apiUrl)
  .then(function (res) {
    return res.json();
  })
  .then(displayData1)
    .catch(function(err){
      alert(err,"Wrong City")
  })
});

// Function to diplay lat/lon/name on html document
function displayData1(weather) {
  name1.innerText=`${weather[0].name}`
  lat.innerText=`${"Latitude = " + weather[0].lat}`
  lon.innerText=`${"Longitude = " + weather[0].lon}`
};


// DOESNT WORK YET - trying to get temp, humidity, wind
button.addEventListener('click', function(){
  var apiUrl = `${apiRootUrl}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  fetch(apiUrl)
  .then(function (res) {
    return res.json();
  })
  .then(displayData2)
  console.log(displayData2)
    .catch(function(err){
      alert(err,"Wrong City")
  })
});

// Function to diplay temp, humidity, wind on html document
function displayData2(weather) {
  tempF.innerText= `${weather[0].temp}`
  humidity.innerText= `${weather[0].humidity}`
  wind.innerText= `${weather[0].speed}`
};

