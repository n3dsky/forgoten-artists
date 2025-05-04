import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './StartPage.css';

import landing from './images/Лэндин.jpg'
import example from './images/example.jpg'

const StartPage = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(true);

    // Если нужно, чтобы модальное окно появлялось только при первом заходе
    useEffect(() => {
        setShowModal(true);
    }, []);

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="start-page" style={{
            backgroundImage: `url(${landing})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat"
        }}>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button className="modal-close" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            Для корректного отображения сайта требуется отрегулировать масштабирование. Нажмите Ctrl и "+" или Ctrl и "-", пока надпись "ЗАБЫТЫЕ РУССКИЕ ХУДОЖНИКИ" не будет по центру кнопки. Спасибо!
                        </div>
                        <img src={example} alt="" className='example-image'/>
                    </div>
                </div>
            )}
            
            <div className="main-button" onClick={() => {navigate('main-menu')}}>
                ЗАБЫТЫЕ РУССКИЕ ХУДОЖНИКИ
            </div>
        </div>
    );
};

export default StartPage;