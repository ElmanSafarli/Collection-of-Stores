import React from 'react';
import { useTranslation } from 'react-i18next';


const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-l">
                        <img src="" alt="logo" />
                        <p>{t('footer.item_1')}</p>
                    </div>
                    <div className="footer-r">
                        <div className="item">
                            <div className="title"><p>{t('footer.item_2')}</p></div>
                            <ul>
                                <li><a href="/"><p>{t('footer.item_3')}</p></a></li>
                                <li><a href="/"><p>{t('footer.item_4')}</p></a></li>
                                <li><a href="/"><p>{t('footer.item_5')}</p></a></li>
                            </ul>
                        </div>
                        <div className="item">
                            <div className="title"><p>{t('footer.item_6')}</p></div>
                            <ul>
                                <li><p>{t('footer.item_7')}</p></li>
                                <li><p>{t('footer.item_8')}</p></li>
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
