import "./StartPage.css";
import rect150 from './images/rectangle-150.png'
import rect180 from './images/rectangle-180.png'
import rect200 from './images/rectangle-200.png'
import rect190 from './images/rectangle-190.png'
import rect160 from './images/rectangle-160.png'
import rect170 from './images/rectangle-170.png'
import div3 from './images/div3.png'

import { useNavigate } from "react-router-dom";

export const StartPage = ({ className, ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('main-menu')
  };
  return (
    <div className={"div " + className}>
      <img className="rectangle-15" src={rect150} />
      <div className="ellipse-13"></div>
      <div className="ellipse-14"></div>
      <div className="ellipse-15"></div>
      <div className="ellipse-16"></div>
      <div className="ellipse-17"></div>
      <div className="ellipse-18"></div>
      <div className="div3" onClick={handleClick}>ЗАБЫТЫЕ РУССКИЕ ХУДОЖНИКИ </div>
      <img className="rectangle-18" src={rect180} />
      <img className="rectangle-20" src={rect200} />
      <img className="rectangle-19" src={rect190} />
      <img className="rectangle-16" src={rect160} />
      <img className="rectangle-17" src={rect170} />
      <img className="div4" src={div3} />
    </div>
  );
};

export default StartPage;