import './ArgunovPictures.css';

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

const ArgunovPictures = (props) => {
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
        <div className='argunov-artist-picture'>
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
            
            <div className="argunov-pictures-container">
                    <img className='argunov-picture' src={picture1} alt="" />
                    <img className='argunov-picture' src={picture2} alt="" />
            </div>

            <div className="argunov-main-text-container-pictures">
                <div className="argunov-header-text-pictures">
                    ХУДОЖЕСТВЕННЫЙ СТИЛЬ И ТЕХНИКА ПИСЬМА
                </div>
                <div className="argunov-main-text-pictures">
                    <p>Аргунов — мастер, соединивший европейские традиции с русской самобытностью.  </p>
                    <p>- Стиль: Его работы балансируют между барокко (пышность, динамика) и классицизмом (гармония, строгость).  </p>
                    <p>- Герои: Писал как аристократов (Шереметевых, Римских-Корсаковых), так и простых людей. Даже в портретах крестьян подчёркивал их достоинство, избегая идеализации.</p>
                    <p>- Техника: Тщательная проработка деталей (ткани, украшения), мягкая светотень, сдержанная цветовая гамма. </p>
                    <p>- Новаторство: Один из первых русских художников, кто начал изображать крестьян как самостоятельных героев, а не «фон» для знати.</p>
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

export default ArgunovPictures;