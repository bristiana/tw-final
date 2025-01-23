///////////////////////////////////////////////////////////
// smooth scrolling animation

// const allLinks = document.querySelectorAll('a');

// allLinks.forEach(function (link) {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const href = link.getAttribute('href');

//     // Scroll back to top

//     if (href === '#')
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       });

//     // Scroll to other links
//     if (href !== '#' && href.startsWith('#')) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });
// Selectez DOAR linkurile cu clasa 'smooth-scroll'
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
