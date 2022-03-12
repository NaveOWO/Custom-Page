// ver1
// const query = document.querySelector('.query');
// const searchBtn = document.querySelector('.material-icons');
// searchBtn.onclick = function() {
//   const url = 'https://www.google.com/search?q='+query.value;
//   window.open(url);
// }

// ver2
const queryText = document.querySelector(".input-container");
const inputText = document.querySelector(".input-box");

function search() {
  queryText.addEventListener("submit", searchResult);
}

function searchResult(event) {
  event.preventDefault();
  const url = "https://www.google.com/search?q=" + inputText.value;
  window.open(url);
}

search();
