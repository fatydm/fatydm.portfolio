document.addEventListener('DOMContentLoaded', () => {

//===================================
// ANIMATION DU TEXTE (Typing effect)
// ==================================
document.addEventListener('DOMContentLoaded', function() {
    const texts = [
    'dev full-stack',
    'en reconversion',
    'prête à en apprendre plus',
    'ouverte d\'esprit',
    'toujours motivée'
];
let index = 0;

const textAnimate = document.querySelector('.dynamic-text');

const showNextText = () => {
    if (textAnimate) {
        
        textAnimate.textContent = texts[index];
        index = (index + 1) % texts.length;
        
        textAnimate.style.animation = 'none';
        setTimeout(() => {
            textAnimate.style.animation = '';
        }, 10);
    }
};

showNextText();

setInterval(showNextText, 5000);
});

// ========================
// GESTION DU MENU MOBILE
// ========================
let menuIcon = document.getElementById('menu');
let closeIcon = document.getElementById('close');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


menuIcon.addEventListener('click', () => {
    navbar.style.display = 'block'
    menuIcon.style.display = 'none'
    closeIcon.style.display = 'block'
})

closeIcon.addEventListener('click', () => {
    navbar.style.display = 'none'
    closeIcon.style.display = 'none'
    menuIcon.style.display = 'block'
})

// ========================
// FORMULAIRE DE CONTACT
// ========================
const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => data[key] = value);
            const response = await fetch("https://formspree.io/f/xvgaadee", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                alert("Message envoyé !");
                form.reset();
            } else {
                alert("Erreur lors de l'envoi.");
            }
        });
    }

// ========================
// SWITCH LIGHT/DARK
// ========================
// const light = document.querySelector('.lightBtn')
// const dark = document.querySelector('.darkBtn')
// const imgColor = document.querySelector('.photo_color')
// const imgBlack = document.querySelector('.photo_black')

// light.addEventListener('click', () => {
//     const body = document.body

//     if (body.classList.contains('dark')) {
//         body.classList.add('light')
//         body.classList.remove('dark')
//         light.style.display = 'none'
//         dark.style.display = 'flex'
//         imgBlack.style.display = 'none'
//         imgColor.style.display = 'flex'
//     }
// })

// dark.addEventListener('click', () => {

//     const body = document.body

//     if (body.classList.contains('light')) {

//         body.classList.add('dark')
//         body.classList.remove('light')
//         dark.style.display = 'none'
//         light.style.display = 'flex'
//         imgBlack.style.display = 'flex'
//         imgColor.style.display = 'none'
//     }
// })

const light = document.querySelector('.lightBtn')
const dark = document.querySelector('.darkBtn')

console.log('light trouvé :', light)
console.log('dark trouvé :', dark)

light?.addEventListener('click', () => {
    console.log('click light !')
    document.body.classList.replace('dark', 'light')
})

dark?.addEventListener('click', () => {
    console.log('click dark !')
    document.body.classList.replace('light', 'dark')
});

})