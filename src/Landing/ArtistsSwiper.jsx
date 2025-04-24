import React, { forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import history from './images/history.jpg'
import natural from './images/natural.jpg'
import portret from './images/portret.jpg'
import bytovoy from './images/bytovoy.jpg'
import volkov from './images/Volkov.jpg'

const SimpleSlider = forwardRef((props, ref) => {
    const settings = {
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true, // Включаем режим центрального слайда
        variableWidth: true // Разрешаем переменную ширину слайдов
      };

  // Массив с путями к изображениям (замените на свои)
  const images = [
    history,
    bytovoy,
    volkov,
    natural,
    portret,
  ];

  return (

    <div style={{ 
      width: "100%", 
      height: "655px"
    }}>
      <Slider ref={ref} {...settings}>
        {images.map((img, index) => (
          <div key={index} > {/* Добавляем отступы между слайдами */}
            <img 
              src={img} 
              alt={`Slide ${index + 1}`} 
              style={{ 
                width: "calc(100% - 20px)", // Учитываем padding
                height: "655px", 
                objectFit: "cover",
                margin: "20px",
                borderRadius: "8px" // Добавляем скругление углов для красоты
              }} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
});

export default SimpleSlider;