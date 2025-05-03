import './SokolovPictures.css';

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

const SokolovPictures = (props) => {
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
        <div className='sokolov-artist-picture'>
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
            
            <div className="sokolov-pictures-container">
                    <img className='sokolov-picture' src={picture1} alt="" />
                    <img className='sokolov-picture' src={picture2} alt="" />
            </div>

            <div className="sokolov-main-text-container-pictures">
                <div className="sokolov-header-text-pictures">
                    ХУДОЖЕСТВЕННЫЙ СТИЛЬ И ТЕХНИКА ПИСЬМА
                </div>
                <div className="sokolov-main-text-pictures">
                    <p> Иван Соколов — представитель реалистической школы с элементами романтизма. </p>
                    <p> Его творчество характеризуют: </p>
                    <p>- Детализация интерьеров: тщательная проработка предметов быта, одежды, архитектурных элементов.</p>
                    <p>- Народный юмор: лёгкая ирония в изображении персонажей, например, в сценах чаепитий или семейных споров.</p>
                    <p>- Светотеневая моделировка: мягкие переходы света и тени, создающие уютную атмосферу.</p>
                    <p>- Бытовая тематика: сцены из жизни купцов, ремесленников, городских обывателей.</p>
                    <p>Соколов избегал социальной критики, характерной для передвижников. Его работы — это «энциклопедия» русской провинциальной жизни, где даже в мелких конфликтах чувствуется теплота и человечность.</p>
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

export default SokolovPictures;