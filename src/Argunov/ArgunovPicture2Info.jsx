import './ArgunovPicture2Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const ArgunovPicture2Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("../..", { relative: "path" });
    };

    const handleToTopClick = () => {
        navigate("..", { relative: "path" });
    };

    return (
        <div className='argunov-picture2-info'>
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
            <div className="argunov-main-picture2-info-text-container">
                <p>Описание: Парадный портрет жены графа Петра Шереметева.  </p>
                <p>Анализ:  </p>
                <p>- Композиция: Графиня изображена в платье с горностаевой мантией.</p>
                <p>- Детали: Тщательно выписаны жемчуг, складки ткани. Лицо слегка идеализировано, но сохраняет индивидуальность.</p>
                <p>- Контраст: Сравнивая с «Крестьянкой», видно, как Аргунов адаптирует стиль под статус модели: здесь больше пышности, но меньше эмоций.</p>
                <p>- Значение: Пример «официального» портрета, подчёркивающего статус заказчиков.</p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default ArgunovPicture2Info;