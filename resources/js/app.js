import './bootstrap';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Ensure animations and Swiper initialize correctly
document.addEventListener("DOMContentLoaded", function () {


     /** ✅ HERO SECTION (Starts on page load, ends when scrolling down) **/
     gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top 20%",
            endTrigger: ".about-section",
            end: "top 50%",
            toggleActions: "play reverse play none",
        }
    })
    .from(".hero-overlay", { opacity: 0,  duration: 1, ease: "power3.out" })
    .from(".hero-title", { y: 20, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.6")
    .from(".hero-subtext", { opacity: 0, y: 10, duration: 0.8, ease: "power3.out" }, "-=0.6")
    .from(".hero-feature", { x: -15, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.5")
    .from(".hero-cta", { scale: 0.9, opacity: 0, y: 5, duration: 0.8, ease: "elastic.out(1, 0.6)" });

    /** ✅ ABOUT SECTION (Less bounce, more smoothness) **/
    gsap.timeline({
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 85%",
            endTrigger: ".services",
            end: "top 50%",
            toggleActions: "play none none reverse",
        }
    })
    .from(".about-heading", { x: -20, opacity: 0, duration: 0.8, ease: "power3.out" })
    .from(".about-title", { opacity: 0, duration: 1, ease: "power3.out" }, "-=0.6")
    .from(".about-text", { opacity: 0, y: 15, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.6");

    gsap.timeline({
        scrollTrigger: {
            trigger: ".about-years-container",
            start: "top 85%",
            endTrigger: ".services",
            end: "top 50%",
            toggleActions: "play none reverse none",
        }
    })
    .from(".about-years", { scale: 0.8, opacity: 0, duration: 1, ease: "power3.out" })
    .from(".about-years-sub", { y: 15, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
    .from(".about-years-desc", { y: 10, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4");

    /** ✅ SERVICES SECTION (Cleaner appearance, professional transition) **/
    gsap.timeline({
        scrollTrigger: {
            trigger: ".services",
            start: "top 85%",
            endTrigger: ".multimedia-services",
            end: "top 50%",
            toggleActions: "play none none reverse",
        }
    })
    .from(".services h3", { x: -15, opacity: 0, duration: 0.6, ease: "power3.out" })
    .from(".services h2", { y: 15, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
    .from(".services p", { opacity: 0, y: 10, duration: 0.6, stagger: 0.2, ease: "power3.out" }, "-=0.6")
    .from(".service-imgae", { scale: 0.98, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
    .from(".we-focus", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.5")
    .from(".cards > div", { x: 20, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.4");

    /** ✅ MULTIMEDIA SERVICES SECTION (More elegant card animations) **/
    gsap.timeline({
        scrollTrigger: {
            trigger: ".multimedia-services",
            start: "top 85%",
            endTrigger: ".projects",
            end: "top 50%",
            toggleActions: "play none none reverse",
        }
    })
    .from(".multimedia-services h2", { y: 20, opacity: 0, duration: 1, ease: "power3.out" })
    .from(".multimedia-image", { scale: 0.98, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.8")
    .from(".multimedia-services p", { opacity: 0, y: 10, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.6")
    .from(".multimedia-services .bg-gradient-to-r", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.5")
    .fromTo(".multi-cards > div",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
        "-=0.3"
    );

    /** ✅ PROJECTS SECTION (More natural fading & scaling) **/
    gsap.timeline({
        scrollTrigger: {
            trigger: ".projects",
            start: "top 80%",
            endTrigger: ".contact-form",
            end: "top 50%",
            toggleActions: "play none none reverse",
        }
    })
    .from(".projects h2", { y: 20, opacity: 0, duration: 1, ease: "power3.out" })
    .from(".projects .swiper-slide", { scale: 0.95, opacity: 0, duration: 1, stagger: 0.3, ease: "power3.out" }, "-=0.8");

    /** ✅ CONTACT FORM (Encouraging engagement) **/
    gsap.timeline({
        scrollTrigger: {
            trigger: ".contact-form",
            start: "top 80%",
            endTrigger: ".footer",
            end: "top 50%",
            toggleActions: "play none none reverse",
        }
    })
    .from(".contact-form h2", { y: 20, opacity: 0, duration: 1, ease: "power3.out" })
    .from(".contact-form form", { opacity: 0, y: 10, duration: 1, stagger: 0.2, ease: "power3.out" }, "-=0.8");



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
