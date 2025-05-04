import './KuprinBio.css';

import { useNavigate } from 'react-router-dom';

import portret from './images/фотка.jpg'
import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

import navItem1 from './images/nav_item_1p1.svg'
import navItem2 from './images/nav_item_2p1.svg'
import navItem3 from './images/nav_item_3p1.svg'
import navItem4 from './images/nav_item_4p1.svg'

const KuprinBio = (props) => {
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
        <div className='kuprin-artist-bio'>
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
            <div className="kuprin-main-text-container">
                <div className="kuprin-header-text">
                    Александр Васильевич Куприн (1880–1960)
                </div>
                <div className="kuprin-main-text">
                    <p>Выдающийся русский и советский живописец, представитель авангардного объединения «Бубновый валет». Родился в Борисоглебске Воронежской губернии в семье преподавателя. Художественное образование начал в Воронеже, где посещал вечерние классы рисования (1899–1901), а затем продолжил обучение в Петербурге и Москве у известных мастеров, включая Константина Юона.</p>
                    <p>В 1910 году Куприн присоединился к «Бубновому валету», где его творчество развивалось под влиянием Поля Сезанна, что отразилось в геометризации форм и яркой цветовой палитре15. После революции он активно участвовал в культурной жизни: оформлял Москву к праздникам, преподавал во Вхутемасе и Московском текстильном институте. В 1956 году получил звание заслуженного деятеля искусств РСФСР.</p>
                </div>
            </div>
            <div className="kuprin-portret">
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

export default KuprinBio;