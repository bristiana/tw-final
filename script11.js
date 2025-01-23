///////////////////////////////////////////////////////////
// 1. Smooth Scrolling Animation (Deja Bifat)
const allLinks = document.querySelectorAll('a');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

///////////////////////////////////////////////////////////
// 2. Sticky Navigation (Deja Bifat)
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
    root: null,
    rootMargin: '-80px',
    threshold: 0.1,
  }
);

obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// 3. Creare si Stergere Elemente HTML
const addButton = document.createElement('button');
addButton.textContent = 'Adaugă Element';
addButton.classList.add('button');
document.body.appendChild(addButton);

addButton.addEventListener('click', function () {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'Element nou creat!';
  newDiv.classList.add('new-element');
  document.body.appendChild(newDiv);

  setTimeout(() => {
    newDiv.remove();
  }, 5000);
});

///////////////////////////////////////////////////////////
// 4. Input Funcțional și Validare cu RegEx
const form = document.querySelector('.new-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const emailInput = document.querySelector('#email').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailInput)) {
    alert('Email valid!');
  } else {
    alert('Email invalid!');
  }
});

///////////////////////////////////////////////////////////
// 5. localStorage pentru salvarea datelor
const saveButton = document.createElement('button');
saveButton.textContent = 'Salvează Date';
saveButton.classList.add('button');
document.body.appendChild(saveButton);

saveButton.addEventListener('click', function () {
  const data = {
    user: 'Student TW',
    date: new Date().toLocaleString(),
  };
  localStorage.setItem('userData', JSON.stringify(data));
  alert('Date salvate!');
});

///////////////////////////////////////////////////////////
// 6. Schimbare Aleatoare a Culoarei de Fundal
setInterval(function () {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33'];
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
}, 10000);

///////////////////////////////////////////////////////////
// 7. Cerere AJAX cu Fetch API
fetch('data.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error('Eroare la preluare JSON:', err));

///////////////////////////////////////////////////////////
// 8. Eveniment stopPropagation
const parentDiv = document.createElement('div');
parentDiv.textContent = 'Click aici (Parent)';
parentDiv.style.backgroundColor = '#ccc';
parentDiv.style.padding = '20px';
document.body.appendChild(parentDiv);

const childDiv = document.createElement('div');
childDiv.textContent = 'Click aici (Child)';
childDiv.style.backgroundColor = '#999';
childDiv.style.padding = '10px';
parentDiv.appendChild(childDiv);

childDiv.addEventListener('click', function (e) {
  e.stopPropagation();
  alert('Click pe copil!');
});

parentDiv.addEventListener('click', function () {
  alert('Click pe părinte!');
});
