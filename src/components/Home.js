import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Welcome to the Construction Material Recommendation System</h1>
        <p>We help you choose the right materials for your construction projects based on your budget, location, and requirements.</p>
        <a href="/recommendations" className="btn">Get Recommendations</a>
      </div>
    </section>
  );
};

export default Home;
