import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h2>Welcome to our website-Our mission</h2>
        <p>
          Welcome to our vibrant online learning community! 🎓✨ We're passionate
          about empowering individuals to excel in their chosen fields through
          accessible, top-quality courses.
        </p>
        <div className="about-details">
          <div className="column">
            <h3>Our Mission</h3>
            <p>
              To provide engaging and effective learning experiences that foster
              personal growth and professional success.
            </p>
          </div>
          <div className="column">
            <h3>Our Vision</h3>
            <p>
              To be the leading platform for online education, recognized for
              innovation, excellence, and learner satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
