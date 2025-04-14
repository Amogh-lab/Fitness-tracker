import React from 'react';
import AnalogClock from 'analog-clock-react';

const Clock = () => {
  const options = {
    width: "300px",
    border: true,
    borderColor: "#333", 
    baseColor: "#ffffff", 
    centerColor: "#000000", 
    centerBorderColor: "#e76b18", 
    handColors: {
      second: "#e76b18", 
      minute: "#000000", 
      hour: "#000000",   
    },
  };

  return <AnalogClock {...options} />;
};

export default Clock;
