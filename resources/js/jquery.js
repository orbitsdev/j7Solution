document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY > 50;
        navbar.classList.toggle("bg-white", scrolled);
        navbar.classList.toggle("text-black", scrolled);
        navbar.classList.toggle("shadow-lg", scrolled);
        navbar.classList.toggle("bg-blue-900", !scrolled);
        navbar.classList.toggle("text-white", !scrolled);
    });
});
