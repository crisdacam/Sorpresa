let currentPanel = 1;

function nextPanel() {
  document.getElementById(`panel${currentPanel}`).classList.remove("visible");
  currentPanel++;

  if (currentPanel <= 4) {
    document.getElementById(`panel${currentPanel}`).classList.add("visible");

    // Mostrar popup al llegar a la escena 4
    if (currentPanel === 4) {
      setTimeout(() => {
        document.getElementById("surprisePopup").style.display = "flex";
      }, 500); // Puedes ajustar el tiempo si quieres
    }

  } else {
    document.getElementById("nextBtn").style.display = "none";
  }
}
