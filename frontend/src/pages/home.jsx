import React, { useState } from 'react';
import './home.css';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

const Home = () => {
    const [sidebarOpen, setsidebarOpen] = useState(false);

    const toggleSidebar= ()=>{
       setsidebarOpen(!sidebarOpen);
   };

  return (
    <div className="layout">
      <Navbar />
      <div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>☰</button>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="detail">
        <h1 className='Title'>PowerFit<br />Dash</h1>
        <h3 className='SubTitle'>
          Rack your workouts, monitor your progress, and achieve your fitness goals with ease.
          Fitness Tracker Pro makes staying fit simple and effective.
        </h3>
      </div>
    </div>
  );
};

export default Home;
