import React from 'react';
import { useTranslation } from 'react-i18next';

// Images
import location from '../assets/location.png'
import support from '../assets/support.png'
import Navbar from './include/Navbar';
import Footer from './include/Footer';

const ContactPage = () => {
    const { t } = useTranslation();
    return (
        <section>
            <Navbar />
            <div className="contactUs">
                <div className="contactUs-content">
                    <div className="contactUs-title">{t('contact.item_1')}</div>
                    <div className="contactUs-info">
                        <div className="contactUs-info-items">
                            <div className="contactUs-info-item">
                                <div className="contactUs-info-item-icon"><img src={location} alt="location" /></div>
                                <div className="contactUs-info-item-r">
                                    <div className="contactUs-info-item-title">{t('contact.item_2')}</div>
                                    <div className="contactUs-info-item-value">{t('contact.item_3')}</div>
                                </div>
                            </div>
                            <div className="contactUs-info-item">
                                <div className="contactUs-info-item-icon"><img src={support} alt="support" /></div>
                                <div className="contactUs-info-item-r">
                                    <div className="contactUs-info-item-title">{t('contact.item_4')}</div>
                                    <div className="contactUs-info-item-value"><a href="tel:+000000000">{t('contact.item_5')}</a></div>
                                    <div className="contactUs-info-item-value"><a href="mailto: info@example.com">{t('contact.item_6')}</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="contactUs-map"><iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2saz!4v1712144516656!5m2!1sru!2saz"
                            width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" title="map"></iframe></div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default ContactPage;
