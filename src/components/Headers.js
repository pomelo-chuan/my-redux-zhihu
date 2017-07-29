import React from 'react';
import {
    Link
} from 'react-router-dom';

const Headers = () => {
    return (
        <div className="row header">
            <div className="section">
                <nav>
                    <a href="/" className="logo">
                        <img src="./images/daily.png" alt="Logo" />
                    </a>
                    <label htmlFor="menu-toggle" id="menu-toggle-label">
                    </label>
                    <input id="menu-toggle" type="checkbox" />
                    <div className="icon-menu"></div>
                    <ul className="menu">
                        <li>
                            <Link to="/">NEWS</Link>
                        </li>
                        <li>
                            <Link to="/about">ABOUT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Headers;