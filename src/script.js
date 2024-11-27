document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".menu-toggle");
    const header = document.querySelector("header");

    toggleButton.addEventListener("click", () => {
        header.classList.toggle("nav-open");
    });

    const navLinks = document.querySelectorAll("header nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            header.classList.remove("nav-open");
        });
    });
});
