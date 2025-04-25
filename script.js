document.addEventListener("DOMContentLoaded", () => {
    // Check if return button exists before adding event listener
    const returnButton = document.getElementById("returnButton");
    if (returnButton) {
        returnButton.addEventListener("click", () => {
            window.history.back();
        });
    }

    // Basic scroll function with color change
    function handleScroll() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;
        
        // Only apply effects if the page is tall enough
        if (documentHeight > windowHeight * 1.5) {
            const scrollPercentage = scrollY / (documentHeight - windowHeight);
            
            // Elements to modify
            const main = document.querySelector("main");
            const header = document.querySelector("header");
            const footer = document.querySelector("footer");
            
            // Apply color change effect after 30% scroll
            if (scrollPercentage > 0.3) {
                const hue = Math.min((scrollPercentage - 0.3) * 120, 60); // Limit to 60deg
                
                if (main) main.style.filter = `hue-rotate(${hue}deg)`;
                if (header) header.style.filter = `hue-rotate(${hue}deg)`;
                if (footer) footer.style.filter = `hue-rotate(${hue}deg)`;
            } else {
                if (main) main.style.filter = "none";
                if (header) header.style.filter = "none";
                if (footer) footer.style.filter = "none";
            }
            
            // Add fade-in effect to elements as they come into view
            const elements = document.querySelectorAll('.intro, .image-container, img, p, h2, h3, h4, li');
            elements.forEach(el => {
                const position = el.getBoundingClientRect().top;
                
                // If element is in viewport
                if (position < windowHeight - 100) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                }
            });
        }
    }
    
    // Set initial styles for fade-in elements
    const fadeElements = document.querySelectorAll('.intro, .image-container, img, p, h2, h3, h4, li');
    fadeElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });
    
    // Run scroll handler initially and on scroll
    handleScroll();
    window.addEventListener("scroll", handleScroll);
});