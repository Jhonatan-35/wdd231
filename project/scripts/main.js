const url = 'data/places.json'; 
const cardContainer = document.querySelector('.Placeschimborazo');

async function getPlaces() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();

    console.log("All places:", data.places); 

  
    const eligiblePlaces = data.places.filter(places => 
      places.sport === 3 || places.sport === 2
    );

    console.log("Choices sports:", eligiblePlaces);

    if (eligiblePlaces.length === 0) {
      console.warn("Choice sport hike or camping!");
      return;
    }

    const cardPlaces = getRandomPlaces(eligiblePlaces, Math.floor(Math.random() * 1) + 2);
    
    console.log("Choice Your Favorite  sport:", cardPlaces); 

    displayCard(cardPlaces);
  } catch (error) {
    console.error('Wrong:', error);
  }
}


function getRandomPlaces(places, count) {
  let selected = [];
  let available = [...places];

  while (selected.length < count && available.length > 0) {
    let randomIndex = Math.floor(Math.random() * available.length);
    selected.push(...available.splice(randomIndex, 1));
  }
  return selected;
}


function displayCard(places) {
  if (!places || places.length === 0) {
      console.warn("Places don't fount.");
      return;
  }

  if (!cardContainer) {
      console.error("Error: .Places don't wrong.");
      return;
  }

  cardContainer.innerHTML = ''; 

  places.forEach((places) => {
      const card = document.createElement('div');
      card.classList.add('card');

      const img = document.createElement('img');
      img.src = `images/${places.image}`;
      img.alt = `${places.name} logo`;
      img.loading = 'lazy';

      const name = document.createElement('h3');
      name.textContent = places.name;

      const address = document.createElement('p');
      address.textContent = `${places.address}`;

      const phone = document.createElement('p');
      phone.textContent = `${places.phone}`;

      const sport = document.createElement('p');
      sport.textContent = `sport: ${places.sport === 3 ? "Hike" : "Camping"}`;

      const website = document.createElement('a');
      website.href = places.website;
      website.target = '_blank';
      website.textContent = website;

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(sport);
      card.appendChild(website);

      cardContainer.appendChild(card);
  });
}


getPlaces();
displayCard();