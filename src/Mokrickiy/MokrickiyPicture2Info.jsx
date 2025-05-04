import './MokrickiyPicture2Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const MokrickiyPicture2Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("../..", { relative: "path" });
    };

    const handleToTopClick = () => {
        navigate("..", { relative: "path" });
    };

    return (
        <div className='mokrickiy-picture2-info'>
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
            <div className="mokrickiy-main-picture2-info-text-container">
                <p>Ещё одним значимым произведением Аполлона Николаевича Мокрицкого является «Портрет жены», написанный в 1853 году. Это полотно является ярким примером академической живописи XIX века.</p>
                <p>- Описание картины:</p>
                <p>На картине изображена супруга художника, Мария Мокрицкая, в элегантном платье с кружевами, сидящая в кресле с мягким спинкой. Её взгляд направлен в сторону зрителя, а лёгкая улыбка и спокойное выражение лица придают портрету атмосферу уюта и гармонии. Фон картины выполнен в тёплых тонах, что подчёркивает интимность и домашнюю обстановку.</p>
                <p>Размер картины составляет 61×77 см, и она выполнена маслом на холсте. Портрет является ценным документом для изучения истории русской живописи XIX века и образа женщины того времени.</p>
                <p>Место хранения: Национальный художественный музей Украины в Киеве.</p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default MokrickiyPicture2Info;