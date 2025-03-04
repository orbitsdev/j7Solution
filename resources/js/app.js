import './bootstrap';


import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Initialize Swiper

document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // ❌ Remove navigation completely
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        //     disabledClass: 'disabled_swiper_button'
        // },

        effect: "creative",
        creativeEffect: {
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
        },
    });
});
