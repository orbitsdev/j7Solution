import './bootstrap';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';



// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Ensure animations and Swiper initialize correctly
document.addEventListener("DOMContentLoaded", function () {


    /** ✅ HERO SECTION (Smoother entrance from Y-axis) **/
gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top 20%",
        endTrigger: ".about-section",
        end: "top 50%",
        toggleActions: "play reverse play none",
    }
})
.from(".hero-overlay", { opacity: 0, duration: 0.8, ease: "power2.out" })
.from(".hero-title", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.3")
.from(".hero-subtext", { opacity: 0, y: 15, duration: 0.8, ease: "power2.out" }, "-=0.3")
.from(".hero-feature", { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.3")
.from(".hero-cta", { scale: 0.95, opacity: 0, y: 10, duration: 0.6, ease: "elastic.out(1, 0.8)" });

/** ✅ ABOUT SECTION (Smoother downward reveal) **/
gsap.timeline({
    scrollTrigger: {
        trigger: ".about-section",
        start: "top 85%",
        endTrigger: ".services",
        end: "top 50%",
        toggleActions: "play none none reverse",
    }
})
.from(".about-heading", { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" })
.from(".about-title", { opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
.from(".about-text", { opacity: 0, y: 15, duration: 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.3");

/** ✅ 10 YEARS OF EXPERIENCE SECTION (Restored & improved) **/
gsap.timeline({
    scrollTrigger: {
        trigger: ".about-years-container",
        start: "top 85%",
        endTrigger: ".services",
        end: "top 50%",
        toggleActions: "play none reverse none",
    }
})
.from(".about-years", { y: 20, scale: 0.9, opacity: 0, duration: 0.8, ease: "power2.out" })
.from(".about-years-sub", { y: 15, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
.from(".about-years-desc", { y: 15, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");

/** ✅ SERVICES SECTION (Smoother Y-axis reveal) **/
gsap.timeline({
    scrollTrigger: {
        trigger: ".services",
        start: "top 85%",
        endTrigger: ".multimedia-services",
        end: "top 50%",
        toggleActions: "play none none reverse",
    }
})
.from(".services h3", { y: 20, opacity: 0, duration: 0.4, ease: "power2.out" })
.from(".services h2", { y: 15, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.2")
.from(".services p", { opacity: 0, y: 15, duration: 0.4, stagger: 0.1, ease: "power2.out" }, "-=0.3")
.from(".service-images", { scale: 0.99, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.3")
.from(".services-we-focus", { y: 20, opacity: 0, duration: 0.4, ease: "power2.out" }, "-=0.3")
.from(".cards > div", { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.3");

/** ✅ SYSTEM INTEGRATION SECTION (Smoother downward movement) **/
gsap.timeline({
    scrollTrigger: {
        trigger: ".system-integration",
        start: "top 85%",
        endTrigger: ".projects",
        end: "top 50%",
        toggleActions: "play none none reverse",
    }
})
.from(".system-integration h3", { y: 20, opacity: 0, duration: 0.4, ease: "power2.out" })
.from(".system-integration h2", { y: 15, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.2")
.from(".system-integration p", { opacity: 0, y: 15, duration: 0.4, stagger: 0.1, ease: "power2.out" }, "-=0.3")
.from(".integration-images img", { scale: 0.99, opacity: 0, y: 10, duration: 0.8, ease: "power2.out" }, "-=0.3")
.from(".we-focus", { y: 20, opacity: 0, duration: 0.4, ease: "power2.out" }, "-=0.3")
.from(".integration-cards > div", { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.3");

/** ✅ PROJECTS SECTION (Consistent downward reveal) **/
gsap.timeline({
    scrollTrigger: {
        trigger: ".projects",
        start: "top 80%",
        endTrigger: ".contact-form",
        end: "top 50%",
        toggleActions: "play none none reverse",
    }
})
.from(".projects h2", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" })
.from(".projects .swiper-slide", { scale: 0.97, opacity: 0, y: 15, duration: 0.8, stagger: 0.2, ease: "power2.out" }, "-=0.4");

/** ✅ CONTACT FORM (Downward movement for engagement) **/
gsap.timeline({
    scrollTrigger: {
        trigger: ".contact-form",
        start: "top 80%",
        endTrigger: ".footer",
        end: "top 50%",
        toggleActions: "play none none reverse",
    }
})
.from(".contact-form h2", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" })
.from(".contact-form form", { opacity: 0, y: 15, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.4");




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
