import './ScottiPicture1Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const ScottiPicture1Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("../..", { relative: "path" });
    };

    const handleToTopClick = () => {
        navigate("..", { relative: "path" });
    };

    return (
        <div className='scotti-picture1-info'>
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
            <div className="scotti-main-picture1-info-text-container">
                <p>- Сюжет: Изображён момент, когда Кузьма Минин вручает князю Дмитрию Пожарскому меч, символизирующий призыв к освобождению Москвы от польских интервентов в 1612 году.</p>
                <p>- Анализ: Композиция: Центральные фигуры героев выделены светом, фон заполнен народом, что подчёркивает единство народа и власти.</p>
                <p>- Детали: Тщательно прописаны одежды, оружие и архитектурные элементы (например, стены Нижегородского кремля).</p>
                <p>- Символизм: Жест Минина с мечом — аллегория гражданского долга и самопожертвования.</p>
                <p>Место хранения: Картина хранится в Нижегородском государственном художественном музее. </p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default ScottiPicture1Info;