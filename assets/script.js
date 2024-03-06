// DOM Reference Elements
var button = document.querySelector(".button");
var input = document.querySelector(".inputValue");
var name1 = document.querySelector(".name");
var lat = document.querySelector(".lat");
var lon = document.querySelector(".lon");
var apiRootUrl = 'http://api.openweathermap.org';
var apiKey = '0f6ad76ad64b1605608ad88589bd9c16';

  
button.addEventListener('click', function(){
  var apiUrl = `${apiRootUrl}/geo/1.0/direct?q=${input.value}&limit=5&appid=${apiKey}`;
  fetch(apiUrl)
  // .then(response => response.json())
  .then(function (res) {
    return res.json();
  })
  .then(displayData)
    .catch(function(err){
      alert(err,"Wrong City")
  })
});

// Function to diplay weather on html document
function displayData(weather) {
  name1.innerText=`${weather[0].name}`
  lat.innerText=`${"Latitude = " + weather[0].lat}`
  lon.innerText=`${"Longitude = " + weather[0].lon}`
};
