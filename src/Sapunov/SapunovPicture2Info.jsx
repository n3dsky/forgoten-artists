import './SapunovPicture2Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const SapunovPicture2Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("../..", { relative: "path" });
    };

    const handleToTopClick = () => {
        navigate("..", { relative: "path" });
    };

    return (
        <div className='sapunov-picture2-info'>
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
            <div className="sapunov-main-picture2-info-text-container">
                <p>Композиция: Автопортрет художника скрыт в правом верхнем углу среди пышной корзины цветов, фруктов и орнаментальных обоев. Фигура Сапунова едва угадывается, растворяясь в декоративном изобилии. Центральное место занимают яркие цветы и драпировки, создающие эффект театрального задника.</p>
                <p>Стилистика:Работа выполнена темперой на картоне, что придаёт ей графическую чёткость и насыщенность цвета. Техника близка к эскизам театральных декораций, над которыми Сапунов активно работал. Орнаменты и цветы написаны с подчёркнутой декоративностью, характерной для объединения «Голубая роза», а размытые контуры фигуры художника добавляют мистицизма.</p>
                <p>Символика: Спрятанный автопортрет отражает философию Сапунова: художник — не центр мироздания, а его часть. Это подчёркивает идею растворения личности в искусстве и вечном круговороте красоты. Композиция наполнена аллюзиями на театр (маскарадность, бутафорские элементы), что связывает её с предчувствием трагической судьбы автора 12. Цветы и фрукты, как и в других работах, символизируют бренность жизни, а их яркость контрастирует с тенью, нависающей над фигурой художника.</p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default SapunovPicture2Info;