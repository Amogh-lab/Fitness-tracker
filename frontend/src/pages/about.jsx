import React from 'react';
import { FaBolt, FaCalendarAlt, FaChartLine, FaDumbbell } from 'react-icons/fa';
import './about.css';
import Navbar from '../components/navbar';
import Logo from '../components/logo';

const About = () => {
  return (
    <div>
    <Navbar/>
    <Logo/>
    <div className="about-container">
        
      <h1 className="about-title">About PowerFit Dash</h1>
      <p className="about-subtitle">
        PowerFit Dash is a modern fitness tracking dashboard designed to help you visualize, manage, and optimize your workout routines. Whether you're a beginner or a seasoned athlete, PowerFit Dash empowers you to stay on top of your fitness journey.
      </p>

      <div className="features-grid">
        <div className="feature-card">
          <FaDumbbell className="feature-icon" />
          <h3>Workout Tracking</h3>
          <p>Log daily workouts and exercises with precision and clarity.</p>
        </div>

        <div className="feature-card">
          <FaCalendarAlt className="feature-icon" />
          <h3>Smart Calendar</h3>
          <p>Stay updated with your daily fitness activities through a dynamic and responsive calendar view.</p>
        </div>

        <div className="feature-card">
          <FaChartLine className="feature-icon" />
          <h3>Progress Insights</h3>
          <p>Visualize progress over time with clean and informative UI components.</p>
        </div>

        <div className="feature-card">
          <FaBolt className="feature-icon" />
          <h3>Performance Focused</h3>
          <p>Fast, responsive, and focused on giving you the best experience for tracking fitness goals.</p>
        </div>
      </div>

      <div className="about-footer">
        <a href="https://github.com/Amogh-lab" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <span> | </span>
        <a href="https://www.linkedin.com/in/amogh-ap-750832293" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
    </div>
  );
};

export default About;
