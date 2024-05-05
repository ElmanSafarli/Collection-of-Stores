import React, { useEffect, useState } from 'react';

import axios from "axios";

// Images
import link from '../../assets/external-link.png'

const FeaturedStores = () => {

    const server = 'http://localhost:1337';

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
                    console.log(error);
                }
            })
            .catch((error) => setError(error));
    }, [error]);

    const truncateText = (text, limit) => {
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        }
        return text;
    };

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
                            .map(({ id, attributes }) => {
                                const firstImage = attributes.Image1.data.attributes.url;
                                const storeLogo = attributes.BrandLogo.data.attributes.url;
                                const country = attributes.country && attributes.country.data ? attributes.country.data.attributes.Name : '';

                                return (
                                    <div className="stores-box" key={id}>
                                        <div className="logo"><img src={server + storeLogo} alt="Store Logo" /></div>
                                        <div
                                            className="store-slider"
                                            id="storeSlider"
                                            style={{
                                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${server + firstImage}')`,
                                            }}
                                        >
                                        </div>
                                        <div className="store-info">
                                            <div className="content">
                                                <div className="top">
                                                    <div className="">
                                                        <div className="title">{attributes.Name}</div>
                                                        <div className="country">{country}</div>
                                                    </div>
                                                    <div className="link">
                                                        <a href={`/store/${attributes.Slug}`}><img src={link} alt="link" /></a>
                                                    </div>
                                                </div>
                                                <div className="text">{truncateText(attributes.Text1, 140)}</div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                    ) : (
                        <p>No data available.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default FeaturedStores;
