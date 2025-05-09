"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Programs</a></li>
            <li><a href="#">Research</a></li>
            <li><a href="#">Campus Life</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Library</a></li>
            <li><a href="#">Student Portal</a></li>
            <li><a href="#">Faculty Directory</a></li>
            <li><a href="#">Career Services</a></li>
            <li><a href="#">IT Support</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Admissions</h3>
          <ul>
            <li><a href="#">Apply Now</a></li>
            <li><a href="#">Financial Aid</a></li>
            <li><a href="#">Visit Campus</a></li>
            <li><a href="#">International Students</a></li>
            <li><a href="#">Transfer Students</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>123 University Avenue<br />Tech City, TC 12345</p>
          <p>Phone: (123) 456-7890<br />Email: info@universityoftech.edu</p>
          <div className="social-links">
            <a href="#">F</a>
            <a href="#">T</a>
            <a href="#">In</a>
            <a href="#">YT</a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 University of Technology. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
