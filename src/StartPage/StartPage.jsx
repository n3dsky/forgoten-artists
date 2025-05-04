import { useNavigate } from 'react-router-dom';
import './StartPage.css';

import landing from './images/Лэндин.jpg'

const StartPage = () => {
    const navigate = useNavigate();
  	return (
    	<div className="start-page" style={{
            backgroundImage: `url(${landing})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat"
        }}>
            <div className="main-button" onClick={() => {navigate('main-menu')}}>
              ЗАБЫТЫЕ РУССКИЕ ХУДОЖНИКИ
            </div>
      </div>
    );
};

export default StartPage;