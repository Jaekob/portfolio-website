import React from 'react';
import { Link } from 'react-router-dom';

function BlogPost({ title, summary, date, link }) {
  return (
    <div style={{ backgroundColor: 'var(--secondary-color)', padding: '20px', marginBottom: '20px', borderRadius: '8px' }}>
      <h2 style={{ color: 'var(--accent-color)' }}>{title}</h2>
      <p style={{ color: 'var(--muted-text-color)' }}>{date}</p>
      <p style={{ color: 'var(--text-color)' }}>{summary}</p>
      <Link to={link} style={{ color: 'var(--link-color)', textDecoration: 'none' }}>
        Read more
      </Link>
    </div>
  );
}

export default BlogPost;
