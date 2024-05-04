import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-l">
                        <img src="" alt="logo" />
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt </p>
                    </div>
                    <div className="footer-r">
                        <div className="item">
                            <div className="title">Useful links</div>
                            <ul>
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Contact us</a></li>
                                <li><a href="/">Categories</a></li>
                            </ul>
                        </div>
                        <div className="item">
                            <div className="title">Contact Information</div>
                            <ul>
                                <li>América, Amerigo, Emery,<br /> Aimery, Amaris</li>
                                <li>+999 77 777 77 77</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-hr"></div>
                <div className="footer-bottom">
                    <p>© Compnay Name 2024</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
