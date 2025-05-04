import './CleverPicture2.css';

import { useNavigate } from 'react-router-dom';

import picture from './images/picture2full.jpg'

import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

import navItem1 from './images/nav_item_1p4.svg'
import navItem2 from './images/nav_item_2p4.svg'
import navItem3 from './images/nav_item_3p4.svg'
import navItem4 from './images/nav_item_4p4.svg'

const CleverPicture2 = (props) => {
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
        <div className='clever-artist-picture2'>
            <img src={holst} alt="" className='holst'/>
            <div className="pins-container">
                <img className='pins' src={pins} alt="" />
            </div>
            <div className="clever-main-picture2-container">
                <div className="clever-header-text-picture1">
                    «Закат солнца зимой» (1891)
                </div>
                <div className="clever-picture2-image">
                    <div className='clever-picture2' style={{
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

export default CleverPicture2;