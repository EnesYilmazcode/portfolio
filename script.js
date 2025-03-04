const fonts = [
    'Kirang Haerang',
    'Indie Flower',
    'Rye',
    'Amatic SC',
    'Bangers',
    'Fredericka the Great'
  ];
  
  const letters = document.querySelectorAll('.letter');
  
  let count = 0;
  
  const rollIntro = () => {
    letters.forEach(letter => {
      let randomFontIndex = Math.floor(Math.random() * fonts.length);
      let randomFont = fonts[randomFontIndex];
      letter.style.fontFamily = randomFont;
    });
  };
  
  let introAnimation = setInterval(function() {
    rollIntro();
    if (count > 500) {
      clearInterval(introAnimation);
    }
    count++;
  }, 500);

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