import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Images
import arImg from '../../assets/ar.png'
import enImg from '../../assets/en.png'

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState(enImg);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage === 'ar') {
            setSelectedImg(arImg);
            i18n.changeLanguage(savedLanguage);
        } else {
            setSelectedImg(enImg);
            i18n.changeLanguage('en');
        }
    }, [i18n]);

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setSelectedImg(language === 'en' ? enImg : arImg);

        localStorage.setItem('selectedLanguage', language);
        localStorage.setItem('selectedImage', language === 'en' ? enImg : arImg);
    };
    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageSelect = (language) => {
        changeLanguage(language);
        handleDropdownToggle();
    };

    return (
        <div className="language-switcher dropdown">
            <div className="caption" onClick={handleDropdownToggle}>
                <img src={selectedImg} alt="Language" />
                <span>{i18n.language.toUpperCase()}</span>
            </div>
            <div className={`list ${isOpen ? 'open-lg' : ''}`}>
                <div className="item" onClick={() => handleLanguageSelect('en')}>
                    <img src={enImg} alt="EN" />
                    <span>EN</span>
                </div>
                <div className="item" onClick={() => handleLanguageSelect('ar')}>
                    <img src={arImg} alt="AR" />
                    <span>AR</span>
                </div>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
