// DOM Reference Elements
var button = document.querySelector(".button");
var input = document.querySelector(".inputValue");
var name1 = document.querySelector(".name");
var lat = document.querySelector(".lat");
var lon = document.querySelector(".lon");
var tempF = document.querySelector(".tempF");
var humidity = document.querySelector(".humidity");
var wind = document.querySelector(".wind");
// Array below is empty so i can push stuff inside it - square bracket indicates array
var weatherData = [];
var apiRootUrl = "https://api.openweathermap.org";
var apiKey = "0f6ad76ad64b1605608ad88589bd9c16";

// listener for city search and display lat/lon/name
button.addEventListener("click", function () {
  event.preventDefault();

  var apiUrl = `${apiRootUrl}/geo/1.0/direct?q=${input.value}&limit=5&appid=${apiKey}`;
  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(displayData1);

  // stores the search in local storage
  var searchHistory = {
    input: input.value.trim(),
  };
  // .push adds objects to end of array
  weatherData.push(searchHistory);
  localStorage.setItem("searchHistory", JSON.stringify(weatherData));
  renderMessage();
});
// displays the local storage on UI
localStorage.clear();
function renderMessage() {
  // **add something here to clear previous searches**
  var lastSearch = JSON.parse(localStorage.getItem("searchHistory"));
  if (lastSearch !== null) {
    document.querySelector(".message").textContent = lastSearch.input;
    for (var i = 0; i < lastSearch.length; i++) {
      var todo = weatherData[i].input;
      var button = document.createElement("button");
      button.classList.add('button');
      button.textContent = todo;
      button.setAttribute("data-index", i);
      document.getElementById("previousSearches").appendChild(button);
    }
  }
}

// Function to diplay lat/lon/name on html document
function displayData1(weather) {
  // RT: display day.js todays date
  var today = dayjs();
  $("#day").text(today.format("MMM D, YYYY"));
  console.log(weather);
  var apiUrl = `${apiRootUrl}/data/2.5/forecast?lat=${weather[0].lat}&lon=${weather[0].lon}&appid=${apiKey}&units=imperial`;
  name1.innerText = `${weather[0].name}`;
  lat.innerText = `${"Latitude = " + weather[0].lat}`;
  lon.innerText = `${"Longitude = " + weather[0].lon}`;
  fetch(apiUrl)
    .then(function (res) {
      return res.json();
    })
    .then(displayData2);
  console.log(displayData2);
}

function displayData2(weather) {
  console.log(weather);
  tempF.innerText = `${"Temperature F = " + weather.list[0].main.temp}`;
  humidity.innerText = `${"Humidity = " + weather.list[0].main.humidity}`;
  wind.innerText = `${"Wind Speed = " + weather.list[0].wind.speed}`;
}
