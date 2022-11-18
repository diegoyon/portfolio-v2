import React from 'react';
import './Project.css';

const Project = (props) => {
  const { content } = props;
  const { title, date, body } = content;
  return (
    <>
        <h2>{title[0]}{' '}<span>{title[1]}</span></h2>
        <p>{date}</p>
        <div className="project-details-div">
          <ul className="project-details">
          {body.map((text) => (
            <li>
              {text}
            </li>
          ))}
                </ul>
        </div>
    </>
  );
};

export default Project;
