import React from 'react';

const InfoBox = ({ icon, label, value, desc }) => (
  <div className="info-box">
    <div className="info-icon">{icon}</div>
    <div className="info-content">
      <div className="info-label">{label}</div>
      <div className="info-value">{value}</div>
      <div className="info-desc">{desc}</div>
    </div>
  </div>
);

export default InfoBox;
