import './ArgunovPicture1Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const ArgunovPicture1Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("../..", { relative: "path" });
    };

    const handleToTopClick = () => {
        navigate("..", { relative: "path" });
    };

    return (
        <div className='argunov-picture1-info'>
            <img src={holst} alt="" className='holst'/>
            <div className="pins-container">
                <img className='pins' src={pins} alt="" />
            </div>
            <div className="back-button-container">
                <img 
                    className='back-button' 
                    src={backButton} 
                    alt="" 
                    onClick={handleBackButtonClick}
                    style={{cursor: 'pointer'}}
                />
            </div>
            <div className="argunov-main-picture1-info-text-container">
                <p>Описание: Молодая женщина в традиционном наряде (кокошник, сарафан). </p>
                <p>Анализ:  </p>
                <p>- Композиция: Фигура статична, но выразительна. Красный цвет сарафана контрастирует с тёмным фоном, выделяя героиню. </p>
                <p>- Психологизм: Спокойное лицо, прямой взгляд — Аргунов подчёркивает внутреннюю силу и гордость крестьянки.  </p>
                <p>- Значение: Редкий для XVIII века пример уважительного изображения крестьянства.</p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default ArgunovPicture1Info;