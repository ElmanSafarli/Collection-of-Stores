import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Components
import Navbar from './include/Navbar';
import Footer from './include/Footer';
import Categories from './include/Categories';
import Contact from './include/Contact';
import FeaturedStores from './include/FeaturedStores';


const Home = () => {
    const { t } = useTranslation();

    const [currentSlide, setCurrentSlide] = useState(0);
    const images = ['https://img.freepik.com/free-photo/black-friday-composition-black-background-with-copy-space_23-2148665573.jpg?t=st=1714674832~exp=1714678432~hmac=299ad6a5ce844fbd8506a4792a9bf806a1d9785a2b795c729f10edb1099597b6&w=1380', 'https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148909973.jpg?t=st=1714674941~exp=1714678541~hmac=d131a2c50166b91dff5596c976839ee17bf2ce3c48948337e01533c18d138b14&w=1060'];
    const totalSlides = images.length;

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentSlide]);

    const showSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % totalSlides);
    };

    const dots = [];
    for (let i = 0; i < totalSlides; i++) {
        dots.push(
            <div
                key={i}
                className={`dot ${currentSlide === i ? 'active' : ''}`}
                onClick={() => showSlide(i)}
            ></div>
        );
    }



    return (
        <div>
            <Navbar />
            <header>
                <div className="header">
                    <div
                        className="header-slider"
                        id="slider"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${images[currentSlide]}')`,
                        }}
                    >
                        <div className="content">
                            <div className="info">
                                <div className="title">{t('homeHeader.item_1')}</div>
                                <div className="text">{t('homeHeader.item_2')}</div>
                                <a href="/stores">{t('homeHeader.item_3')}</a>
                            </div>
                        </div>
                    </div>
                    <div className="dots" id="dots-container">
                        {dots}
                    </div>
                </div>
            </header>

            <Categories />
            <FeaturedStores />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
