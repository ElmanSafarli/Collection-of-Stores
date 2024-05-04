import React from 'react';

// Images
// import location from '../../assets/images/location.png'
// import support from '../../assets/images/support.png'

const Contact = () => {
    return (
        <section>
            <div className="contactUs">
                <div className="contactUs-content">
                    <div className="contactUs-title">Contact us</div>
                    <div className="contactUs-info">
                        <div className="contactUs-info-items">
                            <div className="contactUs-info-item">
                                <div className="contactUs-info-item-icon"><img src='{location}' alt="location" /></div>
                                <div className="contactUs-info-item-r">
                                    <div className="contactUs-info-item-title">Our address</div>
                                    <div className="contactUs-info-item-value">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit,</div>
                                </div>
                            </div>
                            <div className="contactUs-info-item">
                                <div className="contactUs-info-item-icon"><img src='{support}' alt="support" /></div>
                                <div className="contactUs-info-item-r">
                                    <div className="contactUs-info-item-title">Contact information</div>
                                    <div className="contactUs-info-item-value"><a href="">Mobile : +900 00 000 77 00</a></div>
                                    <div className="contactUs-info-item-value"><a href="">Mail : info@example.com</a></div>
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
        </section>
    );
};

export default Contact;
