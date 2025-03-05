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
            start: "top 20%",  // Start immediately when page loads
            endTrigger: ".about-section", // End when about-section starts
            end: "top 50%",  // Ends animation when hero is halfway out
            toggleActions: "play reverse play none",
            markers:true,

        }
    })
    .from(".hero-overlay", { opacity: 0, scale: 1.05, duration: 0.8, ease: "power2.out" })
    .from(".hero-title", { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
    .to(".hero-title", { letterSpacing: "1.5px", duration: 0.6, ease: "power2.out" }, "-=0.8")
    .from(".hero-subtext", { opacity: 0, y: 20, duration: 0.8, ease: "power2.out" }, "-=0.6")
    .from(".hero-feature", { x: -20, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power2.out" }, "-=0.5")
    .from(".hero-cta", { scale: 0.8, opacity: 0, y: 10, duration: 1, ease: "elastic.out(1, 0.5)", delay: 0 });


    /** ✅ ABOUT SECTION (Starts when hero ends) **/
    gsap.timeline({
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",   // Start animation when about section enters view
            endTrigger: ".services", // Ends when services section starts
            end: "top 50%",
            toggleActions: "play none none reverse",
        }
    })
    .from(".about-heading", { x: -40, opacity: 0, duration: 1, ease: "power2.out" })
    .from(".about-title", {  letterSpacing: "1.5px", opacity: 0, duration: 1.2, ease: "power2.out" }, "-=0.8")
    .to(".about-title", { duration: 1, ease: "power2.out" }, "-=1")
    .from(".about-text", { opacity: 0, y: 20, duration: 1, stagger: 0.3, ease: "power2.out" }, "-=0.8");

    gsap.timeline({
        scrollTrigger: {
            trigger: ".about-years-container",
            start: "top 85%",   // Animates when this section comes into view
            endTrigger: ".services-container",  // Ends when services section begins
            end: "top 50%",
            toggleActions: "play none reverse none",
        }
    })
        .from(".about-years", {
            scale: 0.5,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        })
        .from(".about-years-sub", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.5") // Start slightly earlier
        .from(".about-years-desc", {
            y: 10,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.4");



    /** ✅ SERVICES SECTION (Starts when about ends) **/
    gsap.timeline({
        scrollTrigger: {
            trigger: ".services",
            start: "top 85%",  // ✅ Starts slightly before entering view
            endTrigger: ".multimedia-services", // ✅ Ends before multimedia services start
            end: "top 50%",
            toggleActions: "play none none reverse",
        }
    })
    .from(".services h3", { x: -20, opacity: 0, duration: 0.6, ease: "power2.out" })
    .from(".services h2", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
    .from(".services p", { opacity: 0, y: 15, duration: 0.6, stagger: 0.2, ease: "power2.out" }, "-=0.6")

    // ✅ Image Animation (Snappier)
    .from(".service-imgae", {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.6")

    // ✅ Blue Box Animation (Smooth Slide-up)
    .from(".we-focus", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.5")

    // ✅ Service Cards Animation (Staggered for Smooth Effect)
    .from(".cards > div", {
        x: 30,  // ✅ Cards slide in from right
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,  // ✅ Stagger effect for better flow
        ease: "power2.out"
    }, "-=0.4");



    /** ✅ MULTIMEDIA SERVICES SECTION (Starts when services ends) **/
    gsap.timeline({
        scrollTrigger: {
            trigger: ".multimedia-services",
            start: "top 85%",
            endTrigger: ".projects",
            end: "top 50%",
            toggleActions: "play none none reverse",
        }
    })
    .from(".multimedia-services h2", { y: 30, opacity: 0, duration: 1, ease: "power2.out" })
    .from(".multimedia-image", { scale: 0.95, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.8")
    .from(".multimedia-services p", { opacity: 0, y: 20, duration: 0.8, stagger: 0.2, ease: "power2.out" }, "-=0.6")
    .from(".multimedia-services .bg-gradient-to-r", { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.5")

    // ✅ Make .multi-cards container appear smoothly before animating items
    .from(".multi-cards", { opacity: 0, y: 20, duration: 0.6, ease: "power2.out" })

    // ✅ Animate each card with a slight delay for smoother transition
    .from(".multi-cards > div", {
        y: 40,
        duration: 0.8,
        stagger: 0.15, // ✅ Reduced stagger for faster flow
        ease: "power2.out"
    }, "-=0.3");






    /** ✅ PROJECTS SECTION (Starts when multimedia services ends) **/
    gsap.timeline({
        scrollTrigger: {
            trigger: ".projects",
            start: "top 80%",
            endTrigger: ".contact-form",
            end: "top 50%",
            toggleActions: "play none none reverse",
        }
    })
    .from(".projects h2", { y: 30, opacity: 0, duration: 1.2, ease: "power2.out" })
    .from(".projects .swiper-slide", { scale: 0.9, opacity: 0, duration: 1, stagger: 0.3, ease: "power2.out" }, "-=0.8");


    /** ✅ CONTACT FORM SECTION (Starts when projects ends) **/
    gsap.timeline({
        scrollTrigger: {
            trigger: ".contact-form",
            start: "top 80%",
            endTrigger: ".footer",
            end: "top 50%",
            toggleActions: "play none none reverse",
        }
    })
    .from(".contact-form h2", { y: 30, opacity: 0, duration: 1, ease: "power2.out" })
    .from(".contact-form form", { opacity: 0, y: 20, duration: 1, stagger: 0.3, ease: "power2.out" }, "-=0.8");




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
