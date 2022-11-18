import React from 'react';

const Project = (props) => {
  const { content } = props;
  const { title, date, body } = content;
  return (
    <>
      <div>Project</div>
      <p>{title}</p>
      <p>{date}</p>
      <p>{body}</p>
    </>
  );
};

export default Project;
