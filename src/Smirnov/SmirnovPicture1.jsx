import './SmirnovPicture1.css';

import { useNavigate } from 'react-router-dom';

import picture from './images/picture1full.jpg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

import navItem1 from './images/nav1_select.svg'
import navItem2 from './images/nav2.svg'
import navItem3 from './images/nav3.svg'
import navItem4 from './images/nav4.svg'

const SmirnovBio = (props) => {
    const navigate = useNavigate();

    const handleNavItem1Click = () => {
        navigate(-2);
    };

    const handleNavItem2Click = () => {
        navigate(-1);
    };

    const handleNavItem3Click = () => {
        console.log('abobus');
    };

    const handleNavItem4Click = () => {
        console.log('abobus');
    };

    const handleInfoClick = () => {
        navigate("info");
    };

    return (
        <div className='artist-picture1'>
            <img src={holst} alt="" className='holst'/>
            <div className="pins-container">
                <img className='pins' src={pins} alt="" />
            </div>
            <div className="main-picture1-container">
                <div className="header-text-picture1">
                    «Смерть Нерона» (1888)
                </div>
                <div className="picture1-image">
                    <div className='picture1' style={{
                            backgroundImage: `url(${picture})`,
                            backgroundSize: "cover"
                        }}>
                        <div className="to-info" onClick={() => {handleInfoClick()}}>
                            о картине
                        </div>
                    </div>
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

export default SmirnovBio;