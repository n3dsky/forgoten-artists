import './SmirnovBio.css';

import { useNavigate } from 'react-router-dom';

import portret from './images/фотка.jpg'
import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

import navItem1 from './images/nav1_select.svg'
import navItem2 from './images/nav2.svg'
import navItem3 from './images/nav3.svg'
import navItem4 from './images/nav4.svg'

const SmirnovBio = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    const handleNavItem1Click = () => {
        console.log('abobus');
    };

    const handleNavItem2Click = () => {
        console.log('abobus');
    };

    const handleNavItem3Click = () => {
        console.log('abobus');
    };

    const handleNavItem4Click = () => {
        console.log('abobus');
    };

    return (
        <div className='artist-bio'>
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
            <div className="main-text-container">
                <div className="header-text">
                    Василий Сергеевич Смирнов (1858–1890)
                </div>
                <div className="main-text">
                    Василий Сергеевич Смирнов родился в 1858 году в Москве в семье купца. В 1875 году поступил в Московское училище живописи, ваяния и зодчества, где учился у Василия Перова. Позже продолжил образование в Императорской Академии художеств в Санкт-Петербурге (1879–1885) под руководством Павла Чистякова, мастера исторической живописи. Смирнов выделялся среди сверстников талантом к академическому рисунку и интересом к античной истории. В 1885 году он получил большую золотую медаль Академии за картину «Смерть Нерона», что позволило ему отправиться в пенсионерскую поездку по Европе (Италия, Франция). Однако его карьера оборвалась трагически: в 1890 году, в возрасте 32 лет, художник умер от туберкулёза. Несмотря на короткую жизнь, Смирнов оставил заметный след в русском искусстве. Его работы хранятся в Государственном Русском музее и Третьяковской галерее, но широкой публике он почти неизвестен.
                </div>
            </div>
            <div className="portret">
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

export default SmirnovBio;