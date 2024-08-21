import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialCard from '../components/TestimonialCard';

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'var(--accent-color)' }}>Welcome to My Portfolio</h1>
      <p style={{ color: 'var(--text-color)' }}>
        I am Jaekob Childress, a software engineer specializing in full-stack development. Explore my work, learn more about me, and get in touch if you'd like to collaborate.
      </p>
      <h2 style={{ color: 'var(--accent-color)' }}>Testimonials</h2>
      <TestimonialCard name="John Doe" feedback="Jaekob was a pleasure to work with and delivered high-quality code on time." />
      <TestimonialCard name="Jane Smith" feedback="Jaekob’s attention to detail and problem-solving skills are top-notch." />
      <TestimonialCard name="Alex Johnson" feedback="Working with Jaekob has been a great experience. Highly recommend!" />
      <Link to="/portfolio" style={{ textDecoration: 'none' }}>
        <button style={{
          backgroundColor: 'var(--accent-color)',
          color: 'var(--text-color)',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          View My Work
        </button>
      </Link>
    </div>
  );
}

export default Home;
