import React from 'react';
import './bottombar.css'

const Bottombar = () => {
  return (
    <div className="unit-box">
      <p className="unit">
        Displays a responsive calendar layout that dynamically adjusts to the selected month and year using React state management.
      </p>
      <p className="unit">
        Includes intuitive arrow buttons to seamlessly switch between previous and next months.
      </p>
      <p className="unit">
        Automatically highlights the current day with a distinct color scheme (black background and orange text) for easy visibility.
      </p>
      <p className="unit">
        Users cannot manually select dates, ensuring the calendar stays focused on simply viewing the present month and current day.
      </p>
    </div>
  );
};

export default Bottombar;
