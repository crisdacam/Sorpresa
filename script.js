let currentPanel = 1;

function nextPanel() {
  document.getElementById(`panel${currentPanel}`).classList.remove("visible");
  currentPanel++;

  if (currentPanel <= 4) {
    document.getElementById(`panel${currentPanel}`).classList.add("visible");
  } else {
    // Al dar clic en “Siguiente” después de la escena 4, mostrar el popup
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("surprisePopup").style.display = "flex";
  }
}
