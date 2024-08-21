import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Portfolio() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'var(--accent-color)' }}>My Work</h1>
      <ProjectCard
        title="Project 1"
        description="A full-stack web application built with React and Node.js."
        link="#"
      />
      <ProjectCard
        title="Project 2"
        description="A real-time chat application using WebSocket and Python."
        link="#"
      />
      <ProjectCard
        title="Project 3"
        description="An e-commerce platform developed with Django and React."
        link="#"
      />
      <ProjectCard
        title="Project 4"
        description="A machine learning project analyzing user data to predict trends."
        link="#"
      />
    </div>
  );
}

export default Portfolio;
