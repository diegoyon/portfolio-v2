import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <p>Logo</p>
      <ul>
        <li>
          <span className="numbers">01. </span>About
        </li>
        <li>
          <span className="numbers">02. </span>Experience
        </li>
        <li>
          <span className="numbers">03. </span>Work
        </li>
        <li>
          <span className="numbers">04. </span>Contact
        </li>
        <button type="button">Resume</button>
      </ul>
    </div>
  );
};

export default Header;
