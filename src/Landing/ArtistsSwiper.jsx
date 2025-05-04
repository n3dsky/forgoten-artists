import React, { forwardRef, useState, useRef } from "react";
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
import { useNavigate } from "react-router-dom";

const SimpleSlider = forwardRef((props, ref) => {
    const [hoveredCenter, setHoveredCenter] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const popupRef = useRef(null);

    const navigate = useNavigate();
  
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
  
    const imageMap = {
      [hist]: [
        { image: hist, text: "Михаил Иванович Скотти", nav: "scotti" },
        { image: hist1, text: "Василий Сергеевич Смирнов", nav: "smirnov" }
      ],
      [byt]: [
        { image: byt, text: "Иван Иванович Соколов", nav: "sokolov" },
        { image: byt1, text: "Григорий Васильевич Сорока", nav: "soroka" }
      ],
      [peyz]: [
        { image: peyz, text: "Ефим Ефимович Волков", nav: "volkov" },
        { image: peyz1, text: "Юлий Юльевич Клевер", nav: "clever" }
      ],
      [nat]: [
        { image: nat, text: "Аполлон Николаевич Мокрицкий", nav: "mocrickiy" },
        { image: nat1, text: "Иван Петрович Аргунов", nav: "argunov" }
      ],
      [port]: [
        { image: port, text: "Николай Николаевич Сапунов", nav: "sapunov" },
        { image: port1, text: "Александр Васильевич Куприн", nav: "kuprin" }
      ]
    };

    const handleNav = (nav) => {
      if (nav) navigate(nav);
    };
  
    const images = [
      hist,
      byt,
      peyz,
      nat,
      port,
    ];

    const handleMouseEnter = (isCenter) => {
      if (isCenter) setHoveredCenter(true);
    };

    const handleMouseLeave = (e) => {
      // Проверяем, что relatedTarget существует и является DOM-узлом
      if (!e.relatedTarget || !(e.relatedTarget instanceof Node)) {
        setHoveredCenter(false);
        return;
      }
      
      // Проверяем, что курсор не перешел на всплывающие элементы или их детей
      if (!popupRef.current || !popupRef.current.contains(e.relatedTarget)) {
        setHoveredCenter(false);
      }
    };
  
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
                  onMouseEnter={() => handleMouseEnter(isCenter)}
                  onMouseLeave={handleMouseLeave}
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
  
        {/* Эллипсы */}
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
  
        {/* Контейнер для всплывающих картинок */}
        <div 
          ref={popupRef}
          style={{
            position: "absolute",
            top: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 20,
            width: "35%", // Уменьшил ширину с 45% до 35%
            height: "650px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "10px",
            pointerEvents: hoveredCenter ? "auto" : "none"
          }}
          onMouseEnter={() => setHoveredCenter(true)}
          onMouseLeave={() => setHoveredCenter(false)}
        >
          {images.map((img, index) => {
            const isCenter = currentSlide === index;
            const overlayImages = imageMap[img] || [];
            
            return isCenter ? (
              <React.Fragment key={index}>
                {overlayImages.map((item, i) => (
                  <div 
                    key={i}
                    style={{
                      position: "relative",
                      width: "100%", // Теперь занимает 100% от уменьшенного контейнера
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
                      cursor: item.nav ? "pointer" : "default",
                    }}
                    onClick={() => item.nav && handleNav(item.nav)}
                  >
                    <img
                      src={item.image}
                      alt={`Preview ${i + 1}`}
                      style={{
                        width: "100%", // Заполняет весь родительский div
                        height: "100%",
                        objectFit: "cover",
                        pointerEvents: "none",
                      }}
                    />
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
                      fontFamily: '"Cormorant Infant", serif',
                      pointerEvents: "none",
                    }}>
                      {item.text}
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ) : null;
          })}
        </div>
      </div>
    );
  });
  
  export default SimpleSlider;