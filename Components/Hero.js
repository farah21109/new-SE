"use client";
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: "Shaping Tomorrow's Leaders", description: 'Join a community dedicated to innovation, research, and academic excellence', background: '/api/placeholder/1200/600' },
    { title: 'World-Class Campus', description: 'State-of-the-art facilities designed to enhance learning and research', background: '/api/placeholder/1200/600?text=Campus' },
    { title: 'Leading Through Research', description: 'Pioneering solutions to global challenges through innovation', background: '/api/placeholder/1200/600?text=Research' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-slideshow">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <div className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.background})` }}>
              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <a href="#" className="cta-button">Apply Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="slide-arrow prev-arrow" onClick={prevSlide}>❮</button>
      <button className="slide-arrow next-arrow" onClick={nextSlide}>❯</button>
      <div className="slide-dots">
        {slides.map((_, index) => (
          <span className={`dot ${index === currentSlide ? 'active' : ''}`} key={index}></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
