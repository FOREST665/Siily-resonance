//part 1
/*let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();

let currentDay = document.querySelector("#current-date");
currentDay.innerHTML = `${day} ${hour}:${minutes}`;
//part2
function showCity(event) {
  event.preventDefault();

  let cityEntered = document.querySelector("#city-entered");
  let cityShown = document.querySelector("#city-shown");

  if (cityEntered === "null") {
    cityShown.innerHTML = "Montreal, Quebec";
  } else {
    cityShown.innerHTML = cityEntered.value;
  }
}
let month = month[now.getMonth()];
let date = now.getDate();

let li = document.querySelector("li");
li.innerHTML = `${day}, ${month} ${date} <br /> ${hours}:${minutes}`;
*/
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
//part 3

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let tempDipslay = `${temperature}`;
  let h2 = document.querySelector("#change");
  h2.innerHTML = tempDipslay;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
    searchCity(searchInput.value);
  }
}

function searchCity(city) {
  let apiKey = "afd2be167f88dd904bc213780db71233";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
