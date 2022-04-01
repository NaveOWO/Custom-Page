const user = document.querySelector(".nameText");
const nameContain = document.querySelector(".middle__name--container");

function writeName() {
  const userName = user.value;
  if (userName) {
    const continueName = document.createElement("div");
    continueName.setAttribute("id", "tempName");
    const deleteInput = document.getElementById("nameText");
    nameContain.appendChild(continueName);
    continueName.textContent = userName;
    continueName.className = "continueName";
    document.getElementById("nameText").style.display = "none";
    document.getElementById("editBtn").style.display = "block";
    document.getElementById("editIcon").style.display = "block";
  }
}

function editName() {
  const editBtn = document.querySelector(".editBtn");
  editBtn.addEventListener("click", changeName);
}

function changeName(e) {
  e.preventDefault();
  document.getElementById("nameText").style.display = "block";
  console.log("ok2");
  document.getElementById("editBtn").style.display = "none";
  document.getElementById("editIcon").style.display = "none";
  const tempDiv = document.getElementById("tempName");
  tempDiv.remove();
}

editName();
