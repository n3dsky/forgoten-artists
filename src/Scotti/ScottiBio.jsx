import './ScottiBio.css';

import { useNavigate } from 'react-router-dom';

import portret from './images/фотка.jpg'
import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

import navItem1 from './images/nav1_select.svg'
import navItem2 from './images/nav2.svg'
import navItem3 from './images/nav3.svg'
import navItem4 from './images/nav4.svg'

const ScottiBio = (props) => {
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
        <div className='scotti-artist-bio'>
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
            <div className="scotti-main-text-container">
                <div className="scotti-header-text">
                    Михаил Иванович Скотти (1814–1861)
                </div>
                <div className="scotti-main-text">
                Михаил Иванович Скотти родился 29 октября 1814 года в Санкт-Петербурге в семье итальянского художника-декоратора Ивана Карловича Скотти. Рано оставшись без родителей, он воспитывался в доме профессора Академии художеств Алексея Егорова, который стал его наставником. В 1830 году поступил в Императорскую Академию художеств как вольноприходящий ученик, где проявил выдающиеся способности. Уже в 1835 году он получил малую золотую медаль за картину «Патриотизм нижегородских граждан в 1612 году». В 1838 году Скотти отправился в Италию вместе с семьёй графа П.И. Кутайсова. Там он изучал античное искусство и творчество мастеров Возрождения, что сильно повлияло на его стиль, близкий к романтическому академизму Карла Брюллова 310. После возвращения в Россию в 1844 году занимался церковными росписями (например, для Спасского собора в Нижнем Новгороде) и преподавал в Московском училище живописи, ваяния и зодчества. В 1855 году получил звание профессора Академии художеств. Последние годы жизни провёл в Италии и Франции, умер в Париже в 1861 году и был похоронен на кладбище Монмартр.
                Михаил Скотти — яркий представитель русской академической школы, чьё творчество соединило европейские традиции с национальной тематикой. Несмотря на признание при жизни, многие его работы оказались забыты, но сегодня они возвращаются в культурный контекст благодаря выставкам и исследованиям, таким как монография Л.А. Маркиной.
                </div>
            </div>
            <div className="scotti-portret">
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

export default ScottiBio;