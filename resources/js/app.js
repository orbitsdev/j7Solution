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
    .from(".hero-overlay", { opacity: 0, duration: 0.5, ease: "power2.out" })
    .from(".hero-title", { y: 15, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
    .from(".hero-subtext", { opacity: 0, y: 10, duration: 0.5, ease: "power2.out" }, "-=0.3")
    .from(".hero-feature", { x: -10, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.3")
    .from(".hero-cta", { scale: 0.95, opacity: 0, y: 3, duration: 0.6, ease: "elastic.out(1, 0.5)" });

    /** ✅ ABOUT SECTION (Faster entrance) **/
    gsap.timeline({
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 85%",
            endTrigger: ".services",
            end: "top 50%",
            toggleActions: "play none none reverse",
        }
    })
    .from(".about-heading", { x: -15, opacity: 0, duration: 0.5, ease: "power2.out" })
    .from(".about-title", { opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
    .from(".about-text", { opacity: 0, y: 10, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.3");

    /** ✅ SERVICES SECTION (Professional & quick) **/
    gsap.timeline({
        scrollTrigger: {
            trigger: ".services",
            start: "top 85%",
            endTrigger: ".multimedia-services",
            end: "top 50%",
            toggleActions: "play none none reverse",
        }
    })
    .from(".services h3", { x: -10, opacity: 0, duration: 0.4, ease: "power2.out" })
    .from(".services h2", { y: 10, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
    .from(".services p", { opacity: 0, y: 8, duration: 0.4, stagger: 0.1, ease: "power2.out" }, "-=0.3")
    .from(".service-imgae", { scale: 0.99, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
    .from(".we-focus", { y: 15, opacity: 0, duration: 0.4, ease: "power2.out" }, "-=0.3")
    .from(".cards > div", { x: 15, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.3");

    /** ✅ SYSTEM INTEGRATION SECTION (Refined & faster) **/
    gsap.timeline({
        scrollTrigger: {
            trigger: ".system-integration",
            start: "top 85%",
            endTrigger: ".projects",
            end: "top 50%",
            toggleActions: "play none none reverse",
        }
    })
    .from(".system-integration h3", { x: -10, opacity: 0, duration: 0.4, ease: "power2.out" })
    .from(".system-integration h2", { y: 10, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
    .from(".system-integration p", { opacity: 0, y: 8, duration: 0.4, stagger: 0.1, ease: "power2.out" }, "-=0.3")
    .from(".integration-images img", { scale: 0.99, opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.3")
    .from(".we-focus", { y: 15, opacity: 0, duration: 0.4, ease: "power2.out" }, "-=0.3")
    .from(".integration-cards > div", { x: 15, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.3");

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
    .from(".projects h2", { y: 10, opacity: 0, duration: 0.6, ease: "power2.out" })
    .from(".projects .swiper-slide", { scale: 0.97, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }, "-=0.4");

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
    .from(".contact-form h2", { y: 15, opacity: 0, duration: 0.6, ease: "power2.out" })
    .from(".contact-form form", { opacity: 0, y: 8, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.4");



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
