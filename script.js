const textElement = document.getElementById('animatedText');
const textArray = ["Graphic Designer", "Assistant Chemist", "Youtuber"];
let textIndex = 0;

function changeText() {
    textElement.textContent = textArray[textIndex];
    textIndex = (textIndex + 1) % textArray.length;
}

setInterval(changeText, 4000);

document.querySelectorAll('.experiences-box').forEach(box => {
    box.addEventListener('touchstart', () => {
        box.classList.add('hover');
    });
    box.addEventListener('touchend', () => {
        box.classList.remove('hover');
    });
});

const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    const dots = parseInt(elem.getAttribute("data-dots"), 10);
    const marked = parseInt(elem.getAttribute("data-percent"), 10);
    const percent = Math.floor(dots * marked / 100);
    let points = "";
    const rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});


const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('header nav a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navlinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href').includes(id));
            });
        }
    });
}, { threshold: 0.7 });

sections.forEach(section => observer.observe(section));

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    });
});