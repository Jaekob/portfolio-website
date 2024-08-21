import React from 'react';
import BlogPost from '../components/BlogPost';

function Blog() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'var(--accent-color)' }}>Blog</h1>
      <p style={{ color: 'var(--text-color)' }}>
        Welcome to my blog where I share insights, updates, and stories from my journey as a software engineer and my upcoming travels to Japan.
      </p>
      <BlogPost
        title="Why I Chose Full-Stack Development"
        summary="A look into why I decided to specialize in full-stack development, and the benefits of this versatile skill set."
        date="August 20, 2024"
        link="/blog/full-stack-development"
      />
      <BlogPost
        title="Preparing for My Journey to Japan"
        summary="Join me as I prepare for my move to Japan in March 2025, where I'll be documenting my experiences."
        date="September 15, 2024"
        link="/blog/preparing-for-japan"
      />
      <BlogPost
        title="5 Key Lessons from My Software Engineering Career"
        summary="In this post, I share the top five lessons I've learned from my career as a software engineer."
        date="October 10, 2024"
        link="/blog/software-engineering-lessons"
      />
    </div>
  );
}

export default Blog;
