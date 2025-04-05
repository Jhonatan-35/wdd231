



function openModal(id) {
    let modal = document.getElementById(id);
    if (modal) {
        modal.classList.add("show");
    }
}

function closeModal(id) {
    let modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove("show");
    }
}


window.onclick = function (event) {
    document.querySelectorAll(".modal").forEach((modal) => {
      if (event.target === modal) {
        modal.classList.remove("show");
      }
    });
  };
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("timestamp").value = new Date().toISOString();
    document.getElementById("currentyear").textContent = new Date().getFullYear();
  });