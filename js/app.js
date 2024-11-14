const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle')


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu')
    })
}


function scrollHeader() {
    const header = document.getElementById('header')

    if (this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)




const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: true,
})

sr.reveal(`.track__title, .track__description, .sponsor__content, .tracking__img-one, .join__title, .join .app_btn, .target__img-one, .footer__rights, .track__box-item, .join__img`,{
    origin: 'top',
    interval: 100,
})
sr.reveal(`.home__data-title, .home__data-subtitle, .button, .tracking__title, .tracking__description, .tracking .app_btn`,{
    origin: 'left',
})
sr.reveal(`.home__img, .target__title, .target__description, .target .app_btn, .track__description-item`,{
    origin: 'right',
    interval: 100,
})


/** IntersectionObserver API */

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.05 // Trigger the callback when 10% of the element is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-visible");
                observer.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    }, observerOptions);
  
    // Select all elements to observe
    const elementsToObserve = document.querySelectorAll(".fade-in");
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
  });