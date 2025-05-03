import './SokolovBio.css';

import { useNavigate } from 'react-router-dom';

import portret from './images/фотка.jpg'
import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

import navItem1 from './images/nav_item_1p1.svg'
import navItem2 from './images/nav_item_2p1.svg'
import navItem3 from './images/nav_item_3p1.svg'
import navItem4 from './images/nav_item_4p1.svg'

const SokolovBio = (props) => {
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
        <div className='sokolov-artist-bio'>
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
            <div className="sokolov-main-text-container">
                <div className="sokolov-header-text">
                    Иван Иванович Соколов (1823–1918)
                </div>
                <div className="sokolov-main-text">
                Иван Иванович Соколов родился в 1823 году в семье крепостных крестьян, принадлежавших помещику из Тульской губернии. Точные детали его ранних лет неизвестны, но сохранились сведения, что благодаря художественному таланту он получил вольную в молодости (предположительно в 1840-х годах). Соколов обучался в Императорской Академии художеств в Санкт-Петербурге, где специализировался на жанровой живописи. Его наставниками были профессора Академии, включая Фёдора Бруни. В 1850-х годах художник начал участвовать в академических выставках, а позже присоединился к Товариществу передвижных художественных выставок (передвижникам), хотя и не стал его активным членом. Несмотря на признание, Соколов не снискал славы Репина или Перова. Он жил скромно, продолжая работать в жанре бытовой живописи. Умер в 1918 году в Москве, оставшись в истории как мастер, запечатлевший повседневную жизнь купечества и мещанства.
                Иван Соколов — мастер, чьё творчество отражает дух русской провинции XIX века. Его картины, лишённые пафоса, но наполненные любовью к деталям, помогают понять быт и нравы эпохи. Несмотря на скромную известность, его наследие заслуживает внимания как важная часть истории русского искусства.
                </div>
            </div>
            <div className="sokolov-portret">
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

export default SokolovBio;