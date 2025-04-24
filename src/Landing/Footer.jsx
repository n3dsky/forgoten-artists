import React, { useState } from 'react';
import './Footer.css';
import mast from './images/mast.png'
import ReactCurvedText from 'react-curved-text';
import lower_ellipse from './images/Ellipse_down.png'

const Footer = ({sliderRef}) => {
  const rotations = [43, -39, -98, -165, -236];
  const [rotation, setRotation] = useState(43);
  const [indexRotation, setIndexRotation] = useState(0);

  const handleLeftClick = () => {
    let nextIndex = indexRotation - 1 < 0 ? 4 : indexRotation - 1;
    let diff = Math.abs(((rotations[indexRotation] - rotations[nextIndex] + 180) % 360 + 360) % 360 - 180);
    setRotation(rotation + diff);
    setIndexRotation(nextIndex);
    sliderRef.current.slickPrev();
  };

  const handleRightClick = () => {
    let nextIndex = indexRotation + 1 > 4 ? 0 : indexRotation + 1;
    let diff = Math.abs(((rotations[indexRotation] - rotations[nextIndex] + 180) % 360 + 360) % 360 - 180);
    setRotation(rotation - diff);
    setIndexRotation(nextIndex);
    sliderRef.current.slickNext();
  };

  const angles = [44];

  return (
    <div className="button-container">
      <div className='footer'>
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
            rx='210'
            ry='210'
            startOffset='0'
            reversed={true}
            text='ИСТОРИЧЕСКИЙ · БЫТОВОЙ · ПЕЙЗАЖ · НАТЮРМОРТ · ПОРТРЕТ ·'
            textProps={{"style": {"fontSize": "42", "fontFamily": "Cormorant Infant, serif"}}}
            textPathProps={null}
            tspanProps={{"dy": "-60"}}
            svgProps={{className: "circle-menu", "style": {"transform": `rotate(${rotation}deg)`, "transition": "transform 1.2s ease-in-out"}}} 
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
      <div className='lower_ellipse'>
        <img src={lower_ellipse} />
      </div>
    </div>
  );
};

export default Footer;