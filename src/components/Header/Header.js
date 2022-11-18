import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <p className="shape">D</p>
      <ul>
        <li>
          <span className="numbers">01.</span>{' '}<a href="#Section2">About</a>
        </li>
        <li>
          <span className="numbers">02.</span>{' '}<a href="#Section3">Experience</a>
        </li>
        <li>
          <span className="numbers">03.</span>{' '}<a href="#Section4">Work</a>
        </li>
        <li>
          <span className="numbers">04.</span>{' '}<a href="#Section6">Contact</a>
        </li>
        <button type="button">Resume</button>
      </ul>
    </div>
  );
};

export default Header;
