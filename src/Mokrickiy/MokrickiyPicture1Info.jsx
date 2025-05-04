import './MokrickiyPicture1Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const MokrickiyPicture1Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("../..", { relative: "path" });
    };

    const handleToTopClick = () => {
        navigate("..", { relative: "path" });
    };

    return (
        <div className='mokrickiy-picture1-info'>
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
            <div className="mokrickiy-main-picture1-info-text-container">
                <p> «Женский портрет» Аполлона Николаевича Мокрицкого является ярким примером академической живописи XIX века. Это произведение представляет собой типичный репрезентативный портрет того времени.</p>
                <p>- Описание картины:</p>
                <p> На картине изображена молодая женщина в чёрном бархатном платье, сидящая в театральной ложе. Её анфас отражается в зеркале, установленном справа, что позволяет увидеть её профиль. В композиции присутствуют театральный бинокль и вьющиеся растения, добавляющие живописную динамику. Цветовая гамма включает красные и жёлтые тона, подчёркивающие торжественность и утонченность образа.</p>
                <p>- Подписи на картине:</p>
                <p> Интересной особенностью является наличие двух подписей: одна — на зеркальной раме, принадлежащая Мокрицкому, и другая — в левом нижнем углу, подписанная «Васьков». Это может свидетельствовать о том, что второй художник завершал работу Мокрицкого, который в 1841 году готовился к поездке в Италию.</p>
                <p>- Техника и стиль:</p>
                <p> Картина выполнена маслом на холсте размером 108×84 см. Стиль исполнения отражает влияние учителей Мокрицкого — Алексея Венецианова и Карла Брюллова. Тщательная проработка деталей, внимание к светотени и пластичности форм характерны для академической школы.</p>
                <p>Место хранения: Калужский музей изобразительных искусств.</p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default MokrickiyPicture1Info;