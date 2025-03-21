import React from 'react';
import projects from '../projectData';

const Card = () => {
  return (
    <div className="grid grid-cols-3 gap-6 p-4">
      {projects.map((project, index) => (
        <div key={index} className="border p-4 shadow-md">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
};

export default Card;
