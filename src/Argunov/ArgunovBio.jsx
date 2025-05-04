import './ArgunovBio.css';

import { useNavigate } from 'react-router-dom';

import portret from './images/фотка.jpg'
import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

import navItem1 from './images/nav_item_1p1.svg'
import navItem2 from './images/nav_item_2p1.svg'
import navItem3 from './images/nav_item_3p1.svg'
import navItem4 from './images/nav_item_4p1.svg'

const ArgunovBio = (props) => {
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
        <div className='argunov-artist-bio'>
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
            <div className="argunov-main-text-container">
                <div className="argunov-header-text">
                    Иван Петрович Аргунов (1729–1802)
                </div>
                <div className="argunov-main-text">
                    <p>Выдающийся русский художник-портретист, чья судьба тесно связана с историей крепостного права.</p>
                    <p>- Происхождение: Родился в семье крепостных графов Шереметевых. Его дядя, Семён Аргунов, был архитектором, а сыновья (Николай и Яков) также стали известными художниками.  </p>
                    <p>- Обучение: Талант Аргунова заметили ещё в юности. Граф Шереметев отправил его учиться у иностранных мастеров при дворе, в том числе у немецкого живописца Георга Гроота.  </p>
                    <p>- Карьера: Несмотря на крепостной статус, Аргунов стал главным управляющим шереметевских имений и руководил художественной мастерской. Однако его творческая свобода была ограничена — большую часть жизни он работал по заказам Шереметевых.</p>
                    <p>- Поздние годы: В конце жизни отошёл от живописи, сосредоточившись на хозяйственных делах. Умер в 1802 году, так и не получив вольную.</p>
                    <p>Иван Аргунов — фигура парадоксальная: крепостной, чьё искусство стало частью золотого фонда русского классицизма. Его портреты, будь то аристократы или крестьяне, объединены гуманизмом и вниманием к личности. Сегодня работы Аргунова хранятся в Третьяковской галерее и Русском музее, напоминая о том, что талант не знает сословий.</p>
                </div>
            </div>
            <div className="argunov-portret">
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

export default ArgunovBio;