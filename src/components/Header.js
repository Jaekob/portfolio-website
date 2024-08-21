import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ backgroundColor: 'var(--primary-color)', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ color: 'var(--text-color)' }}>My Portfolio</h1>
      <nav aria-label="Main Navigation">
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', gap: '10px' }}>
          <li><Link to="/" style={{ color: 'var(--link-color)', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/about" style={{ color: 'var(--link-color)', textDecoration: 'none' }}>About</Link></li>
          <li><Link to="/portfolio" style={{ color: 'var(--link-color)', textDecoration: 'none' }}>Portfolio</Link></li>
          <li><Link to="/blog" style={{ color: 'var(--link-color)', textDecoration: 'none' }}>Blog</Link></li>
          <li><Link to="/contact" style={{ color: 'var(--link-color)', textDecoration: 'none' }}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
