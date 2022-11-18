import React, { useState } from 'react';
import Project from './Project/Project';
import './Section3.css';

const Section3 = () => {
  const projectDetails = [
    {
      title: ['Engineer', '@ Upstatement'],
      date: 'May 2018 - Present',
      body: [
        'Write modern, performant, maintainable code for a diverse array of client and internal projects',
        'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
      ],
    },
    {
      title: ['Studio Developer', '@ Scout'],
      date: 'January - April 2018',
      body: [
        'Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern',
        'Helped solidify a brand direction for blistabloc that spans both packaging and web',
        'Interfaced with clients on a weekly basis, providing technological expertise',
      ],
    },
    {
      title: ['UI Engineer Co-op', '@ Apple'],
      date: 'July - December 2017',
      body: [
        'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
        'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
        'Architected and implemented the front-end of Apple Music\'s embeddable web player widget, which lets users log in and listen to full songs in the browser',
      ],
    },
    {
      title: ['Software Engineer Co-op', '@ Starry'],
      date: 'January - June 2017',
      body: [
        'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
        'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
      ],
    },
    {
      title: ['Creative Technologist Co-op', '@ MullenLowe'],
      date: 'May 2018 - Present',
      body: [
        'Write modern, performant, maintainable code for a diverse array of client and internal projects',
        'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
      ],
    },
  ];

  const [content, setContent] = useState(projectDetails[0]);

  const [active, setActive] = useState(false);

  const handleClick = (e) => {
   e.target.value    = setActive(true)



    switch (e.target.innerHTML) {
      case 'Upstatement':
        setContent({
          title: projectDetails[0].title,
          date: projectDetails[0].date,
          body: projectDetails[0].body,
        });
        break;
      case 'Scout':
        setContent({
          title: projectDetails[1].title,
          date: projectDetails[1].date,
          body: projectDetails[1].body,
        });
        break;
      case 'Apple':
        setContent({
          title: projectDetails[2].title,
          date: projectDetails[2].date,
          body: projectDetails[2].body,
        });
        break;
      case 'Starry':
        setContent({
          title: projectDetails[3].title,
          date: projectDetails[3].date,
          body: projectDetails[3].body,
        });
        break;
      case 'MullenLowe':
        setContent({
          title: projectDetails[4].title,
          date: projectDetails[4].date,
          body: projectDetails[4].body,
        });
        break;
    }
  };
  return (
    <section id="Section3">
      <div className="section3">
        <h2>
          <span>02. </span>Where I've Worked
        </h2>

        <div className="section3-content">
          <ul className="projects-navigation">
            <li onClick={handleClick}>Upstatement</li>
            <li onClick={handleClick}>Scout</li>
            <li onClick={handleClick}>Apple</li>
            <li onClick={handleClick}>Starry</li>
            <li onClick={handleClick}>MullenLowe</li>
          </ul>
          <div className="project">
              <Project content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
