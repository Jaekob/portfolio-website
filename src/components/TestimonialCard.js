function TestimonialCard({ name, feedback }) {
    return (
      <div style={{ backgroundColor: 'var(--secondary-color)', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
        <p style={{ color: 'var(--text-color)' }}>"{feedback}"</p>
        <p style={{ color: 'var(--muted-text-color)' }}>- {name}</p>
      </div>
    );
  }
  
  export default TestimonialCard;
  