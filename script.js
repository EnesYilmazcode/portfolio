const fonts = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'
];

const letters = document.querySelectorAll('.letter');
const gearIcon = document.getElementById('gearIcon');
const dropdownMenu = document.getElementById('dropdownMenu');

let count = 0;
let jitterCount = 0;

const rollIntro = () => {
    letters.forEach(letter => {
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
        letter.style.fontFamily = randomFont;
    });
};

const jitterLetters = () => {
    letters.forEach((letter, index) => {
        const shiftX = Math.floor(Math.random() * 9) - 4;
        const shiftY = Math.floor(Math.random() * 9) - 4;

        // Check if the letter is "S" and apply scaling and left translation
        if (letter.textContent === 'Sasd') {
            letter.style.transform = `translate(${shiftX - 35}px, ${shiftY}px) scale(0.8)`;
        } else {
            letter.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
        }
    });
};

const introAnimation = setInterval(() => {
    rollIntro();
    if (count >= 10) {
        clearInterval(introAnimation);
        letters[0].style.fontFamily = 'f';
        letters[1].style.fontFamily = 'e';
        letters[2].style.fontFamily = 'b';
        letters[3].style.fontFamily = 'o';

        const jitterAnimation = setInterval(() => {
            jitterLetters();
            if (jitterCount >= 50) {
                clearInterval(jitterAnimation);
                letters.forEach((letter, index) => {
                    if (letter.textContent === 'Sasd') {
                        letter.style.transform = 'translate(-35%, 0) scale(0.8)';
                    } else {
                        letter.style.transform = 'translate(0, 0)';
                    }
                });
            }
            jitterCount++;
        }, 400);
    }
    count++;
}, 350);

// Black Overlay Fade
setTimeout(() => {
    const blackOverlay = document.getElementById('blackOverlay');
    blackOverlay.style.opacity = '0';
    setTimeout(() => blackOverlay.style.display = 'none', 500);
}, 500);

// Gear Icon and Dropdown
gearIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

window.addEventListener('click', (event) => {
    if (!gearIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});

// Start Animation
rollIntro();

// Cursor Glow
