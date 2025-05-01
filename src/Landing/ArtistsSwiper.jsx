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
        height: "655px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Основной слайдер (под эллипсами) */}
        <div style={{
          position: "relative",
          zIndex: 5, // Ниже эллипсов
          height: "100%",
        }}>
          <Slider 
            ref={ref} 
            {...settings}
            afterChange={(index) => setCurrentSlide(index)}
            style={{
              paddingTop: "50px",
              paddingBottom: "50px",
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
                    height: "555px",
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
          top: -50,
          left: 0,
          right: 0,
          zIndex: 10, // Между слайдером и всплывающими картинками
          height: "100px",
          pointerEvents: "none", // Чтобы клики проходили сквозь эллипсы
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
          height: "100px",
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
          top: "50px",
          left: "37.5%",
          right: 0,
          bottom: "50px",
          zIndex: 20, // Выше эллипсов
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
                  height: "555px",
                  left: "50%",
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
                        width: "35%",
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