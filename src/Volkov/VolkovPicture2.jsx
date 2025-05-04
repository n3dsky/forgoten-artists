import './VolkovPicture2.css';

import { useNavigate } from 'react-router-dom';

import picture from './images/picture2full.jpg'

import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

import navItem1 from './images/nav_item_1p4.svg'
import navItem2 from './images/nav_item_2p4.svg'
import navItem3 from './images/nav_item_3p4.svg'
import navItem4 from './images/nav_item_4p4.svg'

const VolkovPicture2 = (props) => {
    const navigate = useNavigate();

    const handleNavItem1Click = () => {
        navigate("../..", { relative: "path" });
    };

    const handleNavItem2Click = () => {
        navigate("..", { relative: "path" });
    };

    const handleNavItem3Click = () => {
        navigate("../picture1", { relative: "path" });
    };

    const handleNavItem4Click = () => {
        console.log('abobus');
    };

    const handleInfoClick = () => {
        navigate("info");
    };

    return (
        <div className='volkov-artist-picture2'>
            <img src={holst} alt="" className='holst'/>
            <div className="pins-container">
                <img className='pins' src={pins} alt="" />
            </div>
            <div className="volkov-main-picture2-container">
                <div className="volkov-header-text-picture1">
                    «Ранний снег» (1883)
                </div>
                <div className="volkov-picture2-image">
                    <div className='volkov-picture2' style={{
                            backgroundImage: `url(${picture})`,
                            backgroundSize: "cover"
                        }}>
                        <div className="to-info-pe" onClick={() => {handleInfoClick()}}>
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

export default VolkovPicture2;