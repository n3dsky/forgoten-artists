import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import blank1 from './images/blank.png'
import blank2 from './images/blank.png'
import blank3 from './images/blank.png'
import blank4 from './images/blank.png'
import volkov from './images/Volkov.jpg'

const SimpleSlider = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true, // Включаем режим центрального слайда
        centerPadding: "60px", // Отступ по бокам от центрального слайда
        variableWidth: true // Разрешаем переменную ширину слайдов
      };

  // Массив с путями к изображениям (замените на свои)
  const images = [
    volkov,
    blank1,
    blank1,
    blank1,
    blank1,
  ];

  return (
    <div style={{ 
      width: "100%", 
      height: "655px"
    }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} style={{ padding: "0 10px" }}> {/* Добавляем отступы между слайдами */}
            <img 
              src={img} 
              alt={`Slide ${index + 1}`} 
              style={{ 
                width: "calc(100% - 20px)", // Учитываем padding
                height: "655px", 
                objectFit: "cover",
                borderRadius: "8px" // Добавляем скругление углов для красоты
              }} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;