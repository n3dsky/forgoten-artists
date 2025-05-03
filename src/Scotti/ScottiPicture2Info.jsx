import './ScottiPicture2Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const ScottiPicture2Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("../..", { relative: "path" });
    };

    const handleToTopClick = () => {
        navigate("..", { relative: "path" });
    };

    return (
        <div className='scotti-picture2-info'>
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
            <div className="scotti-main-picture2-info-text-container">
                <p>- Сюжет: Завершающий эпизод Троянской войны — штурм города греками. На полотне изображены горящие здания, схватки воинов и гибель троянцев.</p>
                <p>- Анализ: Драматизм: Использование красных и оранжевых тонов передаёт хаос и разрушение. Фигуры воинов динамичны, их позы полны напряжения.</p>
                <p>- Архитектура: Колонны храма Зевса на заднем плане отсылают к античным источникам.</p>
                <p>- Историческая точность: Доспехи и оружие соответствуют описаниям Гомера.</p>
                <p>Место хранения: Картина находится в Елецком городском краеведческом музее.</p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default ScottiPicture2Info;