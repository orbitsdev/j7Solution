import './bootstrap';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Ensure Swiper initializes correctly
document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        effect: "coverflow", // More engaging effect
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
