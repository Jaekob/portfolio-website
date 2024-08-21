import React from 'react';

function ProjectCard({ title, description, link }) {
  return (
    <div style={{ backgroundColor: 'var(--primary-color)', padding: '20px', margin: '10px 0', borderRadius: '8px' }}>
      <h2 style={{ color: 'var(--accent-color)' }}>{title}</h2>
      <p style={{ color: 'var(--text-color)' }}>{description}</p>
      <a href={link} style={{ color: 'var(--link-color)' }} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}

export default ProjectCard;
