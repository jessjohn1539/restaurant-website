import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G letter" />
    </div>
    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} className="spoon__img" alt="about_spoon" />
        <p className="p__opensans">
At our restaurant, we are passionate about creating unforgettable dining moments. With our dedication to quality ingredients and exceptional service, we strive to deliver a culinary journey that surpasses expectations.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} className="spoon__img" alt="about_spoon" />
        <p className="p__opensans">
Rooted in culinary heritage, our restaurant's story spans decades. From humble beginnings to becoming a beloved culinary destination, our commitment to excellence and innovation has shaped our rich history of delighting taste buds.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
