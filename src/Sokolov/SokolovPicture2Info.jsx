import './SokolovPicture2Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const SokolovPicture2Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("../..", { relative: "path" });
    };

    const handleToTopClick = () => {
        navigate("..", { relative: "path" });
    };

    return (
        <div className='sokolov-picture2-info'>
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
            <div className="sokolov-main-picture2-info-text-container">
                <p>Сюжет и символика: Обряд Ивана Купалы — ночные гуляния, прыжки через костёр, поиск цветка папоротника, венки на воде.</p>
                <p>Символы: Огонь (очищение), вода (плодородие), венки (девичья судьба), растения (мистическая связь с природой).</p>
                <p>Композиция и стиль:</p>
                <p>- Динамика: Хороводы, движение фигур вокруг костра.</p>
                <p>- Свет: Контраст между пламенем костра и тёмным лесом.</p>
                <p>- Детали: Традиционные костюмы, венки из полевых цветов, отражение луны в реке.</p>
                <p>Художественные параллели:</p>
                <p>- Иван Крамской: Эскизы на тему народных обрядов.</p>
                <p>- Николай Рерих: Картины-реконструкции языческих праздников («Иван-царевич на Сером Волке»).</p>
                <p>- В.М. Васнецов: Фольклорные мотивы в работах вроде «Алёнушка».</p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default SokolovPicture2Info;