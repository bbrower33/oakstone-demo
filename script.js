document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("mobile-open");
        });
    }


    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("mobile-open");
        });
    });


    const quoteForm = document.querySelector(".quote-form");

    if (quoteForm) {
        quoteForm.addEventListener("submit", (event) => {

            event.preventDefault();

            alert(
                "Thanks! This demo form is ready to be connected to a real quote system."
            );

        });
    }

});