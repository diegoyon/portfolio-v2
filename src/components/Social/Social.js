import React from 'react';
import './Social.css';
import img1 from '../../Assets/images/github.png'
import img2 from '../../Assets/images/linkedin.png'
import img3 from '../../Assets/images/medium.png'
import img4 from '../../Assets/images/twitter.png'

const Social = () => {
  return (
    <div>
      <ul className="social">
        <li>
          <a><img src={img1} /></a>
        </li>
        <li>
          <a><img src={img2} /></a>
        </li>
        <li>
          <a><img src={img3} /></a>
        </li>
        <li>
          <a><img src={img4} /></a>
        </li>
        <li className="line"></li>
      </ul>
    </div>
  );
};

export default Social;
