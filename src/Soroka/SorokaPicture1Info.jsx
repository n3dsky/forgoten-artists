import './SorokaPicture1Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const SorokaPicture1Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("../..", { relative: "path" });
    };

    const handleToTopClick = () => {
        navigate("..", { relative: "path" });
    };

    return (
        <div className='soroka-picture1-info'>
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
            <div className="soroka-main-picture1-info-text-container">
                <p>Сюжет: Интерьер кабинета в усадьбе Милюкова, где жил Сорока. На столе — книги, глобус, чернильница, за окном — парк с прудом.</p>
                <p>Особенности:</p>
                <p>- Свет: Мягкое освещение создаёт уют. Льющийся из окна свет символизирует связь внутреннего мира с природой.</p>
                <p>- Детали: Каждая вещь (например, кресло с резными ножками) прописана с любовью, подчёркивая интеллектуальную атмосферу.</p>
                <p>- Символика: Глобус и книги — намёк на мечты о свободе и знаниях, недоступных крепостному.</p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default SorokaPicture1Info;