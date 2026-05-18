// JavaScript code for the typing effect

const texts = [
    "Hi, I'm Thierry! </br><span class='parteAzul'> Back-End Developer. </span>" , 
    "Let's meet for a coffee!" , 
    "Click in 'Let's get in touch' </br><span class='parteAzul'> and send me a message!</span>"
];

const element = document.getElementById('typing');

let indexText = 0;
let indexLetter = 0;
let browser = false;

function efectMachine() {

    const actualText = texts[indexText]; 

    if (browser) {
        element.innerHTML = actualText.substring(0, indexLetter--);    
    }
    else {
        element.innerHTML = actualText.substring(0, indexLetter++);
    }

    let velocity = browser ? 50 : 100;

    if (!browser && indexLetter === actualText.length + 1) {

        velocity = 1500;
        browser = true;
    }
    else if (browser && indexLetter === 0) {

        browser = false;
        indexText++;

        if (indexText >= texts.length) {
            indexText = 0;
        }
    }

    setTimeout(efectMachine, velocity);
}

efectMachine();

// JavaScript code for the card flip effect

const cards = document.querySelectorAll('.card-p1, .card-p2, .card-p3, .card-p4');

cards.forEach(card => {
    const infoIcon = card.querySelector('.icon-info');

    infoIcon.addEventListener('click', (event) => {
        event.stopPropagation();  // Evita que o clique na info-icon clique também no card
        card.classList.toggle('flipped');
    });

    card.addEventListener('click', () => {
        if (card.classList.contains('flipped')) {
            card.classList.remove('flipped');
        }
    });
});

