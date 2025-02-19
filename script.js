document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const sections = document.querySelectorAll("section");

    menuButton.addEventListener("click", function () {
        dropdownMenu.classList.toggle("hidden");
    });

    function navigate(sectionId) {
        sections.forEach(section => section.classList.add("hidden"));
        document.getElementById(sectionId).classList.remove("hidden");
        dropdownMenu.classList.add("hidden");
    }

    // Gallery Slider
    let currentIndex = 0;
    const images = document.querySelectorAll(".slider img");

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
    }

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000);

    showImage(currentIndex);

    // Testimonial Carousel
    let testimonialIndex = 0;
    const testimonials = document.querySelectorAll(".testimonial");

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? "block" : "none";
        });
    }

    setInterval(() => {
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
        showTestimonial(testimonialIndex);
    }, 4000);

    showTestimonial(testimonialIndex);
});
