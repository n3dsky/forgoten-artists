import './SokolovPicture1Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const SokolovPicture1Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("../..", { relative: "path" });
    };

    const handleToTopClick = () => {
        navigate("..", { relative: "path" });
    };

    return (
        <div className='sokolov-picture1-info'>
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
            <div className="sokolov-main-picture1-info-text-container">
                <p>Сюжет: Молодые едут в церковь на санях, запряжённых тройкой лошадей. Рядом — друзья и родственники в нарядных одеждах.</p>
                <p>Особенности:</p>
                <p>- Динамика: Резвые лошади и развевающиеся одежды создают ощущение движения.</p>
                <p>- Цвет: Яркие акценты (красные сарафаны, синие кафтаны) контрастируют с белым снегом, подчёркивая праздничность момента.</p>
                <p>- Этнография: Точность в изображении народных костюмов и украшений саней. </p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default SokolovPicture1Info;