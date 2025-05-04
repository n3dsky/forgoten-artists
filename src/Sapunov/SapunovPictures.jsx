import './SapunovPictures.css';

import { useNavigate } from 'react-router-dom';

import picture1 from './images/picture1.jpg'
import picture2 from './images/picture2.jpg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

import navItem1 from './images/nav_item_1p2.svg'
import navItem2 from './images/nav_item_2p2.svg'
import navItem3 from './images/nav_item_3p2.svg'
import navItem4 from './images/nav_item_4p2.svg'

const SapunovPictures = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("..", { relative: "path" });
    };

    const handleNavItem1Click = () => {
        navigate("..", { relative: "path" });
    };

    const handleNavItem2Click = () => {
        console.log('abobus');
    };

    const handleNavItem3Click = () => {
        navigate("picture1")
    };

    const handleNavItem4Click = () => {
        navigate("picture2")
    };

    return (
        <div className='sapunov-artist-picture'>
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
            
            <div className="sapunov-pictures-container">
                    <img className='sapunov-picture' src={picture1} alt="" />
                    <img className='sapunov-picture' src={picture2} alt="" />
            </div>

            <div className="sapunov-main-text-container-pictures">
                <div className="sapunov-header-text-pictures">
                    ХУДОЖЕСТВЕННЫЙ СТИЛЬ И ТЕХНИКА ПИСЬМА
                </div>
                <div className="sapunov-main-text-pictures">
                    <p>Сапунов сочетал в своих работах декоративную насыщенность, театральную условность и глубокий символизм.</p>
                    <p>Его творчество делится на два направления:</p>
                    <p>-Натюрморты с цветами — изысканные композиции с розами, гортензиями, пионами, где цветы становятся метафорой хрупкости жизни и красоты.</p>
                    <p>-Театрально-декорационное искусство — новаторские декорации для спектаклей Мейерхольда, Блока («Балаганчик»), а также постановок Дягилева в Париже.</p>
                    <p>Отличительные черты стиля:</p>
                    <p>-Символистская эстетика: мистические образы, предчувствие рока (например, «Пляска смерти»).</p>
                    <p>-Яркий колорит: сочетание контрастных тонов, влияние Константина Коровина.</p>
                    <p>-Гротеск и театральность: даже в станковой живописи ощущается связь со сценой (например, «Маскарад»).</p>
                    <p>Связь с творчеством и биографией Сапунова (Обе работы демонстрируют ключевые черты его стиля):</p>
                    <p>-Театральность — даже в станковой живописи чувствуется влияние сценографии (например, композиция как «сцена» в «Натюрморте с автопортретом») .</p>
                    <p>-Символизм — цветы как метафора хрупкости, фарфор и фрукты как аллегории искусства и земных удовольствий.</p>
                    <p>Колористическая насыщенность — сочетание холодных и тёплых тонов, характерное для «Голубой розы».</p>
                    <p>Трагизм, заложенный в этих работах, перекликается с личной историей Сапунова: предсказание ранней смерти, увлечение мистикой и гибель в воде в 1912 году.</p>
                </div>
            </div>

            <div className="nav">
                <img 
                    src={navItem1} 
                    alt="" 
                    onClick={handleNavItem1Click}
                    style={{cursor: 'pointer'}}
                />
                <img 
                    src={navItem2} 
                    alt="" 
                    onClick={handleNavItem2Click}
                    style={{cursor: 'pointer'}}
                />
                <img 
                    src={navItem3} 
                    alt="" 
                    onClick={handleNavItem3Click}
                    style={{cursor: 'pointer'}}
                />
                <img 
                    src={navItem4} 
                    alt="" 
                    onClick={handleNavItem4Click}
                    style={{cursor: 'pointer'}}
                />
            </div>
        </div>
    );
};

export default SapunovPictures;