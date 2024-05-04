import React, { useEffect, useState } from 'react';

import axios from "axios";

// Images
import link from '../../assets/external-link.png'

const FeaturedStores = () => {

    const server = 'http://localhost:1337';

    const [currentSlide, setCurrentSlide] = useState(0);
    const images = ['https://img.freepik.com/free-photo/black-friday-composition-black-background-with-copy-space_23-2148665573.jpg?t=st=1714674832~exp=1714678432~hmac=299ad6a5ce844fbd8506a4792a9bf806a1d9785a2b795c729f10edb1099597b6&w=1380', 'https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148909973.jpg?t=st=1714674941~exp=1714678541~hmac=d131a2c50166b91dff5596c976839ee17bf2ce3c48948337e01533c18d138b14&w=1060'];
    const totalSlides = images.length;

    const [error, setError] = useState(null);
    const [stores, setStores] = useState([]);

    useEffect(() => {
        axios
            .get(`${server}/api/stores/?populate=*`)
            .then(({ data }) => {
                if (data && data.data && data.data.length > 0) {
                    const attributes = data.data;
                    setStores(attributes);
                } else {
                    setError("No data found for this slug.");
                }
            })
            .catch((error) => setError(error));
    }, []);


    const showSlide = (index) => {
        setCurrentSlide(index);
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
        <section>
            <div className="featuredHome">
                <div className="section-title">Features Stores</div>
                <div className="section-hr"></div>
                <div className="section-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt </div>
                <div className="stores-box-group">
                    {stores && stores.length > 0 ? (
                        stores
                            .filter(({ attributes }) => attributes.Featured)
                            .map(({ id, attributes }) => (
                                <div className="stores-box" key={id}>
                                    <div className="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" alt="Store Logo" /></div>
                                    <div
                                        className="store-slider"
                                        id="storeSlider"
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${images[currentSlide]}')`,
                                        }}
                                    >
                                    </div>
                                    <div className="dots" id="dots-container">
                                        {dots}
                                    </div>
                                    <div className="store-info">
                                        <div className="content">
                                            <div className="top">
                                                <div className="">
                                                    <div className="title">{attributes.Name}</div>
                                                    <div className="country">{attributes.Featured}</div>
                                                </div>
                                                <div className="link">
                                                    <a href={`/store/${attributes.Slug}`}><img src={link} alt="link" /></a>
                                                </div>
                                            </div>
                                            <div className="text">{attributes.Text1}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                    ) : (
                        <p>No data available.</p>
                    )}

                </div>
            </div>
        </section>
    );
};

export default FeaturedStores;
