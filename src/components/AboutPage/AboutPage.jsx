import React from 'react';
import './AboutPage.css'

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div className="about">
        <h1>Gratitude</h1>
        <h3>Thank you to Prime Digital Academy, Gemini Cohort, family and friends</h3>
        <h4>Technologies Used</h4>
        <p>I used React, Redux-Sagas, Node, Express, and Material UI</p>
        <p>I also used Chart.js to create my graph and the Zen Quotes API to send motivational quotes</p>


      </div>
    </div>
  );
}

export default AboutPage;
