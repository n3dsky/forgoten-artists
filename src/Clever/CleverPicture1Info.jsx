import './CleverPicture1Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const CleverPicture1Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("../..", { relative: "path" });
    };

    const handleToTopClick = () => {
        navigate("..", { relative: "path" });
    };

    return (
        <div className='clever-picture1-info'>
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
            <div className="clever-main-picture1-info-text-container">
                <p> «Заброшенная мельница» – неожиданный и масштабный пример отступления Клевера от салонно-академического направления. Типичные для его творчества монументальные картины не вызывали такого ощущения трагизма, как непритязательный мотив старой заброшенной мельницы. Мастер делает шаг в сторону демократического искусства, выбрав простой и понятный сюжет. С фотографической точностью он фиксирует каждую деталь, говорящую о разрушении и упадке некогда большого и крепкого хозяйства: покосившиеся здания с выломанными бревнами и прохудившимися крышами, разбитая посуда, выброшенные мельничные жернова, грязные и никчемные, как и разломанные льдины в реке, сбившиеся в стаи вороны, которым здесь уже нечем поживиться. 
                Колорит и особенности живописной перспективы характеризуют Клевера не только как мастера салонного направления, но и предшественника искусства модерна с его любовью к таким декоративным решениям, как плоскостность композиции и сумрачный колорит.</p>
                <p> Подобные произведения, представляющие «нетрадиционные» для салонного искусства пейзажи, пронизанные тонкой лирикой или чувством глубокой безысходности, в полной мере выразили дар пейзажиста. Такие работы появлялись на протяжении всего творческого пути художника, они уникальны и практически никогда не имеют вариантов и повторений.</p>
                <p>Место хранения: Государственная Третьяковская галерея, Москва.</p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default CleverPicture1Info;