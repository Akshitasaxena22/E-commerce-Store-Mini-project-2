import React from 'react';
import '../App.css';
import './HeroSection.css';



function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <button className='btn p-3 btn-outline-light'>
          GET STARTED
        </button>
        <button className='btn p-3 btn-outline-light'>
          WATCH TRAILER <i className='far fa-play-circle' />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
