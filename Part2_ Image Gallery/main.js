/*
  Filename: main.js
  Author: Gurinder Singh
  Date: 2025-08-01
  Description: 
    Creates thumbnails, updates main image on click, and toggles dark/light overlay.
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = [
  'pic1.jpg',
  'pic2.jpg',
  'pic3.jpg',
  'pic4.jpg',
  'pic5.jpg'
];

/* Declaring the alternative text for each image file */
const altTexts = {
  'pic1.jpg': 'Closeup of a human eye',
  'pic2.jpg': 'Rock that looks like a wave',
  'pic3.jpg': 'Purple and white pansies',
  'pic4.jpg': 'Section of wall from a pharaoh’s tomb',
  'pic5.jpg': 'Large moth on a leaf'
};

/* Looping through images */
for (let i = 0; i < imageFilenames.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${imageFilenames[i]}`);
  newImage.setAttribute('alt', altTexts[imageFilenames[i]]);
  thumbBar.appendChild(newImage);

  // Event listener to change displayed image
  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', `images/${imageFilenames[i]}`);
    displayedImage.setAttribute('alt', altTexts[imageFilenames[i]]);
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const currentClass = btn.getAttribute('class');
  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});
