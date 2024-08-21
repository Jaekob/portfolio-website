import React from 'react';

function About() {
  return (
    <div style={{ padding: '20px' }}>
      {/* Profile Picture */}
      <section style={{ marginBottom: '20px', textAlign: 'center' }}>
        <img src="/path/to/your-photo.jpg" alt="Jaekob Childress" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
      </section>

      {/* Introduction */}
      <section style={{ marginBottom: '20px' }}>
        <h1 style={{ color: 'var(--accent-color)' }}>About Me</h1>
        <p style={{ color: 'var(--text-color)', lineHeight: '1.6' }}>
          Hi, I’m Jaekob Childress, a passionate software engineer specializing in full-stack development. With over five years of experience, I've worked on a variety of projects that demonstrate my versatility and commitment to delivering high-quality solutions.
        </p>
      </section>

      {/* Professional Background */}
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: 'var(--accent-color)', fontSize: '1.5em', marginTop: '20px' }}>Professional Background</h2>
        <p style={{ color: 'var(--text-color)', lineHeight: '1.6' }}>
          My career began with a deep curiosity for how things work and a desire to solve complex problems. Over the years, I’ve honed my skills in both frontend and backend development, and I’m particularly proficient in technologies like React, Node.js, and AWS. Here’s a snapshot of my experience:
        </p>
        <ul style={{ color: 'var(--text-color)', marginLeft: '20px', lineHeight: '1.6' }}>
          <li>Led the development of a large-scale e-commerce platform, increasing user engagement by 25%.</li>
          <li>Developed a real-time chat application that serves thousands of users daily.</li>
          <li>Optimized cloud infrastructure for a major client, resulting in a 30% reduction in operational costs.</li>
        </ul>
      </section>

      {/* Technical Skills */}
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: 'var(--accent-color)', fontSize: '1.5em', marginTop: '20px' }}>Technical Skills</h2>
        <ul style={{ color: 'var(--text-color)', marginLeft: '20px', lineHeight: '1.6' }}>
          <li>JavaScript (ES6+)</li>
          <li>React & Redux</li>
          <li>Node.js & Express</li>
          <li>AWS (ECS, RDS, CloudWatch)</li>
          <li>Docker & Terraform</li>
        </ul>
      </section>

      {/* Education */}
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: 'var(--accent-color)', fontSize: '1.5em', marginTop: '20px' }}>Education</h2>
        <p style={{ color: 'var(--text-color)', lineHeight: '1.6' }}>
          I hold a Bachelor of Science in Psychology from the University of Houston, where I graduated cum laude. My background in psychology complements my technical skills by providing me with a unique perspective on user experience and human-computer interaction.
        </p>
      </section>

      {/* Hobbies & Interests */}
      <section style={{ marginBottom: '20px' }}>
        <h2 style={{ color: 'var(--accent-color)', fontSize: '1.5em', marginTop: '20px' }}>Hobbies & Interests</h2>
        <p style={{ color: 'var(--text-color)', lineHeight: '1.6' }}>
          Outside of work, I’m an avid outdoor enthusiast. I love hiking, camping, and biking, which helps me maintain a balanced lifestyle. I’m also deeply interested in neurology and biology, which aligns with my passion for psychology and understanding the human mind.
        </p>
        <p style={{ color: 'var(--text-color)', lineHeight: '1.6' }}>
          I’m also looking forward to my upcoming adventure in Japan, where I’ll be documenting my experiences through a YouTube channel dedicated to my travels and work.
        </p>
      </section>

      {/* Call to Action */}
      <section>
        <h2 style={{ color: 'var(--accent-color)', fontSize: '1.5em', marginTop: '20px' }}>Let’s Connect</h2>
        <p style={{ color: 'var(--text-color)', lineHeight: '1.6' }}>
          If you’re interested in collaborating or just want to chat about tech, feel free to <a href="/contact" style={{ color: 'var(--link-color)' }}>get in touch</a>. You can also <a href="/resume.pdf" download style={{ color: 'var(--link-color)' }}>download my resume</a> to learn more about my professional background.
        </p>
      </section>
    </div>
  );
}

export default About;
