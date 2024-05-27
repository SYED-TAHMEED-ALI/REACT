import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <video className="video-background" autoPlay loop muted>
        <source src={process.env.PUBLIC_URL + "/video-2.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h1>Welcome to ElectraCart</h1>
        <p>Explore our range of products!</p>
      </div>
    </div>
  );
}

export default Home;
