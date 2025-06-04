import React from 'react';
import './index.css';
import Hero_image from '../../assets/Hero_image.jpg';

function HeroSection() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${Hero_image})` }}
    >
      <div className='hero-overlay' >
        <h1 >Discover</h1>
           
             <h3>Events Near You</h3>

             
      </div>
    </section>
  );
}

export default HeroSection;