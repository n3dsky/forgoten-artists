import './KuprinPictures.css';

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

const KuprinPictures = (props) => {
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
        <div className='kuprin-artist-picture'>
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
            
            <div className="kuprin-pictures-container">
                    <img className='kuprin-picture' src={picture1} alt="" />
                    <img className='kuprin-picture' src={picture2} alt="" />
            </div>

            <div className="kuprin-main-text-container-pictures">
                <div className="kuprin-header-text-pictures">
                    ХУДОЖЕСТВЕННЫЙ СТИЛЬ И ТЕХНИКА ПИСЬМА
                </div>
                <div className="kuprin-main-text-pictures">
                    Куприн — мастер натюрморта и индустриального пейзажа. Его ранние работы отличались декоративностью, конструктивностью композиции и контрастными цветовыми решениями. Художник стремился подчеркнуть материальность предметов, сочетая их в неожиданных ракурсах. Позднее его стиль эволюционировал в сторону большей созерцательности и пленэрной живописи, сохраняя при этом экспрессивную фактурность.
                    Александр Куприн соединил в своём творчестве авангардные эксперименты «Бубнового валета» и классические традиции. Его натюрморты, включая «Синий поднос» и «Трубку», стали эталоном баланса между декоративностью и глубиной образа. Даже в поздних работах, где преобладают мягкие пейзажи, сохраняется его фирменный стиль — осязаемая материальность и поэтизация повседневности.
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

export default KuprinPictures;