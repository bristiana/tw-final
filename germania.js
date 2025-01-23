// document.addEventListener('DOMContentLoaded', function () {
//   let places = [
//     {
//       id: 'berlin',
//       name: 'Berlin',
//       image: 'poza1.webp',
//       description:
//         'The capital of Germany, known for its rich history and vibrant culture.',
//     },
//     {
//       id: 'munich',
//       name: 'Munich',
//       image: 'poza2.webp',
//       description:
//         'Famous for Oktoberfest and stunning architecture in Bavaria.',
//     },
//     {
//       id: 'hamburg',
//       name: 'Hamburg',
//       image: 'poza3.webp',
//       description:
//         'A major port city with beautiful canals and historic landmarks.',
//     },
//     {
//       id: 'neuschwanstein',
//       name: 'Neuschwanstein Castle',
//       image: 'poza4.webp',
//       description:
//         'A fairy-tale castle nestled in the Bavarian Alps, inspiration for Disney.',
//     },
//   ];

//   let placeContainer = document.getElementById('place-container');

//   places.forEach(place => {
//     let placeDiv = document.createElement('div');
//     placeDiv.classList.add('place');

//     let placeImg = document.createElement('img');
//     placeImg.src = place.image;
//     placeImg.alt = place.name;

//     let placeTitle = document.createElement('div');
//     placeTitle.classList.add('place-title');
//     placeTitle.textContent = place.name;

//     let placeDesc = document.createElement('div');
//     placeDesc.classList.add('place-description');
//     placeDesc.textContent = place.description;

//     placeDiv.appendChild(placeImg);
//     placeDiv.appendChild(placeTitle);
//     placeDiv.appendChild(placeDesc);

//     placeContainer.appendChild(placeDiv);
//   });
// });
document.addEventListener('DOMContentLoaded', function () {
  let places = [
    {
      id: 'berlin',
      name: 'Berlin',
      image: 'poza1.webp',
      description:
        'The capital of Germany, known for its rich history and vibrant culture.',
    },
    {
      id: 'munich',
      name: 'Munich',
      image: 'poza2.webp',
      description:
        'Famous for Oktoberfest and stunning architecture in Bavaria.',
    },
    {
      id: 'hamburg',
      name: 'Hamburg',
      image: 'poza3.webp',
      description:
        'A major port city with beautiful canals and historic landmarks.',
    },
    {
      id: 'neuschwanstein',
      name: 'Neuschwanstein Castle',
      image: 'poza4.webp',
      description:
        'A fairy-tale castle nestled in the Bavarian Alps, inspiration for Disney.',
    },
  ];

  // Funcție pentru amestecarea aleatorie a array-ului
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Amestecă locurile înainte de a le afișa
  let shuffledPlaces = shuffleArray(places);

  let placeContainer = document.getElementById('place-container');

  shuffledPlaces.forEach(place => {
    let placeDiv = document.createElement('div');
    placeDiv.classList.add('place');

    let placeImg = document.createElement('img');
    placeImg.src = place.image;
    placeImg.alt = place.name;
    placeImg.setAttribute('loading', 'lazy'); // Lazy loading pentru imagini

    let placeTitle = document.createElement('div');
    placeTitle.classList.add('place-title');
    placeTitle.textContent = place.name;

    let placeDesc = document.createElement('div');
    placeDesc.classList.add('place-description');
    placeDesc.textContent = place.description;

    placeDiv.appendChild(placeImg);
    placeDiv.appendChild(placeTitle);
    placeDiv.appendChild(placeDesc);

    placeContainer.appendChild(placeDiv);
  });
});
