import React from 'react';
import './sidebar.css';
import Calendar from './calender';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>×</button>
      <ul className="sidebar-menu">
        <Calendar/>
        <li></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Workout Plans</a></li>
        <li><a href="#">Progress</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
