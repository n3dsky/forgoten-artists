import './MokrickiyBio.css';

import { useNavigate } from 'react-router-dom';

import portret from './images/фотка.jpg'
import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

import navItem1 from './images/nav_item_1p1.svg'
import navItem2 from './images/nav_item_2p1.svg'
import navItem3 from './images/nav_item_3p1.svg'
import navItem4 from './images/nav_item_4p1.svg'

const MokrickiyBio = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("..", { relative: "path" });
    };

    const handleNavItem1Click = () => {
        console.log('abobus');
    };

    const handleNavItem2Click = () => {
        navigate("pictures")
    };

    const handleNavItem3Click = () => {
        navigate('pictures/picture1');
    };

    const handleNavItem4Click = () => {
        navigate('pictures/picture2');
    };

    return (
        <div className='mokrickiy-artist-bio'>
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
            <div className="mokrickiy-main-text-container">
                <div className="mokrickiy-header-text">
                    Аполлон Николаевич Мокрицкий (1810–1870)
                </div>
                <div className="mokrickiy-main-text">
                    <p> Русский живописец и портретист, представитель романтического академизма. Он родился в Пирятине (Полтавская губерния) в дворянской семье. С 1831 года учился в Императорской Академии художеств в Санкт-Петербурге, сначала как вольнослушатель, затем как ученик Алексея Венецианова и Карла Брюллова. В 1839 году получил звание свободного художника. Мокрицкий активно участвовал в выкупе Тараса Шевченко из крепостного состояния. В 1841—1849 годах совершил поездку в Италию, где создал ряд портретов и пейзажей. После возвращения в Россию написал портрет митрополита Никанора, за который получил звание академика. С 1851 года преподавал в Московском училище живописи и ваяния, а также в Строгановском училище. Среди его учеников были К. Е. Маковский, В. Г. Перов, И. И. Шишкин и И. М. Прянишников.</p>
                </div>
            </div>
            <div className="mokrickiy-portret">
                <img src={portret} alt="" />
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

export default MokrickiyBio;