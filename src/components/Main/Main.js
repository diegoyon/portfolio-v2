import React from 'react';
import Social from '../Social/Social';
import Email from '../Email/Email';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Section5 from './Section5/Section5';
import Section6 from './Section6/Section6';

import './Main.css';

const Main = () => {
  return (
    <main className='main-container'>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />

      <Social />
      <Email />
    </main>
  );
};

export default Main;
