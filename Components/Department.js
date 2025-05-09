// Department.js
import React from 'react';

const Department = () => {
  return (
    <section className="features">
      <div className="section-title">
        <h2>Why Choose Us</h2>
        <p>We offer a transformative educational experience that prepares students for the challenges of tomorrow</p>
      </div>
      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-icon">🔬</div>
          <h3>Cutting-Edge Research</h3>
          <p>Our institution is at the forefront of technological innovation with state-of-the-art research facilities and renowned faculty members leading groundbreaking projects.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎓</div>
          <h3>Academic Excellence</h3>
          <p>With rigorous academic programs designed to challenge and inspire, our students receive an education that combines theoretical knowledge with practical skills.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🌐</div>
          <h3>Global Perspective</h3>
          <p>Our diverse community and international partnerships provide students with a global outlook essential for success in today's interconnected world.</p>
        </div>
      </div>
    </section>
  );
};

export default Department;
