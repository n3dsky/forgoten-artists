import React from 'react';
import './Footer.css';
import mast from './images/mast.png'
import ReactCurvedText from 'react-curved-text';

const Footer = () => {
  const handleLeftClick = () => {
    console.log('Left button clicked');
    // Add your left button click logic here
  };

  const handleRightClick = () => {
    console.log('Right button clicked');
    // Add your right button click logic here
  };

  return (
    <div className="button-container">
      <button className="image-button left-button" onClick={handleLeftClick}>
        <img 
          src={mast} 
          alt="Left Button" 
          className="button-image left-button-image"
        />
      </button>

        

      <div className="center-text">
        <p>ЖАНР</p>    
        <ReactCurvedText width='642'
          height='642'
          cx='321'
          cy='321'
          rx='190'
          ry='190'
          startOffset='0'
          reversed={true}
          text='ИСТОРИЧЕСКИЙ БЫТОВОЙ ПЕЙЗАЖ НАТЮРМОРТ ПОРТРЕТ'
          textProps={{"style": {"fontSize": "42", "fontFamily": "Cormorant Infant, serif"}}}
          textPathProps={null}
          tspanProps={{"dy": "-60"}}
          svgProps={{className: "circle-menu", "style": {"transform": "rotate(0deg)"}}} 
        />
      </div>
      
      <button className="image-button right-button" onClick={handleRightClick}>
        <img 
          src={mast} 
          alt="Right Button" 
          className="button-image right-button-image"
        />
      </button>
    </div>
  );
};

export default Footer;