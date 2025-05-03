import './SmirnovPicture2Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const SmirnovPicture1Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("../..", { relative: "path" });
    };

    const handleToTopClick = () => {
        navigate("..", { relative: "path" });
    };

    return (
        <div className='smirnov-picture2-info'>
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
            <div className="main-picture2-info-text-container">
                <p>Поппея Сабина, вторая жена римского императора Нерона. Ради нее Нерон развелся со своей женой Октавией. Не довольствуясь моральной и фактической победой, Поппея приложила все усилия, чтобы избавиться от популярной в народе Октавии. Бывшую императрицу вначале сослали на остров по ложному обвинению и вскоре жестоко убили, а ее голову доставили в Рим на потеху Поппеи.</p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default SmirnovPicture1Info;