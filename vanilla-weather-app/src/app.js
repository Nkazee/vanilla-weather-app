function showTemperature(response) {
  console.log(response.data);
  let descriptionElement = document.querySelector("#description");
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let speedElement = document.querySelector("#speed");
  let cityElement = document.querySelector("#city");
  descriptionElement.innerHTML = response.data.weather[0].description;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = response.data.main.humidity;
  speedElement.innerHTML = Math.round(response.data.wind.speed);
  cityElement.innerHTML = response.data.name;
}

let apiKey = "ee9f98438ce01b9f7ae2c52f40add8ae";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Bloemfontein&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(showTemperature);
