import './MokrickiyPicture1.css';

import { useNavigate } from 'react-router-dom';

import picture from './images/picture1full.jpg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

import navItem1 from './images/nav_item_1p3.svg'
import navItem2 from './images/nav_item_2p3.svg'
import navItem3 from './images/nav_item_3p3.svg'
import navItem4 from './images/nav_item_4p3.svg'

const MokrickiyPicture1 = (props) => {
    const navigate = useNavigate();

    const handleNavItem1Click = () => {
        navigate("../..", { relative: "path" });
    };

    const handleNavItem2Click = () => {
        navigate("..", { relative: "path" });
    };

    const handleNavItem3Click = () => {
        console.log('abobus');
    };

    const handleNavItem4Click = () => {
        navigate("../picture2", { relative: "path" });
    };

    const handleInfoClick = () => {
        navigate("info");
    };

    return (
        <div className='mokrickiy-artist-picture1'>
            <img src={holst} alt="" className='holst'/>
            <div className="pins-container">
                <img className='pins' src={pins} alt="" />
            </div>
            <div className="mokrickiy-main-picture1-container">
                <div className="mokrickiy-header-text-picture1">
                    «Женский портрет» (1841)
                </div>
                <div className="mokrickiy-picture1-image">
                    <div className='mokrickiy-picture1' style={{
                            backgroundImage: `url(${picture})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
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

export default MokrickiyPicture1;