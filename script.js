document.addEventListener('DOMContentLoaded', function() {
    // Slideshow functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;
    
    // Set up automatic slideshow
    let slideTimer = setInterval(nextSlide, 5000);
    
    // Next slide function
    function nextSlide() {
        showSlide(slideIndex + 1);
    }
    
    // Previous slide function
    function prevSlide() {
        showSlide(slideIndex - 1);
    }
    
    // Show specific slide
    function showSlide(index) {
        // Reset timer
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, 5000);
        
        // Handle index bounds
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = index;
        }
        
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Deactivate all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current slide and activate dot
        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
    }
    
    // Set up navigation arrows
    document.querySelector('.prev-arrow').addEventListener('click', function() {
        prevSlide();
    });
    
    document.querySelector('.next-arrow').addEventListener('click', function() {
        nextSlide();
    });
    
    // Set up dots for navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
        });
    });
    
    // Initialize first slide
    showSlide(0);
});

// Global function for dot navigation
function currentSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Deactivate all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show selected slide and activate dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    // Reset timer
    clearInterval(window.slideTimer);
    window.slideTimer = setInterval(() => {
        let nextIndex = (index + 1) % slides.length;
        currentSlide(nextIndex);
    }, 5000);
}

// Announcement slider functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize announcement slider
    let announcementIndex = 0;
    const announcements = document.querySelectorAll('.announcement-item');
    const announcementDots = document.querySelectorAll('.announcement-dot');
    const totalAnnouncements = announcements.length;
    
    // Set up automatic slider
    let announcementTimer = setInterval(nextAnnouncement, 8000);
    
    function nextAnnouncement() {
        showAnnouncement(announcementIndex + 1);
    }
    
    function prevAnnouncement() {
        showAnnouncement(announcementIndex - 1);
    }
    
    function showAnnouncement(index) {
        // Reset timer
        clearInterval(announcementTimer);
        announcementTimer = setInterval(nextAnnouncement, 8000);
        
        // Handle index bounds
        if (index >= totalAnnouncements) {
            announcementIndex = 0;
        } else if (index < 0) {
            announcementIndex = totalAnnouncements - 1;
        } else {
            announcementIndex = index;
        }
        
        // Hide all announcements
        announcements.forEach(item => {
            item.classList.remove('active');
        });
        
        // Deactivate all dots
        announcementDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current announcement and activate dot
        announcements[announcementIndex].classList.add('active');
        announcementDots[announcementIndex].classList.add('active');
    }
    
    // Set up navigation buttons
    document.querySelector('.prev-announcement').addEventListener('click', function() {
        prevAnnouncement();
    });
    
    document.querySelector('.next-announcement').addEventListener('click', function() {
        nextAnnouncement();
    });
    
    // Set up dots for navigation
    announcementDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showAnnouncement(index);
        });
    });
    
    // Initialize first announcement
    showAnnouncement(0);
});

// Global function for announcement dot navigation
function currentAnnouncement(index) {
    const announcements = document.querySelectorAll('.announcement-item');
    const announcementDots = document.querySelectorAll('.announcement-dot');
    
    // Hide all announcements
    announcements.forEach(item => {
        item.classList.remove('active');
    });
    
    // Deactivate all dots
    announcementDots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show selected announcement and activate dot
    announcements[index].classList.add('active');
    announcementDots[index].classList.add('active');
    
    // Reset timer
    clearInterval(window.announcementTimer);
    window.announcementTimer = setInterval(() => {
        let nextIndex = (index + 1) % announcements.length;
        currentAnnouncement(nextIndex);
    }, 8000);
}