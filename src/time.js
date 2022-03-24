const today = new Date();
const hours = today.getHours();
const minutes = today.getMinutes();

const textTime = document.querySelector(".middle__time--container");
textTime.innerHTML = `${hours}:${minutes}`;
