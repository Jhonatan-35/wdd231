const aside = document.getElementById("visitor-message");
const lastVisit = localStorage.getItem("lastVisit");
const currentTime = Date.now();

    if (!lastVisit) {
    aside.textContent = "Welcome! Let us know if you have any questions.";
    } else {
    const diffTime = currentTime - Number(lastVisit);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 1) {
        aside.textContent = "Back so soon! Awesome!";
    } else if (diffDays === 1) {
        aside.textContent = "You last visited 1 day ago.";
    } else {
        aside.textContent = `You last visited ${diffDays} days ago.`;
    }
    }

localStorage.setItem("lastVisit", currentTime);