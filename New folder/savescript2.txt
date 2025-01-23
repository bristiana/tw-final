document.addEventListener('DOMContentLoaded', function () {
  let places = [
    {
      id: 'berlin',
      name: 'Berlin',
      image: 'poza1.webp',
      description:
        'The capital of Germany, famous for landmarks such as the Brandenburg Gate, Museum Island, and the iconic TV Tower.',
    },

    {
      id: 'bamberg',
      name: 'Bamberg Old Town',
      image: 'bamberg.webp',
      description:
        'A UNESCO World Heritage city in Bavaria, known for its medieval architecture and charming canals.',
    },

    {
      id: 'brandenburg',
      name: 'Brandenburg Gate',
      image: 'gate.webp',
      description:
        'An iconic neoclassical monument in Berlin, symbolizing unity and peace in Germany.',
    },

    {
      id: 'BurgEltzCastle',
      name: 'Burg Eltz Castle',
      image: 'Burg Eltz Castle.webp',
      description:
        'A well-preserved medieval castle in the Moselle Valley, surrounded by lush forests and rich history.',
    },

    {
      id: 'BlackForest',
      name: 'Black Forest',
      image: 'blackforest.webp',
      description:
        'A scenic region in Germany where the Danube River originates, known for its dense forests and charming villages.',
    },

    {
      id: 'BMW',
      name: 'BMW Museum',
      image: 'BMW_museum.webp',
      description:
        'Located in Munich, showcasing the history and innovations of BMW with iconic cars and futuristic exhibits.',
    },
    {
      id: 'munich',
      name: 'Munich',
      image: 'poza4.webp',
      description:
        'Munich, the capital of Bavaria, is famous for its Marienplatz square, beer gardens, and annual Oktoberfest celebration.',
    },
    {
      id: 'legoland',
      name: 'LEGOLAND Germany',
      image: 'lego.webp',
      description:
        'An exciting theme park in Bavaria featuring LEGO-themed attractions and rides for all ages.',
    },
    {
      id: 'frankfurt',
      name: 'Frankfurt',
      image: 'Frankfurt.webp',
      description:
        'A major financial hub in Germany, known for its impressive skyline and the European Central Bank.',
    },
  ];

  // Funcție pentru amestecarea aleatorie a array-ului (Fisher-Yates Shuffle)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  // Amestecă locațiile și selectează doar 4 aleatoriu
  let shuffledPlaces = shuffleArray(places).slice(0, 6);

  let placesContainer = document.getElementById('places-container');
  placesContainer.innerHTML = ''; // Șterge conținutul existent dacă există

  shuffledPlaces.forEach(place => {
    let placeCard = document.createElement('div');
    placeCard.classList.add('place-card');

    let placeImg = document.createElement('img');
    placeImg.src = place.image;
    placeImg.alt = place.name;

    let placeInfo = document.createElement('div');
    placeInfo.classList.add('place-info');

    let placeTitle = document.createElement('h3');
    placeTitle.textContent = place.name;

    let placeDesc = document.createElement('p');
    placeDesc.textContent = place.description;

    placeInfo.appendChild(placeTitle);
    placeInfo.appendChild(placeDesc);
    placeCard.appendChild(placeImg);
    placeCard.appendChild(placeInfo);

    placesContainer.appendChild(placeCard);
  });
});
////////////////////////////set interval///////////////////
document.addEventListener('DOMContentLoaded', function () {
  // Lista cu imagini
  const images = ['poza3.webp', 'poza33.webp'];

  // Selectează elementul imagine
  const imageElement = document.getElementById('changing-image');

  // Funcție pentru a selecta o imagine aleatorie
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  // Funcție pentru schimbarea imaginii la fiecare 5 secunde
  setInterval(() => {
    imageElement.src = getRandomImage();
  }, 5000);
});

//////////////////////////////////////////////////////////
///////////////////////////////////////stergere cu html///////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
  let element = document.querySelector('.hero.section-places');
  if (element) {
    element.remove();
  }
});

/////////////////modificare stil (culoarea de la butoane)//////////////////////////

document.addEventListener('DOMContentLoaded', function () {
  let travelButton = document.querySelector('.button.button-start');
  let dropButton = document.querySelector('.dropbtn');

  if (travelButton && dropButton) {
    travelButton.style.backgroundColor = '#074707';
    travelButton.style.color = '#fff'; // culoare text

    dropButton.style.backgroundColor = '#074707';
    dropButton.style.color = '#fff';
  } else {
    console.error('nu merge');
  }
});

//////////////////////////////////////////
////////////////////////modificare al apasarea tastei 'r'//////////////////////
document.addEventListener('keydown', function (event) {
  if (event.key === 'r' || event.key === 'R') {
    let heading = document.querySelector('h2'); // Selectează primul <h2> din pagină
    heading.style.color = heading.style.color === 'red' ? 'black' : 'red';
  }
});
////////////////////////////////////////////////////
/////////////////asta e partea de la script.js    smoothscrooling                                                                                                                        /////////////////////////////////////////////
const smoothLinks = document.querySelectorAll('a.smooth-scroll');

smoothLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    // Scroll la alte secțiuni
    else if (href.startsWith('#')) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/////////////////////////////////

///////////////////////////////////////////////////////
// sticky navigation as soon as the hero section is no longer visible
const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
  },

  {
    ///in the viewporrt
    root: null, // Obs fata de viewport
    rootMargin: '-80px',
    threshold: 0.1, // Declansez cand 10% din element iese din viewport
  }
);

obs.observe(sectionHeroEl);

/////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('subscribeForm');
  const formMessage = document.getElementById('formMessage');

  function validateForm(firstName, lastName, phone, email) {
    const namePattern = /^[A-Za-z\s]{3,}$/;
    const phonePattern = /^\+?[0-9]{7,15}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
      alert('Invalid name. Only letters allowed.');
      return false;
    }
    if (!phonePattern.test(phone)) {
      alert('Invalid phone number.');
      return false;
    }
    if (!emailPattern.test(email)) {
      alert('Invalid email format.');
      return false;
    }
    return true;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!validateForm(firstName, lastName, phone, email)) {
      return;
    }

    const formData = { firstName, lastName, phone, email };
    localStorage.setItem('subscriptionData', JSON.stringify(formData));

    formMessage.textContent = 'You have successfully subscribed!';
    formMessage.style.color = 'green';
  });
});

//////////////////////////////////
