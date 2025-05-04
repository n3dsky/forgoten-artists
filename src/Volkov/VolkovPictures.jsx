import './VolkovPictures.css';

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

const VolkovPictures = (props) => {
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
        <div className='volkov-artist-picture'>
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
            
            <div className="volkov-pictures-container">
                    <img className='volkov-picture' src={picture1} alt="" />
                    <img className='volkov-picture' src={picture2} alt="" />
            </div>

            <div className="volkov-main-text-container-pictures">
                <div className="volkov-header-text-pictures">
                    ХУДОЖЕСТВЕННЫЙ СТИЛЬ И ТЕХНИКА ПИСЬМА
                </div>
                <div className="volkov-main-text-pictures">
                    <p>- Реализм и внимание к деталям:
                    Волков стремился передать истинную красоту русской природы, уделяя внимание мельчайшим деталям пейзажей</p>
                    <p>- Использование света и атмосферы:
                    Его работы известны мягкой и светлой палитрой, что создает ощущение свежести и спокойствия.</p>
                    <p>- Пейзажи северной и средней полосы России: 
                    Волков часто изображал скромные уголки природы Русского Севера, подмечая их поэзию и очарование.</p>
                    <p>- Свободный и динамичный мазок:
                    В картинах Волкова заметен свободный, динамичный мазок, разнообразная фактура и простота изобразительного мотива.</p>
                    <p>- Изображение спокойных моментов природы:
                    Художник избегал бурных сцен, предпочитая спокойные и поэтические моменты, такие как ранние утренние часы, вечерние сумерки или появление луны.</p>
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

export default VolkovPictures;