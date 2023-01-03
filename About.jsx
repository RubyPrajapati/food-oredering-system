import React from 'react';
import aboutimage  from '../images/about.png';

const About = () => {
  return (
    <div id="about">
        <div className="about-text">
            <h1>UPCOMPING EVENT</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <button>Read More</button>
        </div>
      <div className="about-image">
        <img src={aboutimage} alt=""/>

      </div>
    </div>
  )
}

export default About;
