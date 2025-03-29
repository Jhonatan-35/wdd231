document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
let oLastModif = new Date(document.lastModified);
let text = document.lastModified; document.getElementById("demo").innerHTML = text;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});
document.addEventListener("DOMContentLoaded", () => {

  const params = new URLSearchParams(window.location.search);
  

  const firstname = params.get("name");
  const lastname = params.get("lname");
  const datebirth = params.get("date");
  const email = params.get("email");
  const phone = params.get("phone");
  const business = params.get("business");
  const timestamp = params.get("timestamp");

 
  document.getElementById("user-name").textContent = firstname;
  document.getElementById("first-name").textContent = firstname;
  document.getElementById("last-name").textContent = lastname;
  document.getElementById("Date").textContent = datebirth;
  document.getElementById("email").textContent = email;
  document.getElementById("phone").textContent = phone;
  document.getElementById("business-name").textContent = business;
  document.getElementById("timestamp").textContent = new Date(timestamp).toLocaleString();
});