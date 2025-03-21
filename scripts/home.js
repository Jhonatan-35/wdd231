document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
let oLastModif = new Date(document.lastModified);
let text = document.lastModified; document.getElementById("demo").innerHTML = text;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});

const coursesbyu = [
  { code: "CSE 110", namecourse: "Intro to Programming", finished: true },
  { code: "WDD 130", namecourse: "Web Fundamentals", finished: true },
  { code: "CSE 111", namecourse: "Programming Principles", finished: true },
  { code: "CSE 210", namecourse: "Programming with Classes", finished: true },
  { code: "WDD 131", namecourse: "Web Development I", finished: true },
  { code: "WDD 231", namecourse: "Frontend Development", completed: false }
];

const courseNames = document.getElementById("courseNames");

function displayCourses(filter = "all") {
  courseNames.innerHTML = "";
  let filteredCourses = coursesbyu;

  if (filter === "CSE") {
      filteredCourses = coursesbyu.filter(c => c.code.startsWith("CSE"));
  } else if (filter === "WDD") {
      filteredCourses = coursesbyu.filter(c => c.code.startsWith("WDD"));
  }

  filteredCourses.forEach(course => {
      const courseDiv = document.createElement("div");
      courseDiv.className = course.finished ? "course-byu finished" : "course-byu not-finished";
      courseDiv.textContent = `${course.code}`;
      courseNames.appendChild(courseDiv);
  });
  const TotalCredits = filteredCourses.length * 3; 
  document.getElementById("creditTotal").textContent = `Total Credits: ${TotalCredits}`;
}


document.getElementById("showallcourse").addEventListener("click", () => displayCourses("all"));
document.getElementById("showcsecourses").addEventListener("click", () => displayCourses("CSE"));
document.getElementById("showwddcourses").addEventListener("click", () => displayCourses("WDD"));

displayCourses();

