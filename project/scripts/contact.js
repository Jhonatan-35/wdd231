document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
let oLastModif = new Date(document.lastModified);
let text = document.lastModified; document.getElementById("demo").innerHTML = text;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});
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
    document.querySelectorAll(".marvel").forEach((modal) => {
      if (event.target === modal) {
        modal.classList.remove("show");
      }
    });
  };
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("timestamp").value = new Date().toISOString();
    document.getElementById("currentyear").textContent = new Date().getFullYear();
  });

  const aside = document.getElementById ("currenly-visited");
const lastVisit = localStorage.getItem("lastVisit");
const currentTime = Date.now();

    if (!lastVisit) {
    aside.textContent = "Welcome to our website.";
    } else {
    const diffTime = currentTime - Number(lastVisit);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 1) {
        aside.textContent = "Thank you for visited our webpage";
    } else if (diffDays === 1) {
        aside.textContent = "You last visited 1 day ago.";
    } else {
        aside.textContent = `You last visited ${diffDays} days ago.`;
    }
    }

localStorage.setItem("lastVisit", currentTime);