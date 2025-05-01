import React, { forwardRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import upper_ellipse from './images/Ellipse_up.png';
import lower_ellipse from './images/Ellipse_down.png';
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
  
    const getTopImages = (currentIndex) => {
      const nextIndex1 = (currentIndex + 1) % images.length;
      const nextIndex2 = (currentIndex + 2) % images.length;
      return [images[nextIndex1], images[nextIndex2]];
    };
  
    return (
      <div style={{ 
        width: "100%", 
        height: "700px", // Увеличено с 655px до 900px
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Основной слайдер (под эллипсами) */}
        <div style={{
          position: "relative",
          zIndex: 5,
          height: "100%",
        }}>
          <Slider 
            ref={ref} 
            {...settings}
            afterChange={(index) => setCurrentSlide(index)}
            style={{
              paddingTop: "20px", // Увеличено с 50px
              paddingBottom: "50px", // Увеличено с 50px
            }}
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
                    transform: isCenter ? 'scale(1.05)' : 'scale(0.95)',
                    position: "relative",
                  }}
                >
                  <div style={{ 
                    position: "relative",
                    width: "calc(100% - 40px)",
                    height: "650px", // Увеличено с 555px
                    margin: "0 20px"
                  }}>
                    <img 
                      src={img} 
                      alt={`Slide ${index + 1}`} 
                      style={{ 
                        width: "100%",
                        height: "100%", 
                        objectFit: "cover",
                        borderRadius: "8px",
                        opacity: isCenter && hoveredCenter ? 0 : 1,
                        filter: isCenter ? "brightness(1)" : "brightness(50%)",
                        transition: "all 0.3s ease",
                      }} 
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
  
        {/* Эллипсы (над слайдером, но под всплывающими картинками) */}
        <div style={{
          position: "absolute",
          top: -80, // Увеличено с -50
          left: 0,
          right: 0,
          zIndex: 10,
          height: "60px", // Увеличено с 100px
          pointerEvents: "none",
        }}>
          <img 
            src={upper_ellipse} 
            alt="Upper decoration"
            style={{
              width: "100%",
              maxWidth: "100vw",
              height: "auto",
              objectFit: "cover",
            }} 
          />
        </div>
        
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          height: "90px", // Увеличено с 100px
          pointerEvents: "none",
        }}>
          <img 
            src={lower_ellipse} 
            alt="Lower decoration"
            style={{
              width: "100%",
              maxWidth: "100vw",
              height: "auto",
              objectFit: "cover",
            }} 
          />
        </div>
  
        {/* Контейнер для всплывающих картинок (над всем) */}
        <div style={{
          position: "absolute",
          top: "30px", // Увеличено с 50px
          left: "37.5%",
          right: 0,
          bottom: "70px", // Увеличено с 50px
          zIndex: 20,
          pointerEvents: "none",
        }}>
          {images.map((img, index) => {
            const isCenter = currentSlide === index;
            return isCenter ? (
              <div 
                key={index}
                style={{
                  position: "absolute",
                  width: "calc(100% - 80px)",
                  height: "650px", // Увеличено с 555px
                  left: "45%",
                  transform: "translateX(-50%)",
                  opacity: hoveredCenter ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
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
                        width: "45%",
                        height: "49%",
                        overflow: "hidden",
                        borderRadius: "6px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                        transform: hoveredCenter 
                          ? "translateY(0)" 
                          : i === 0 
                            ? "translateY(-20px)" 
                            : "translateY(20px)",
                        opacity: hoveredCenter ? 1 : 0,
                        transition: "all 0.3s ease",
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
            ) : null;
          })}
        </div>
      </div>
    );
  });
  
  export default SimpleSlider;