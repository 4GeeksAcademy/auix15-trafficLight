import React, { useState } from 'react';
import '../../styles/index.css';

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState('red');

  const handleChangeLight = () => {
    switch (activeLight) {
      case 'red':
        setActiveLight('yellow');
        break;
      case 'yellow':
        setActiveLight('green');
        break;
      case 'green':
        setActiveLight('red');
        break;
      default:
        setActiveLight('red');
    }
  };

  return (
    <div className="traffic-light">
      <div
        className={`light red ${activeLight === 'red' ? 'active' : ''}`}
        onClick={() => setActiveLight('red')}
      ></div>
      <div
        className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
        onClick={() => setActiveLight('yellow')}
      ></div>
      <div
        className={`light green ${activeLight === 'green' ? 'active' : ''}`}
        onClick={() => setActiveLight('green')}
      ></div>
      <button onClick={handleChangeLight}>Change Light</button>
    </div>
  );
};

export default TrafficLight;
