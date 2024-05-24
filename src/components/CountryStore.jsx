import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import axios from "axios";

import { Link } from "react-router-dom"

// Images
import link from '../assets/external-link.png'

// Companents
import Navbar from './include/Navbar';
import Footer from './include/Footer';

import { API } from '../constant';

const FilterCountryStores = () => {

    const { slug } = useParams();

    const { i18n } = useTranslation();

    const [error, setError] = useState(null);
    const [stores, setStores] = useState([]);
    const [storesImg, setStoresImg] = useState([]);
    const [storesCountry, setStoresCountry] = useState([]);

    const server = API

    const getSelectedLanguage = () => {
        const storedLanguage = localStorage.getItem('selectedLanguage');
        return storedLanguage ? storedLanguage : 'en';
    };

    useEffect(() => {
        const locale = getSelectedLanguage();

        axios
            .get(`${server}/api/countries?populate[stores][populate]=*&filters[Slug]=${slug}&locale=${locale}`)
            .then(({ data }) => {
                if (data && data.data && data.data.length > 0) {
                    setStores(data.data[0].attributes.stores.data);


                    setStoresCountry(data.data[0].attributes.Name)

                    // Access ImageBG data using indexes
                    const imageUrls = data.data[0].attributes.stores.data.map(products => {
                        if (products.attributes.Image1 && products.attributes.Image1.data) {
                            return products.attributes.Image1.data.attributes.url;
                        } else {
                            return null;
                        }
                    });
                    setStoresImg(imageUrls);

                } else {
                    setError("No data found for this slug.");
                    console.log(error)
                }
            })
            .catch((error) => setError(error));
    }, [slug, error, i18n.language, server]);

    return (
        <section>
            <Navbar />
            <div className="filter-all-products">
                {stores && stores.length > 0 ? (
                    stores
                        .map(({ id, attributes }, index) => {
                            const storeLogo = attributes.BrandLogo && attributes.BrandLogo.data ? attributes.BrandLogo.data.attributes.url : '';
                            return (
                                <div className="stores-box" key={id}>
                                    <div className="logo"><img src={server + storeLogo} alt="Store Logo" /></div>
                                    <div
                                        className="store-slider"
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${server + storesImg[index]}')`,
                                        }}
                                    >
                                    </div>
                                    <div className="store-info">
                                        <div className="content">
                                            <div className="top">
                                                <div className="">
                                                    <div className="title">{attributes.Name}</div>
                                                    <div className="country">{storesCountry}</div>
                                                </div>
                                                <div className="link">
                                                    <Link to={`/store/${attributes.Slug}`}><img src={link} alt="link" /></Link>
                                                </div>
                                            </div>
                                            <div className="text">{attributes.Text1}</div>
                                        </div>
                                    </div>
                                </div>
                            );

                        })
                ) : (
                    <p>No data available.</p>
                )}
            </div>
            <Footer />
        </section>
    );
};

export default FilterCountryStores;
