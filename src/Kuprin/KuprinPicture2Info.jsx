import './KuprinPicture2Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const KuprinPicture2Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("../..", { relative: "path" });
    };

    const handleToTopClick = () => {
        navigate("..", { relative: "path" });
    };

    return (
        <div className='kuprin-picture2-info'>
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
            <div className="kuprin-main-picture2-info-text-container">
                <p>Композиция: На столе изображены трубка, книга, лилия и груши. Доминируют тёмные тона (чёрная бутыль, коричневый фон), которые контрастируют с белой драпировкой и яркими фруктами.</p>
                <p>Стилистика: Работа демонстрирует переход к большей монохромности и лаконизму. Формы становятся более обобщёнными, а мазки — энергичными. Влияние кубизма заметно в дроблении пространства, но Куприн избегает радикальной абстракции.</p>
                <p>Символика: Трубка и книга отсылают к интеллектуальному труду, а лилия — к хрупкости жизни, создавая диалог между материальным и духовным.</p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default KuprinPicture2Info;