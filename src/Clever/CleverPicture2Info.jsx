import './CleverPicture2Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const CleverPicture2Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("../..", { relative: "path" });
    };

    const handleToTopClick = () => {
        navigate("..", { relative: "path" });
    };

    return (
        <div className='clever-picture2-info'>
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
            <div className="clever-main-picture2-info-text-container">
                <p>1880-е годы – время расцвета творчества Ефима Волкова. Манера его письма обрела свободу и колористическую выразительность. 
                В картине «Ранний снег» пейзажист ограничивает себя скупой красочной гаммой, сложные оттенки которой передают мягкость света пасмурного осеннего дня и туманную дымку, заволакивающую далекий ландшафт. Во многом продолжая традицию, заложенную А.К. Саврасовым, со временем Волков оказался ближе к художникам салонного направления, уделявшим особое внимание изысканным красочным эффектам, извлекаемым из повседневных природных мотивов. Придав «унылому» зимнему виду картинную масштабность, Волков достиг почти натуралистического впечатления в изображении ближнего к зрителю пейзажного плана, где сквозь свежий снежный покров пробивается засохшая трава и, кажется, холодом веет от неподвижного ручья. Художник сохранил при этом непринужденную широту движения кисти и фактурность живописи.</p>
                <p>Место хранения: Произведение находится в коллекции Государственной Третьяковской галереи в Москве, России.</p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default CleverPicture2Info;