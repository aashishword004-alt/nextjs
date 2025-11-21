// components/About.js
import React from 'react';

const About = () => (
  <section style={styles.section}>
    <h1 style={styles.heading}>About Us</h1>
    <p style={styles.paragraph}>
      Welcome to our website! We are passionate developers with over 15 years of experience in building robust and scalable software solutions. Our mission is to deliver high-quality products and help others grow in their coding journey.
    </p>
    <ul style={styles.list}>
      <li>Expertise in JavaScript, React, and Next.js</li>
      <li>Focus on clean, maintainable code</li>
      <li>Committed to continuous learning and improvement</li>
    </ul>
  </section>
);

const styles = {
  section: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '2rem',
    background: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.1rem',
    marginBottom: '1rem',
    color: '#555',
  },
  list: {
    paddingLeft: '1.2rem',
    color: '#444',
  },
};

export default About;