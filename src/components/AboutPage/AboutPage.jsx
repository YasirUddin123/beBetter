import React from 'react';
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="container">
      <div className="about">
        <h1>Gratitude</h1>
        <h4>Thank you to Prime Digital Academy, my instructor Matt Black, Gemini Cohort, family and friends for the support and encouragement</h4>
        <h4>Technologies Used</h4>
          <p>I used React, Redux-Sagas, Node, Express, and Material UI</p>
          <p>I also used Chart.js to create my graph and the Zen Quotes API to send inspirational quotes</p>
      </div>
    </div>
  );
}

export default AboutPage;
