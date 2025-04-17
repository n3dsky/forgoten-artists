import React, { useState } from 'react';
import './CircleMenu.css';
import ReactCurvedText from 'react-curved-text';

const CircleMenu = () => {
  return (
    <div className="circular-nav-container">
      <ReactCurvedText width='642'
  height='642'
  cx='321'
  cy='321'
  rx='190'
  ry='190'
  startOffset='0'
  reversed={true}
  text='ИСТОРИЧЕСКИЙ БЫТОВОЙ ПЕЙЗАЖ НАТЮРМОРТ ПОРТРЕТ'
  textProps={{"style": {"fontSize": "42"}}}
  textPathProps={null}
  tspanProps={{"dy": "-60"}}
  ellipseProps={{"style": "fill: #ffffff"}}
  svgProps={{className: "circle-menu", "style": {"transform": "rotate(0deg)"}}} />
    </div>
  );
};

export default CircleMenu;