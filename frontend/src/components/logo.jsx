import React from 'react';
import { useNavigate } from 'react-router-dom';
import './logo.css';
import { FaDumbbell } from 'react-icons/fa';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className="logo" onClick={() => navigate('/')}>
      <FaDumbbell className="logo-icon" />
      <span className='logo-letter'> PD</span>
    </div>
  );
};

export default Logo;
