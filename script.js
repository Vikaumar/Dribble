document.addEventListener('DOMContentLoaded', function () {
    const marqueeContent = document.querySelector('.marquee-content');
    
    // Initialize GSAP animation
    const marqueeWidth = marqueeContent.scrollWidth;
    const containerWidth = document.querySelector('#bottom').offsetWidth;

    // GSAP animation for seamless scrolling
    gsap.to(marqueeContent, {
        x: `-${marqueeWidth / 2}px`, // Move by half of the total width of duplicated content
        ease: "none",
        duration: 30, // Duration of the animation in seconds
        repeat: -1, // Infinite repeat
        paused: false // Start the animation
    });

    // Pause and resume animation on hover
    const bottomDiv = document.getElementById('bottom');
    
    bottomDiv.addEventListener('mouseenter', function () {
        gsap.globalTimeline.pause(); // Pause all GSAP animations
    });

    bottomDiv.addEventListener('mouseleave', function () {
        gsap.globalTimeline.play(); // Resume all GSAP animations
    });

    // Adjust animation on resize to maintain seamless scrolling
    window.addEventListener('resize', () => {
        const newMarqueeWidth = marqueeContent.scrollWidth;
        gsap.set(marqueeContent, { x: 0 }); // Reset the position
        gsap.to(marqueeContent, {
            x: `-${newMarqueeWidth / 2}px`, // Update the animation to match new width
            duration: 30, // Restart with updated duration
            ease: "none",
            repeat: -1
        });
    });
});
{/* <button id="toggle-theme">Toggle Night Mode</button> */}


    
window.addEventListener('DOMContentLoaded', function() {
    const navPart = document.querySelector('.nav-part1');

    if (window.innerWidth <= 810) {
        // Create the hamburger icon using Font Awesome
        const hamburgerIcon = document.createElement('i');
        hamburgerIcon.className = 'fas fa-bars hamburger-icon'; // Font Awesome class for hamburger icon

        // Insert the hamburger icon before the navigation
        navPart.parentNode.insertBefore(hamburgerIcon, navPart);

        // Add click event listener to toggle the menu and icon
        hamburgerIcon.addEventListener('click', function() {
            navPart.classList.toggle('active');
            hamburgerIcon.classList.toggle('active');
        });
    }
});

window.addEventListener('resize', function() {
    const navPart = document.querySelector('.nav-part1');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    if (window.innerWidth <= 810 && !hamburgerIcon) {
        // Create the hamburger icon using Font Awesome
        const newHamburgerIcon = document.createElement('i');
        newHamburgerIcon.className = 'fas fa-bars hamburger-icon'; // Font Awesome class for hamburger icon

        // Insert the hamburger icon before the navigation
        navPart.parentNode.insertBefore(newHamburgerIcon, navPart);

        // Add click event listener to toggle the menu and icon
        newHamburgerIcon.addEventListener('click', function() {
            navPart.classList.toggle('active');
            newHamburgerIcon.classList.toggle('active');
        });
    } else if (window.innerWidth > 810 && hamburgerIcon) {
        // Remove the hamburger icon if the viewport is resized above 810px
        hamburgerIcon.remove();
        navPart.classList.remove('active');
    }
});

    


