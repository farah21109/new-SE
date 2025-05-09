"use client";
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <a href="#" className="logo">
          <img src="https://matrusri.edu.in/wp-content/uploads/2021/11/cropped-MECS-LOGO-192x192.jpg" alt="University Logo" />
          <div className="logo-text">
            <h1>Matrusri Engineering College</h1>
            <p>An Autonomous Institution | Affiliated to Osmania University</p>
          </div>
        </a>
        <nav>
          <ul>
            <li className="dropdown">
              <a href="#">About</a>
              <div className="dropdown-content">
                <a href="overview.html">Overview</a>
                <a href="#">Campus</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">Academics</a>
              <div className="dropdown-content">
                <a href="department.html">Undergraduate</a>
                <a href="#">Research</a>
                <a href="department.html">Departments</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="admission.html">Admissions</a>
              <div className="dropdown-content">
                <a href="admission.html">Apply Now</a>
                <a href="admission.html">Requirements</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="clubs.html">Clubs</a>
              <div className="dropdown-content">
                <a href="clubs.html#dance">Dance Club</a>
                <a href="clubs.html#music">Music Club</a>
                <a href="clubs.html#sports">Sports Club</a>
                <a href="clubs.html#orators">Orators Club</a>
                <a href="clubs.html#mcc">MCC Club</a>
                <a href="clubs.html#coding">Coding Club</a>
              </div>
            </li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
