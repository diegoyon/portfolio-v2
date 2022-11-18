import React from 'react';
import './Section1.css';

const Section1 = () => {
  return (
    <section>
      <div className="section1">
        <p>Hi, my name is</p>
        <p>Diego Yon.</p>
        <p>Software Developer</p>
        <p>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at{' '}
          <a className="link" href="www.google.com">
            Upstatement
          </a>
          .
        </p>
        <button type="button">Check out my course!</button>
      </div>
    </section>
  );
};

export default Section1;
