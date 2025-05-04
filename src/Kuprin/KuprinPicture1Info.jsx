import './KuprinPicture1Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const KuprinPicture1Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("../..", { relative: "path" });
    };

    const handleToTopClick = () => {
        navigate("..", { relative: "path" });
    };

    return (
        <div className='kuprin-picture1-info'>
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
            <div className="kuprin-main-picture1-info-text-container">
                <p> Композиция: Центральный элемент — синий поднос, который организует пространство. На нём изображены фрукты, стеклянный графин и керамическая посуда. Фон выполнен в охристых и коричневых тонах, создающих контраст с холодным синим.</p>
                <p> Стилистика: Влияние сезаннизма проявляется в геометризации форм (например, яблоки трактованы как сферы, а складки ткани — как угловатые плоскости). Цветовые пятна локальны и интенсивны, что характерно для «Бубнового валета».</p>
                <p>Символика: Поднос символизирует связь между бытовым и художественным, подчёркивая красоту обыденного.</p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default KuprinPicture1Info;