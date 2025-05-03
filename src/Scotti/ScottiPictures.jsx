import './ScottiPictures.css';

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

const ScottiPictures = (props) => {
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
        <div className='scotti-artist-picture'>
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
            
            <div className="scotti-pictures-container">
                    <img className='scotti-picture' src={picture1} alt="" />
                    <img className='scotti-picture' src={picture2} alt="" />
            </div>

            <div className="scotti-main-text-container-pictures">
                <div className="scotti-header-text-pictures">
                    ХУДОЖЕСТВЕННЫЙ СТИЛЬ И ТЕХНИКА ПИСЬМА
                </div>
                <div className="scotti-main-text-pictures">
                    <p> Скотти работал в стиле романтического академизма, сочетая точность исторических деталей с эмоциональной насыщенностью. Его творчество охватывало исторические, религиозные, мифологические сюжеты, а также портреты и жанровые сцены.  </p>
                    <p>Основные черты: </p>
                    <p>- Драматизм композиции: динамичные позы, контрасты света и тени.</p>
                    <p>- Интерес к античности и русской истории: обращение к темам Троянской войны, Смутного времени.</p>
                    <p>- Техническое мастерство: виртуозная работа акварелью и маслом, тщательная проработка фактур.</p>
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

export default ScottiPictures;