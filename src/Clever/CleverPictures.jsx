import './CleverPictures.css';

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

const CleverPictures = (props) => {
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
        <div className='clever-artist-picture'>
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
            
            <div className="clever-pictures-container">
                    <img className='clever-picture' src={picture1} alt="" />
                    <img className='clever-picture' src={picture2} alt="" />
            </div>

            <div className="clever-main-text-container-pictures">
                <div className="clever-header-text-pictures">
                    ХУДОЖЕСТВЕННЫЙ СТИЛЬ И ТЕХНИКА ПИСЬМА
                </div>
                <div className="clever-main-text-pictures">
                    <p>- Стиль этого живописца ценители искусства и поныне считают поистине уникальным. Картины Клевера несколько декоративны, а их сюжеты зачастую таинственны и пропитаны мистикой. Однако назвать сюжеты полотен Юлия надуманными и нереалистичными при этом нельзя. В пейзажах Клевера есть доля сказки и мифа, но при этом они абсолютно жизненны и смотрятся живыми и натуральными.</p>
                    <p>- Считается, что Юлий Клевер очень хорошо умел передавать солнечный свет и цвета. Его дневные картины буквально наполнены солнцем, а восходы и закаты просто великолепны. Цветопередачей же живописец, по мнению специалистов, владел поистине мастерски. В своем творчестве художник использовал самые простые замесы красок — к примеру, голубые и желтые оттенки смешивал с коричневой краской или голубые и розовые — с белой.</p>
                    <p>- Иногда Юлий Клевер писал портреты и натюрморты. Но главным направлением его творчества был пейзаж. Живописец обожал писать леса, парки, погодные явления, времена года. Самые успешные свои полотна художник при этом часто повторял.</p>
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

export default CleverPictures;