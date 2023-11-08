import React from 'react';
import './Key.css';

const Key = () => {
  return (
    <ul className="key-container">
        <h3>Time of day booked:</h3>
        <li className="key-item">
        <div className="key-color white"></div>
        <span>None</span>
      </li>
      <li className="key-item">
        <div className="key-color morning"></div>
        <span>Morning Ony</span>
      </li>
      <li className="key-item">
        <div className="key-color evening"></div>
        <span>Evening Only</span>
      </li>
      <li className="key-item">
        <div className="key-color both"></div>
        <span>Morning & Evening</span>
      </li>
    </ul>
  );
};

export default Key;
