import './bootstrap';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Ensure animations and Swiper initialize correctly
document.addEventListener("DOMContentLoaded", function () {

    /** ✅ HERO SECTION ANIMATION (Plays when in view) **/
    gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top 85%",
            toggleActions: "play none none reverse",
        }
    })
        .from(".hero-overlay", { opacity: 0, scale: 1.1, duration: 1.2, ease: "power2.out" })
        .from(".hero-title", { y: 50, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.8")
        .to(".hero-title", { letterSpacing: "2px", duration: 1, ease: "power2.out" }, "-=1")
        .from(".hero-subtext", { opacity: 0, y: 30, duration: 1, ease: "power2.out" }, "-=0.8")
        .from(".hero-feature", { x: -30, opacity: 0, duration: 1, stagger: 0.2, ease: "power2.out" }, "-=0.6")
        .from(".hero-cta", { scale: 0.5, opacity: 0, y: 20, duration: 1.5, ease: "elastic.out(1, 0.5)", delay: 0.3 });


    /** ✅ ABOUT US SECTION ANIMATION (Triggers on Scroll) **/
    /** ✅ ABOUT US SECTION ANIMATION (Triggers on Scroll) **/
gsap.timeline({
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 85%",   // Starts when the section is 85% in view
        toggleActions: "play none none reverse", // Reverses when scrolling back up
    }
})
    .from(".about-heading", { x: -40, opacity: 0, duration: 1, ease: "power2.out" })
    .from(".about-title", { letterSpacing: "0.95px", y: 40, opacity: 0, duration: 1.2, ease: "power2.out" }, "-=0.8")
    .to(".about-title", {  duration: 1, ease: "power2.out" }, "-=1")
    .from(".about-text", { opacity: 0, y: 20, duration: 1, stagger: 0.3, ease: "power2.out" }, "-=0.8");


/** ✅ YEARS OF EXPERIENCE ANIMATION **/
gsap.timeline({
    scrollTrigger: {
        trigger: ".about-years-container",
        start: "top 85%",   // Animates when this section comes into view
        toggleActions: "play none none reverse", // Reverses when scrolling out
    }
})
    .from(".about-years", { scale: 0.8, opacity: 0, duration: 1.2, ease: "power2.out" }, "-=0.8")
    .from(".about-years-sub", { x: 40, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.8")
    .from(".about-years-desc", { opacity: 0, y: 10, duration: 1, ease: "power2.out" }, "-=0.5")
    .to(".about-years", { textContent: 10, duration: 1.5, snap: { textContent: 1 }, ease: "power2.out" });




    /** ✅ SWIPER SETUP **/
    new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        effect: "coverflow",
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
