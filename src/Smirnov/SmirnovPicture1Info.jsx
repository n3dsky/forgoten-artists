import './SmirnovPicture1Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const SmirnovPicture1Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-2);
    };

    const handleToTopClick = () => {
        navigate(-1);
    };

    return (
        <div className='smirnov-picture1-info'>
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
            <div className="main-picture1-info-text-container">
                <p>- Сюжет: Последние минуты жизни римского императора Нерона, который, спасаясь от восставших легионеров, приказывает рабу убить себя.</p>
                <p>- Анализ: Композиция построена на контрасте: Нерон в белых одеждах (символ тщеславия) противопоставлен тёмному интерьеру и фигурам солдат на заднем плане.</p>
                <p>- Детали: Тщательно прописанные элементы доспехов, античная мебель, игра света на лицах.</p>
                <p>- Психологизм: Лицо Нерона выражает страх и отчаяние, что подчёркивает трагедию властителя-тирана.</p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default SmirnovPicture1Info;