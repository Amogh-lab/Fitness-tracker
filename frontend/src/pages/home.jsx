import React, { useState } from 'react';
import './home.css';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Date from '../components/date';
import Bottombar from '../components/bottombar';
import Clock from '../components/Clock';
import Logo from '../components/logo';

const Home = () => {
    const [sidebarOpen, setsidebarOpen] = useState(false);

    const toggleSidebar= ()=>{
       setsidebarOpen(!sidebarOpen);
   };

  return (
    <div className="layout">
      <Navbar />
      <Logo/>
      <button className="sidebar-toggle" onClick={toggleSidebar}>☰</button>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="clock-wrapper">
            <Clock/>
      </div>

      <div className='daydate'>
          <Date/>
      </div>

      <div className="detail">
        <h1 className='Title'>PowerFit<br />Dash</h1>
        <h3 className='SubTitle'>
          Rack your workouts, monitor your progress, and achieve your fitness goals with ease.
          Fitness Tracker Pro makes staying fit simple and effective.
        </h3>
      </div>

      <div className='Bottom-details'>
        <Bottombar/>
      </div>

      <div className='image'></div>
    </div>
  );
};

export default Home;
