import './bootstrap';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Ensure Swiper initializes correctly
document.addEventListener("DOMContentLoaded", function () {
    const tl = gsap.timeline();

    // Background Overlay (fade-in)
    tl.from(".hero-overlay", {
        opacity: 0,
        scale: 1.1,
        duration: 1.2,
        ease: "power2.out"
    });

    // Headline (slide-up + letter spacing effect)
    tl.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=0.8").to(".hero-title", {
        letterSpacing: "2px",
        duration: 1,
        ease: "power2.out"
    }, "-=1");

    // Subtext (fade-in)
    tl.from(".hero-subtext", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out"
    }, "-=0.8");

    // Key Features (staggered slide-in)
    tl.from(".hero-feature", {
        x: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    }, "-=0.6");

   // Ensure the button exists before animating
gsap.from(".hero-cta", {
    scale: 0.5,
    opacity: 0,
    y: 20,
    duration: 1.5,
    ease: "elastic.out(1, 0.5)",
    delay: 0.5,  // Delay ensures GSAP doesn't animate before it's loaded
});




    // tl.from(".hero-cta", {
    //     scale: 0.5,
    //     opacity: 1,
    //     y: 20,
    //     duration: 1.5,
    //     ease: "elastic.out(1, 0.5)",
    //     delay: 0.5
    // });




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
