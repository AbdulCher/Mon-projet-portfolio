import React from 'react';
import '../styles/cercle.css';
import reactLogo from '../../public/assets/react.svg'; // place ton logo dans /src/assets

const DoubleRotatingCircle = () => {
  return (
    <div className='mes-cercles'>
    <div className="outer-circle">
      <div className="inner-circle">
        <div className="outer-circle-in">
          <img src={reactLogo} alt="React Logo" className="react-logo" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default DoubleRotatingCircle;
