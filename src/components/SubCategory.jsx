import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

// Companents
import Navbar from './include/Navbar';
import Footer from './include/Footer';

// Images
import link from '../assets/external-link.png'

const FeaturedStores = () => {

    const { slug } = useParams();

    const server = 'http://localhost:1337';

    const [error, setError] = useState(null);
    const [stores, setStores] = useState([]);

    useEffect(() => {
        axios
            .get(`${server}/api/subcaregories?populate[stores][populate]=*&filters[Slug]=${slug}`)
            .then(({ data }) => {
                if (data && data.data && data.data.length > 0) {
                    const attributes = data.data[0].attributes.stores.data;
                    setStores(attributes);
                } else {
                    setError("No data found for this slug.");
                    console.log(error);
                }
            })
            .catch((error) => setError(error));
    }, [slug, error]);

    const truncateText = (text, limit) => {
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        }
        return text;
    };

    return (
        <section>
            <Navbar />
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
            <Footer />
        </section>
    );
};

export default FeaturedStores;
