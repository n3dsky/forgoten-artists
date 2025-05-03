import './SorokaPicture2Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const SorokaPicture2Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("../..", { relative: "path" });
    };

    const handleToTopClick = () => {
        navigate("..", { relative: "path" });
    };

    return (
        <div className='soroka-picture2-info'>
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
            <div className="soroka-main-picture2-info-text-container">
                <p>Сюжет: Группа крестьян на берегу озера готовит сети. Вдали — церковь и деревня.</p>
                <p>Особенности:</p>
                <p>- Композиция: Фигуры рыбаков расположены по диагонали, что создаёт динамику. Озеро и небо занимают большую часть полотна, подчёркивая единство человека и природы.</p>
                <p>- Цвет: Приглушённые зелёные, серые и голубые тона передают спокойствие рассвета.</p>
                <p>- Социальный подтекст: Труд показан не как тягость, а как часть естественного порядка жизни.</p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default SorokaPicture2Info;