import './SorokaBio.css';

import { useNavigate } from 'react-router-dom';

import portret from './images/фотка.jpg'
import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

import navItem1 from './images/nav_item_1p1.svg'
import navItem2 from './images/nav_item_2p1.svg'
import navItem3 from './images/nav_item_3p1.svg'
import navItem4 from './images/nav_item_4p1.svg'

const SorokaBio = (props) => {
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
        <div className='soroka-artist-bio'>
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
            <div className="soroka-main-text-container">
                <div className="soroka-header-text">
                    Григорий Васильевич Сорока (1823–1864)
                </div>
                <div className="soroka-main-text">
                    Григорий Васильевич Сорока родился в 1823 году в деревне Покровское Тверской губернии в семье крепостных крестьян, принадлежавших помещику Н.П. Милюкову. Его судьба могла бы остаться незамеченной, если бы не встреча с Алексеем Венециановым — художником-просветителем, который открыл в имении Сафонково школу для крепостных талантов. Венецианов, заметив способности юноши, взял его в ученики (1842–1847). Сорока учился мастерству у Венецианова, перенимая его любовь к сельским пейзажам и бытовым сценам. Однако, несмотря на талант, он оставался крепостным. После смерти Венецианова в 1847 году Сорока лишился покровителя. Помещик Милюков запретил ему заниматься живописью, требуя исполнения барских повинностей. Художник пытался выкупить свободу, но безуспешно. В 1861 году, после отмены крепостного права, он оказался втянут в земельный спор с бывшим хозяином. Униженный и разочарованный, Сорока покончил с собой в 1864 году. Его трагическая судьба стала символом нереализованного потенциала крепостных гениев.
                    Григорий Сорока — художник, чьё творчество стало мостом между романтизмом Венецианова и реализмом передвижников. Его работы, наполненные тихой грустью и любовью к малой родине, напоминают о ценности каждого человека, даже если история незаслуженно забыла его имя
                </div>
            </div>
            <div className="soroka-portret">
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

export default SorokaBio;