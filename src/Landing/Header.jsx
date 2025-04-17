import React from "react";
import "./Header.css";

export const Header = () => {
    return (
        <div className="header">
            <div className="frame">
                <div className="div-wrapper">
                    <div className="element">текст</div>
                </div>

                <div className="div-wrapper">
                    <div className="element">текст</div>
                </div>

                <div className="div-wrapper">
                    <div className="text-wrapper">ТЕКСТ</div>
                </div>

                <div className="div-wrapper">
                    <div className="element">текст</div>
                </div>

                <div className="div-wrapper">
                    <div className="element">текст</div>
                </div>
            </div>
        </div>
    );
};

export default Header;