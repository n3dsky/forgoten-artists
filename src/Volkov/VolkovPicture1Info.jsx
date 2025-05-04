import './VolkovPicture1Info.css';

import { useNavigate } from 'react-router-dom';

import toTopButton from './images/to_top_button.svg'

import backButton from './images/Разрыв.png'
import holst from './images/текстура холста.png'
import pins from './images/от скетчбука.svg'

const VolkovPicture1Info = (props) => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate("../..", { relative: "path" });
    };

    const handleToTopClick = () => {
        navigate("..", { relative: "path" });
    };

    return (
        <div className='volkov-picture1-info'>
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
            <div className="volkov-main-picture1-info-text-container">
                <p>Картина создавалась Волковым в 1883 году, в период расцвета его творческих сил. Она была написана на станции Сиверская под Петербургом, где у художника имелась собственная дача, и экспонировалась на 11-й передвижной выставке.
                В произведении очень тонко передано лирическое содержание и чувство природы. Передний план пейзажа с хрупкими стволами молодых березок проработан с особой тщательностью. Автор вдохновенно пишет красоту увядающей природы, опавшей золотистой листвы с бликами света уходящего солнца. Устилающие землю разноцветные листья создают образ сказочного ковра, раскинутого под деревьями. В извилистой ленте реки отражается холодное осеннее небо. Одинокая фигура старушки с котомкой за плечами усиливает ощущение одиночества и печали. В пейзаже чутко передано состояние природы, вступающей в пору предзимья...</p>
                <p>Место хранения: Произведение находится в коллекции Государственной Третьяковской галереи в Москве, России.</p>
            </div>
            <div className="to-top" onClick={() => {handleToTopClick()}}>
                <img src={toTopButton} alt="" />
            </div>
        </div>
    );
};

export default VolkovPicture1Info;