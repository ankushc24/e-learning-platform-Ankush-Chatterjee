import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome Students</h1>
          <h2>A place to learn and develop your skills</h2>
          <button onClick={() => navigate("/courses")} className="common-btn">
            Explore Courses
          </button>
        </div>
      </div>
      <section className="benefits">
        <div className="benefits-content">
          <h2>Why Choose Us?</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals.</p>
            </div>
            <div className="benefit-item">
              <h3>Flexible Learning</h3>
              <p>Study at your own pace, anytime, anywhere.</p>
            </div>
            <div className="benefit-item">
              <h3>Hands-on Experience</h3>
              <p>Practical projects and real-world applications.</p>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default Home;
