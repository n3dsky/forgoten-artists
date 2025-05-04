import './SapunovBio.css';

import { useNavigate } from 'react-router-dom';

import portret from './images/фотка.jpg'
import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

import navItem1 from './images/nav_item_1p1.svg'
import navItem2 from './images/nav_item_2p1.svg'
import navItem3 from './images/nav_item_3p1.svg'
import navItem4 from './images/nav_item_4p1.svg'

const SapunovBio = (props) => {
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
        <div className='sapunov-artist-bio'>
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
            <div className="sapunov-main-text-container">
                <div className="sapunov-header-text">
                    Николай Николаевич Сапунов (1880–1912)
                </div>
                <div className="sapunov-main-text">
                    <p>Выдающийся русский живописец, театральный художник и яркий представитель символизма. Родился в Москве в небогатой купеческой семье, где отец владел свечным заводом. Детство, проведенное среди ярких красок церковных свечей и цветов семейной оранжереи, оказало значительное влияние на его творчество.</p>
                    <p>С 13 лет обучался в Московском училище живописи, ваяния и зодчества (МУЖВЗ) под руководством Исаака Левитана, Валентина Серова и Константина Коровина. Уже в 1900 году его пейзаж «Зима» был выставлен на передвижной выставке и опубликован в журнале «Мир искусства»914. Сапунов активно участвовал в художественных объединениях: «Алая роза» (1904), «Голубая роза» (1907), «Мир искусства», став ключевой фигурой русского символизма.</p>
                    <p>Его жизнь оборвалась трагически в 1912 году: во время лодочной прогулки по Финскому заливу Сапунов утонул, что связывают с предсказанием гадалки о ранней смерти, сделанным ему в Италии.</p>
                </div>
            </div>
            <div className="sapunov-portret">
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

export default SapunovBio;