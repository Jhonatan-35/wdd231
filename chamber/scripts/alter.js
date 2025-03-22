document.getElementById("copyright-year").innerHTML = new Date().getFullYear();
let oLastModif = new Date(document.lastModified);
let text = document.lastModified; document.getElementById("demo").innerHTML = text;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});


const url = 'data/members.json'; 
const cardContainer = document.querySelector('.Business');

async function getBusinesses() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();

    console.log("All Members:", data.members); 

  
    const eligibleBusinesses = data.members.filter(business => 
      business.membership_level === 3 || business.membership_level === 2
    );

    console.log("Choices Members:", eligibleBusinesses);

    if (eligibleBusinesses.length === 0) {
      console.warn("Member elegible Silver or gold!");
      return;
    }

    const cardBusinesses = getRandomBusinesses(eligibleBusinesses, Math.floor(Math.random() * 1) + 2);
    
    console.log("Member Achive Bussiness spotligh:", cardBusinesses); 

    displayCard(cardBusinesses);
  } catch (error) {
    console.error('Wrong:', error);
  }
}


function getRandomBusinesses(businesses, count) {
  let selected = [];
  let available = [...businesses];

  while (selected.length < count && available.length > 0) {
    let randomIndex = Math.floor(Math.random() * available.length);
    selected.push(...available.splice(randomIndex, 1));
  }
  return selected;
}


function displayCard(businesses) {
  if (!businesses || businesses.length === 0) {
      console.warn("Business don't fount.");
      return;
  }

  if (!cardContainer) {
      console.error("Wrong: .business don't wrong.");
      return;
  }

  cardContainer.innerHTML = '<h2>Visit our Business Riobamba Spotlights</h2>'; 

  businesses.forEach((business) => {
      const card = document.createElement('div');
      card.classList.add('card');

      const img = document.createElement('img');
      img.src = `images/${business.image}`;
      img.alt = `${business.name} logo`;
      img.loading = 'lazy';

      const name = document.createElement('h3');
      name.textContent = business.name;

      const address = document.createElement('p');
      address.textContent = `${business.address}`;

      const phone = document.createElement('p');
      phone.textContent = `${business.phone}`;

      const membership = document.createElement('p');
      membership.textContent = `Membership Level: ${business.membership_level === 3 ? "Siver" : "Gold"}`;

      const website = document.createElement('a');
      website.href = business.website;
      website.target = '_blank';
      website.textContent = website;

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(membership);
      card.appendChild(website);

      cardContainer.appendChild(card);
  });
}


getBusinesses();
displayCard();