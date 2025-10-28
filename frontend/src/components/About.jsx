import React from 'react';
import '../App.css';
const About = () => {
  return (
    <div className="container my-5 ">
      <h1 className="mb-4 text-center">About AuraPlaylist</h1>
      
      <div className="about-content bg-dark  p-4 rounded shadow-sm mb-5">
        <p className="lead mb-4 text-white">
          Welcome to AuraPlaylist ! This application helps you organize your music 
          based on your emotions and discover new songs that match your current mood.
        </p>
        
        {/* Features Section */}
        <div className="features mb-4">
          <h2 className="h4 mb-3 text-white">What You Can Do</h2>
          <ul className="list-group list-group-flush rounded border border-light">
            <li className="list-group-item  bg-dark text-light border border-light">Create custom moods that represent how you feel</li>
            <li className="list-group-item bg-dark text-light border border-light">Add your favorite songs to different moods</li>
            <li className="list-group-item bg-dark text-light border border-light">Get personalized music recommendations</li>
            <li className="list-group-item bg-dark text-light border border-light">Manage your music collection efficiently</li>
          </ul>
        </div>

        {/* How to Use Section */}
        <div className="how-to-use mb-4">
          <h2 className="h4 mb-3 text-white">How to Use</h2>
          <ol className="list-group list-group-numbered list-group-flush rounded border border-light">
            <li className="list-group-item bg-dark text-light border border-light">Go to the Home page to create your moods</li>
            <li className="list-group-item bg-dark text-light border border-light">Click "Add Song" on any mood to add music</li>
            <li className="list-group-item bg-dark text-light border border-light">Visit Recommendations to discover new music</li>
            <li className="list-group-item bg-dark text-light border border-light">Enjoy your personalized music experience!</li>
          </ol>
        </div>

        {/* Tech Info Section */}
        <div className=" text-white">
          <h2 className="h4 mb-3">Technical Information</h2>
          <p>
            This application is built with React and bootstrap uses modern web technologies 
            to provide a smooth and responsive user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
