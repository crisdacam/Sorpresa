let currentPanel = 1;

function nextPanel() {
  document.getElementById(`panel${currentPanel}`).classList.remove("visible");
  currentPanel++;
  if (currentPanel <= 4) {
    document.getElementById(`panel${currentPanel}`).classList.add("visible");
  } else {
    document.getElementById("nextBtn").style.display = "none";
  }
}

function revealSurprise() {
  document.getElementById("surprisePopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("surprisePopup").style.display = "none";
}
