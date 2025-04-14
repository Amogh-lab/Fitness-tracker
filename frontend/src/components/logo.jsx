import React from 'react';
import { useNavigate } from 'react-router-dom';
import './logo.css';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className="logo" onClick={() => navigate('/')}>
      <span className="logo-letter">~</span>
      <span className="logo-dot"></span>
    </div>
  );
};

export default Logo;
