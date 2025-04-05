const visitsDisplay = document.querySelector('.timeBetween');

let numVisits = Number(window.localStorage.getItem("timeBetween"));

//This is where I believe I need to get the days between visits
//Something like:

const visitDifference = "pastvisit" - Date.now();

localStorage.setItem("timeBetween", visitDifference);