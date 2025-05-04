import './MokrickiyPictures.css';

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

const MokrickiyPictures = (props) => {
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
        <div className='mokrickiy-artist-picture'>
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
            
            <div className="mokrickiy-pictures-container">
                    <img className='mokrickiy-picture' src={picture1} alt="" />
                    <img className='mokrickiy-picture' src={picture2} alt="" />
            </div>

            <div className="mokrickiy-main-text-container-pictures">
                <div className="mokrickiy-header-text-pictures">
                    ХУДОЖЕСТВЕННЫЙ СТИЛЬ И ТЕХНИКА ПИСЬМА
                </div>
                <div className="mokrickiy-main-text-pictures">
                    <p> Аполлон Мокрицкий был выдающимся портретистом, чьи работы отличались выразительностью и точностью передачи характеров. Его стиль сочетал элементы романтизма и реализма, что позволяло ему создавать живые и эмоционально насыщенные образы. Особое внимание он уделял деталям и использованию света и тени, что придавало его портретам глубину и динамичность.</p>
                    <p> Мокрицкий был известен своими портретами, включая работы «Портрет Н. В. Гоголя», «Портрет Е. П. Гребёнки» и «Портрет А. В. Кольцова». Его стиль сочетал элементы романтизма и реализма. Он также оставил ценные мемуары, опубликованные в «Дневнике художника А. Н. Мокрицкого».</p>
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

export default MokrickiyPictures;