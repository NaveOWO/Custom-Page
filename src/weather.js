const apiId = "5bc237fd1f9840c10e6355ebdc9aef89";

navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  getWeather(coordsObj);
}

function error(error) {
  console.log(error);
}

function getWeather(coordsObj) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordsObj.latitude}&lon=${coordsObj.longitude}&appid=${apiId}`
  )
    .then((response) => response.json())
    .then((json) => createWeather(json))
    .catch((error) => console.log(error));
}

function createWeather(weather) {
  const textTemp = document.querySelector(".header__weather--temperature");
  const textName = document.querySelector(".header__weather--location");
  const temp = weather.main.temp;
  const name = weather.name;
  textTemp.innerText = `${temp}℃`;
  textName.innerHTML = name;
}
