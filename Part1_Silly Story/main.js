/*
  Filename: main.js
  Author: Gurinder Singh
  Date: 2025-08-01
  Description: 
    This JavaScript code powers the Random Story Generator. 
    It replaces placeholders in a story template with random selections,
    updates units based on user preference, and displays the result.
*/

// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const insertX = [
  'Willy the Goblin',
  'Big Daddy',
  'Father Christmas'
];

const insertY = [
  'the soup kitchen',
  'Disneyland',
  'the White House'
];

const insertZ = [
  'spontaneously combusted',
  'melted into a puddle on the sidewalk',
  'turned into a slug and crawled away'
];

// 3. EVENT LISTENER AND FULL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {}
  let newStory = storyText;

  // Pick random phrases
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // Replace placeholders with random phrases
  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  // Replace "Bob" with custom name if entered
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  // Convert units if UK checkbox is checked
  if (document.getElementById('uk').checked) {
    const weight = Math.round(300 * 0.071429) + ' stone'; // pounds to stone
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade'; // F to C

    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  // Display the story and make it visible
  story.textContent = newStory;
  story.style.visibility = 'visible';
  story.style.color = 'orange';           
  story.style.backgroundColor = 'orange'; 
  story.style.padding = '10px';           
  story.style.borderRadius = '5px';        
