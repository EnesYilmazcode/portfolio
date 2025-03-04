const fonts = [
  'a', // Font A
  'b', // Font B
  'c', // Font C
  'd', // Font D
  'e', // Font E
  'f', // Font F
  'g', // Font G
  'h', // Font H
  'i', // Font I
  'j', // Font J
  'k', // Font K
  'l', // Font L
  'm', // Font M
  'n', // Font N
  'o'  // Font O
];

const letters = document.querySelectorAll('.letter');

let count = 0;
let timeElapsed = 0; // Track the time elapsed
const initialDelay = 100; // Initial delay in milliseconds
const decayFactor = 0.1; // Increment time for decay

const rollIntro = () => {
  letters.forEach(letter => {
      let randomFontIndex = Math.floor(Math.random() * fonts.length);
      let randomFont = fonts[randomFontIndex];
      letter.style.fontFamily = randomFont;
  });
  
  // Calculate the delay using the exponential decay function
  const delay = Math.exp(-timeElapsed) * 1000; // Scale to milliseconds

  // Use the initial delay for the first few swaps
  const finalDelay = timeElapsed < 1 ? initialDelay : Math.max(delay, 200); // Use initial delay for the first second

  // Increment timeElapsed for the next call
  timeElapsed += decayFactor; // Increment time (you can adjust this value for faster/slower decay)

  // Schedule the next font swap
  if (timeElapsed < 2) { // Limit the timeElapsed to prevent too long of a delay
      setTimeout(rollIntro, finalDelay);
  }
};

// Start the animation
rollIntro();

// Fade out the black overlay after 0.5 seconds
setTimeout(() => {
    const blackOverlay = document.getElementById('blackOverlay');
    blackOverlay.style.opacity = '0'; // Start fading out
}, 500); // Wait for 0.5 seconds

// Optionally, remove the overlay from the DOM after the fade-out
setTimeout(() => {
    const blackOverlay = document.getElementById('blackOverlay');
    blackOverlay.style.display = 'none'; // Remove from view
}, 1000); // Wait for the fade-out to complete

// Toggle dropdown menu
const gearIcon = document.getElementById('gearIcon');
const dropdownMenu = document.getElementById('dropdownMenu');

gearIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show'); // Use class to control visibility
});

// Close dropdown when clicking outside
window.addEventListener('click', (event) => {
    if (!gearIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show'); // Hide dropdown
    }
});