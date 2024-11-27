window.addEventListener("scroll", () => {
    const navbar = document.querySelector("[navbar-scroll]"); // Correct selector for attribute

    console.log("happy");

    if (window.scrollY > 80) {
        navbar.classList.add("solid-nav");
    } else {
        navbar.classList.remove("solid-nav");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Scroll functions for specific containers
    function scrollLeft(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (container) {
            container.scrollBy({ left: -200, behavior: 'smooth' });
        } else {
            console.error(`Container not found: ${containerSelector}`);
        }
    }

    function scrollRight(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (container) {
            container.scrollBy({ left: 200, behavior: 'smooth' });
        } else {
            console.error(`Container not found: ${containerSelector}`);
        }
    }

    // Attach event listeners for Ghee collection
    document.querySelector('[ghee-scroll-left]').addEventListener('click', function () {
        scrollLeft('[ghee-container]');
    });

    document.querySelector('[ghee-scroll-right]').addEventListener('click', function () {
        scrollRight('[ghee-container]');
    });

    // Attach event listeners for Soap collection
    document.querySelector('[soap-scroll-left]').addEventListener('click', function () {
        scrollLeft('[soap-container] .product-container');
    });

    document.querySelector('[soap-scroll-right]').addEventListener('click', function () {
        scrollRight('[soap-container] .product-container');
    });
    // Attach event listeners for testimonial collection
    document.querySelector('[testimonial-scroll-left]').addEventListener('click', function () {
        scrollLeft('[testimonial-container] ');
    });

    document.querySelector('[testimonial-scroll-right]').addEventListener('click', function () {
        scrollRight('[testimonial-container] ');
    });
});

// hamburger code:
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Array of image URLs
const images = [
    "/assets/finalghee_transparent.png",
    "/assets/finalsoap_transparent.png"
];

let currentIndex = 0;

const imageElement = document.getElementById("changing-image");

function changeImage() {
    // Fade out
    imageElement.classList.add("hidden");

    setTimeout(() => {
        // Change the image source
        currentIndex = (currentIndex + 1) % images.length; // Loop back to start
        imageElement.src = images[currentIndex];

        // Fade back in
        imageElement.classList.remove("hidden");
    }, 500); // Match this to CSS transition duration
}

// Change image every 3 seconds
setInterval(changeImage, 5000);