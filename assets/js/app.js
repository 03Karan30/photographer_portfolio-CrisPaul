//! === ADD HEADER STYLES ON SCROLL ===
const headerScroll = () => {
    const headerElement = document.querySelector('.header');
    this.scrollY >= 30 ? headerElement.classList.add('active') : headerElement.classList.remove('active');
}
window.addEventListener('scroll' , headerScroll);

//! === OPEN AND CLOSE THE MENU ON HAMBURGER ICON CLICK ===
const menuToggler = document.querySelector('#menu-toggler');
const navbarMenu = document.querySelector('.navbar_menu');
const toggleMenu = () => {
    navbarMenu.classList.toggle('active');
}
menuToggler.addEventListener('click' , toggleMenu);

// --- CLOSE MENU WHEN NAV-LINKS ARE CLICKED ---
const linksTooggleMenu = (e) => {
    if(e.target.classList.contains('navbar_list-link')) navbarMenu.classList.remove('active');
}
window.addEventListener('click' , linksTooggleMenu);

//! === SWIPER ===
const swiper = new Swiper('.myswiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    },
    pagination: {
        el: '.swiper-pagination'
    }
});

//! === SCROLL REVEAL ===
const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
});

sr.reveal('.showcase_title, .showcase_image, .section-metadata, .swiper', {
    origin: 'top',
    interval: 250
}
);

sr.reveal('.services_image-wrapper, .about_information, .post--left', {
    origin: 'left',
}
);

sr.reveal('.services_list, .about_images, .post--right', {
    origin: 'right',
}
);

sr.reveal('.footer_container',{
    origin: 'top'
});