document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
let oLastModif = new Date(document.lastModified);
let text = document.lastModified; document.getElementById("demo").innerHTML = text;

document.addEventListener("DOMContentLoaded", () => {
  // hamburger menu
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navigation");

  menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      menuBtn.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", () => {
  // Get the current page URL (removing extra parameters)
  const currentPage = window.location.pathname.split("/").pop();

  // Select all navigation links
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
      const linkPage = link.getAttribute("href").split("/").pop();

      // Compare link with current page and set active class
      if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
          link.classList.add("active");
      } else {
          link.classList.remove("active"); // Ensure inactive pages do not stay highlighted
      }
  });

  // Hamburger Menu Toggle
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navigation");

  menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      menuBtn.classList.toggle("open");
  });
});
});
