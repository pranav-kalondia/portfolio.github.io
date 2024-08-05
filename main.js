
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".carousel-container").forEach((carouselContainer) => {
      let carousel = carouselContainer.querySelector(".carousel");
      let items = carousel.querySelectorAll(".item");
      let dotsContainer = carouselContainer.querySelector(".dots");

      // Insert dots into the DOM
      items.forEach((_, index) => {
          let dot = document.createElement("span");
          dot.classList.add("dot");
          if (index === 0) dot.classList.add("active");
          dot.dataset.index = index;
          dotsContainer.appendChild(dot);
      });

      let dots = dotsContainer.querySelectorAll(".dot");

      // Function to show a specific item
      function showItem(index) {
          items.forEach((item, idx) => {
              item.classList.remove("active");
              dots[idx].classList.remove("active");
              if (idx === index) {
                  item.classList.add("active");
                  dots[idx].classList.add("active");
              }
          });
      }

      // Event listeners for buttons
      carouselContainer.querySelector(".prev").addEventListener("click", () => {
          let index = [...items].findIndex((item) =>
              item.classList.contains("active")
          );
          showItem((index - 1 + items.length) % items.length);
      });

      carouselContainer.querySelector(".next").addEventListener("click", () => {
          let index = [...items].findIndex((item) =>
              item.classList.contains("active")
          );
          showItem((index + 1) % items.length);
      });

      // Event listeners for dots
      dots.forEach((dot) => {
          dot.addEventListener("click", () => {
              let index = parseInt(dot.dataset.index);
              showItem(index);
          });
      });
  });
});


/*===== MENU SHOW =====*/ 

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 10,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text ',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img, #work, .heading ,.casestudy',{delay: 100}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .contact__input, #name, #message, #email ,#contact__button,#Experience,para1',{interval: 100}); 

const dynamicText = document.querySelector(".home_domain span");
const words = ["Developer", "Designer"];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

const left = document.querySelector(`.back`);
const right = document.querySelector(`.forward`);
const slider = document.querySelector(`.uiux`);

slider.addEventListener(  'wheel', (evt) => {
    evt.preventDefault();
    slider.scrollLeft += evt.deltaY;
});

right.addEventListener(`click`, ()=>{
   slider.scrollLeft += 1000;
})
left.addEventListener('click',()=>{
    slider.scrollLeft -= 1000;
})


const leftW = document.querySelector(`.backW`);
const rightW = document.querySelector(`.forwardW`);
const sliderW = document.querySelector(`.uiuxW`);

sliderW.addEventListener(  'wheel', (evt) => {
    evt.preventDefault();
    sliderW.scrollLeft += evt.deltaY;
});

rightW.addEventListener(`click`, ()=>{
   sliderW.scrollLeft += 1000;
})
leftW.addEventListener('click',()=>{
    sliderW.scrollLeft -= 1000;
})








