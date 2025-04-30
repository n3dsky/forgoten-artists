import React, { forwardRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import history from './images/history.jpg';
import natural from './images/natural.jpg';
import portret from './images/portret.jpg';
import bytovoy from './images/bytovoy.jpg';
import volkov from './images/Volkov.jpg';

const SimpleSlider = forwardRef((props, ref) => {
  const [hoveredCenter, setHoveredCenter] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
      infinite: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      focusOnSelect: true,
      beforeChange: (current, next) => setCurrentSlide(next)
  };

  const images = [
      history,
      bytovoy,
      volkov,
      natural,
      portret,
  ];

  // Function to get the next two images in the array (circular)
  const getTopImages = (currentIndex) => {
      const nextIndex1 = (currentIndex + 1) % images.length;
      const nextIndex2 = (currentIndex + 2) % images.length;
      return [images[nextIndex1], images[nextIndex2]];
  };

  return (
      <div style={{ 
          width: "100%", 
          height: "655px",
          position: "relative",
      }}>
          <Slider 
              ref={ref} 
              {...settings}
              afterChange={(index) => setCurrentSlide(index)}
          >
              {images.map((img, index) => {
                  const isCenter = currentSlide === index;
                  return (
                      <div 
                          key={index}
                          onMouseEnter={() => isCenter && setHoveredCenter(true)}
                          onMouseLeave={() => setHoveredCenter(false)}
                          style={{
                              transition: "transform 0.3s ease",
                              transform: isCenter ? 'scale(1.05)' : 'scale(0.95)'
                          }}
                      >
                          <div style={{ 
                              position: "relative",
                              width: "calc(100% - 40px)",
                              height: "655px",
                              margin: "0 20px"
                          }}>
                              {/* Main image */}
                              <img 
                                  src={img} 
                                  alt={`Slide ${index + 1}`} 
                                  style={{ 
                                      width: "100%",
                                      height: "100%", 
                                      objectFit: "cover",
                                      borderRadius: "8px",
                                      transition: "filter 0.3s ease",
                                      filter: hoveredCenter && isCenter ? "brightness(0.7)" : "none",
                                      opacity: isCenter && hoveredCenter ? 0 : 1,
                                      filter: isCenter ? "brightness(1)" : "brightness(50%)",
                                      transition: "all 0.3s ease"
                                  }} 
                              />
                              
                              {/* Top images container - only visible on center hover */}
                              {isCenter && (
                                  <div style={{
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      right: 0,
                                      height: "100%",
                                      opacity: hoveredCenter ? 1 : 0,
                                      transition: "opacity 0.3s ease",
                                      pointerEvents: "none"
                                  }}>
                                      {/* Stacked images container */}
                                      <div style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          height: "100%",
                                          justifyContent: "space-between",
                                          padding: "10px"
                                      }}>
                                          {getTopImages(index).map((topImg, i) => (
                                              <div 
                                                  key={i}
                                                  style={{
                                                      width: "100%",
                                                      height: "49%",
                                                      overflow: "hidden",
                                                      borderRadius: "6px",
                                                      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                                                      transform: hoveredCenter 
                                                          ? "translateY(0)" 
                                                          : i === 0 
                                                              ? "translateY(-20px)" 
                                                              : "translateY(20px)",
                                                      opacity: hoveredCenter ? 0.9 : 0,
                                                      transition: "all 0.3s ease"
                                                  }}
                                              >
                                                  <img
                                                      src={topImg}
                                                      alt={`Preview ${i + 1}`}
                                                      style={{
                                                          width: "100%",
                                                          height: "100%",
                                                          objectFit: "cover",
                                                      }}
                                                  />
                                              </div>
                                          ))}
                                      </div>
                                  </div>
                              )}
                          </div>
                      </div>
                  );
              })}
          </Slider>
      </div>
  );
});

export default SimpleSlider;