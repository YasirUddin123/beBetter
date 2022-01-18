import React from 'react';
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="container">
      <div className="about">
        <h1>Gratitude</h1>
        <h4>Technologies Used</h4>
          <li>React, Redux-Sagas, Node, Express, and Material UI</li>
          <br />
          <li>Chart.js to create my graphs and the Zen Quotes API to send inspirational quotes</li>
          <h4>Toughest Challenges</h4>
          <li>Getting my routes to wire up properly</li>
          <br />
          <li>Making sure the graphs were updated in real time</li>
          <h4>One thing I'm excited to tackle</h4>
          <li>Adding an API to sent text reminders</li>
          <h4>Thank you to Prime Digital Academy staff and alumni, my instructor Matt Black, Gemini Cohort, family and friends for the support and encouragement</h4>

      </div>
    </div>
  );
}

export default AboutPage;
