import React from "react";
import "./Header.css";
import ellipse from './images/Ellipse_up.png'

export const Header = () => {
    return (
        <div className="header">
            <div className="upper_ellipse">
                <img src={ellipse} />
            </div>
           <div className="div-wrapper">
                <div className="text-wrapper">ЗАБЫТЫЕ РУССКИЕ ХУДОЖНИКИ</div>
            </div>
        </div>
    );
};

export default Header;