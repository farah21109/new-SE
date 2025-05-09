"use client";
import Header from '@/Components/Header';
import Hero from '@/Components/Hero';
import Announcements from '@/Components/Announcement';
import Department from '@/Components/Department';
import Stats from '@/Components/Stats';
import Footer from '@/Components/Footer';

import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Announcements />
      <Department />
       <Stats />
        <Footer />
    </div>
  );
};

export default HomePage;
