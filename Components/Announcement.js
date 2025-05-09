"use client";
import React, { useState } from 'react';

const Announcements = () => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);
  const announcements = [
    { title: 'Fall 2025 Admissions Now Open', description: 'Applications for undergraduate and graduate programs are now being accepted. Early decision deadline: December 15, 2024.' },
    { title: 'University Ranks #1 in Computer Science', description: 'Our Computer Science department has been ranked #1 nationally for the third consecutive year.' },
    { title: 'Summer Research Symposium', description: 'Join us for our annual Summer Research Symposium on June 15-17, 2025. Registration closes May 30.' }
  ];

  const nextAnnouncement = () => {
    setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
  };

  const prevAnnouncement = () => {
    setCurrentAnnouncement((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  return (
    <section className="announcements">
      <div className="announcement-container">
        <div className="announcement-header">
          <h2>Important Announcements</h2>
          <div className="announcement-controls">
            <button className="announcement-btn prev-announcement" onClick={prevAnnouncement}>❮</button>
            <button className="announcement-btn next-announcement" onClick={nextAnnouncement}>❯</button>
          </div>
        </div>
        <div className="announcement-slider">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className={`announcement-item ${currentAnnouncement === index ? 'active' : ''}`}
            >
              <div className="announcement-icon">📣</div>
              <div className="announcement-content">
                <h3>{announcement.title}</h3>
                <p>{announcement.description}</p>
                <a href="#" className="announcement-link">Learn More</a>
              </div>
              <div className="announcement-date">May 1, 2025</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
