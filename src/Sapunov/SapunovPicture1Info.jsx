import './SapunovPicture1Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const SapunovPicture1Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("../..", { relative: "path" });
    };

    const handleToTopClick = () => {
        navigate("..", { relative: "path" });
    };

    return (
        <div className='sapunov-picture1-info'>
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
            <div className="sapunov-main-picture1-info-text-container">
                <p> Композиция: Натюрморт изображает пышный букет голубых гортензий в вазе, окружённый фарфоровыми статуэтками и фруктами. Фон выполнен в пастельных тонах, что усиливает хрупкость цветов. Детали композиции — например, увядающие лепестки и изысканные орнаменты на фарфоре — создают диалог между природной красотой и искусственными элементами.</p>
                <p>Стилистика:　Работа сочетает импрессионистическую лёгкость в передаче света с символистской глубиной. Цветовая гамма построена на контрасте холодных голубых оттенков цветов и тёплых охристых тонов фона. Манера письма динамична: мазки то плотные и фактурные (лепестки гортензий), то прозрачные (фон), что отражает влияние Константина Коровина, учителя Сапунова.</p>
                <p>Символика:　Гортензии, часто встречающиеся в творчестве Сапунова, трактуются как символ быстротечности жизни. Их голубой цвет ассоциируется с меланхолией и мистикой, отсылая к детским воспоминаниям художника о церковных свечах и оранжерее отца, где выращивали цветы для религиозных обрядов. Фарфоровые фигурки и фрукты символизируют искусство как альтернативу бренности бытия.</p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default SapunovPicture1Info;