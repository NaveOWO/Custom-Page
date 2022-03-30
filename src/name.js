const user = document.querySelector(".nameText");
const nameContain = document.querySelector(".middle__name--container");

function writeName() {
  const userName = user.value;
  if (userName) {
    const continueName = document.createElement("div");
    const deleteInput = document.getElementById("nameText");
    nameContain.appendChild(continueName);
    continueName.textContent = userName;
    continueName.className = "continueName";
    document.getElementById("nameText").style.display = "none";
    document.getElementById("editBtn").style.display = "block";
    document.getElementById("editIcon").style.display = "block";
  }
}

function editName(click) {
  const editBtn = document.querySelector(".editBtn");
  editBtn.addEventListener("click", changeName);
  console.log("ok");
}

function changeName(e) {
  console.log("no");
}

editName();
