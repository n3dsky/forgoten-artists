import React, { forwardRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import upper_ellipse from './images/Ellipse_up.png';
import lower_ellipse from './images/Ellipse_down.png';
import hist from './images/hist.jpg';
import hist1 from './images/hist1.jpg';
import byt from './images/byt.jpg';
import byt1 from './images/byt1.jpg';
import peyz from './images/peyz.jpg';
import peyz1 from './images/peyz1.jpg';
import port from './images/port.jpg';
import port1 from './images/port1.jpg';
import nat from './images/nat.png';
import nat1 from './images/nat1.jpg';

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
  
    // Маппинг основной картинки к двум всплывающим с текстом
    const imageMap = {
      [hist]: [
        { image: hist, text: "Михаил Иванович Скотти" },
        { image: hist1, text: "Василий Сергеевич Смирнов" }
      ],
      [byt]: [
        { image: byt, text: "Иван Иванович Соколов" },
        { image: byt1, text: "Григорий Васильевич Сорока" }
      ],
      [peyz]: [
        { image: peyz, text: "Ефим Ефимович Волков" },
        { image: peyz1, text: "Юлий Юльевич Клевер" }
      ],
      [nat]: [
        { image: nat, text: "Аполлон Николаевич Мокрицкий" },
        { image: nat1, text: "Иван Петрович Аргунов" }
      ],
      [port]: [
        { image: port, text: "Николай Николаевич Сапунов" },
        { image: port1, text: "Александр Васильевич Куприн" }
      ]
    };
  
    const images = [
      hist,
      byt,
      peyz,
      nat,
      port,
    ];
  
    return (
      <div style={{ 
        width: "100%", 
        height: "700px",
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
              paddingTop: "20px",
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
                    height: "650px",
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
          top: -80,
          left: 0,
          right: 0,
          zIndex: 10,
          height: "60px",
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
          height: "90px",
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
          top: "30px",
          left: "37.5%",
          right: 0,
          bottom: "70px",
          zIndex: 20,
          pointerEvents: "none",
        }}>
          {images.map((img, index) => {
            const isCenter = currentSlide === index;
            const overlayImages = imageMap[img] || [];
            
            return isCenter ? (
              <div 
                key={index}
                style={{
                  position: "absolute",
                  width: "calc(100% - 80px)",
                  height: "650px",
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
                  {overlayImages.map((item, i) => (
                    <div 
                      key={i}
                      style={{
                        position: "relative",
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
                        src={item.image}
                        alt={`Preview ${i + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      {/* Текст для верхней и нижней картинки */}
                      <div style={{
                        position: "absolute",
                        top: "10px",
                        [i === 0 ? "right" : "left"]: "10px",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "4px",
                        fontSize: "1.7rem",
                        fontWeight: "bold",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                        maxWidth: "80%",
                        fontFamily: '"Cormorant Infant", serif'
                      }}>
                        {item.text}
                      </div>
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