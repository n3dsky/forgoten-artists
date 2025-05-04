import './SapunovPicture2.css';

import { useNavigate } from 'react-router-dom';

import picture from './images/picture2full.jpg'

import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

import navItem1 from './images/nav_item_1p4.svg'
import navItem2 from './images/nav_item_2p4.svg'
import navItem3 from './images/nav_item_3p4.svg'
import navItem4 from './images/nav_item_4p4.svg'

const SapunovPicture2 = (props) => {
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
        <div className='sapunov-artist-picture2'>
            <img src={holst} alt="" className='holst'/>
            <div className="pins-container">
                <img className='pins' src={pins} alt="" />
            </div>
            <div className="sapunov-main-picture2-container">
                <div className="sapunov-header-text-picture1">
                    «Натюрморт с автопортретом» (1907–1911)
                </div>
                <div className="sapunov-picture2-image">
                    <div className='sapunov-picture2' style={{
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

export default SapunovPicture2;