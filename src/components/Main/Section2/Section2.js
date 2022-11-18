import React from 'react';
import './Section2.css';

const Section2 = () => {
  return (
    <section id="Section2">
      <div className="section2">
          <div className="about-me-info">
              <h2><span>01.{' '}</span>About me</h2>
              <p>Hello! My name is Diego and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
              <p>Fast-forward to today, and I’ve had the privilege of working at{' '}
                <a className="link" href="www.google.com">
                  an advertising agency, a start-up, a huge corporation, and a student-led design studio.{' '}
                </a>
              My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
              <p>I also recently{' '}
                <a className="link" href="www.google.com">
                  launched a course{' '}
                </a>
              that covers everything you need to build a web app with the Spotify API using Node & React.</p>
              <p>Here are a few technologies I’ve been working with recently:</p>
              <ul className="about-me-skills">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>Eleventy</li>
                <li>WordPress</li>
              </ul>
          </div>
          <div className="user-picture-div">
              <div className="user-picture">
                
              </div>
          </div>
      </div>
    </section>
  );
};

export default Section2;
