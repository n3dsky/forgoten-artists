import './SmirnovPictures.css';

import { useNavigate } from 'react-router-dom';

import picture1 from './images/picture1.jpg'
import picture2 from './images/picture2.jpg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

import navItem1 from './images/nav1_select.svg'
import navItem2 from './images/nav2.svg'
import navItem3 from './images/nav3.svg'
import navItem4 from './images/nav4.svg'

const SmirnovPictures = (props) => {
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
        <div className='artist-picture'>
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
            
            <div className="pictures-container">
                    <img className='picture' src={picture1} alt="" />
                    <img className='picture' src={picture2} alt="" />
            </div>

            <div className="main-text-container-pictures">
                <div className="header-text-pictures">
                    ХУДОЖЕСТВЕННЫЙ СТИЛЬ И ТЕХНИКА ПИСЬМА
                </div>
                <div className="main-text-pictures">
                    <p>Смирнов работал в рамках академического исторического жанра, сочетая точность деталей с драматизмом сюжетов. </p>
                    <p>Его стиль отличают: </p>
                    <p>- Строгая композиция — выверенное построение сцен, напоминающее театральные мизансцены.</p>
                    <p>- Интерес к античности и библейским темам — вдохновение классическим искусством и литературой.</p>
                    <p>- Эмоциональная глубина — акцент на психологизме персонажей, даже в многофигурных композициях.</p>
                    <p>В отличие от современных ему передвижников, Смирнов избегал социальной критики, сосредоточившись на «вечных» сюжетах. Его работы часто сравнивают с творчеством Генриха Семирадского, но без пышной декоративности — они лаконичнее и строже.</p>
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

export default SmirnovPictures;