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

const FilterStores = () => {

    const { slug } = useParams();

    const { i18n } = useTranslation();

    const [error, setError] = useState(null);
    const [stores, setStores] = useState([]);
    const [subcategory, setSubcategory] = useState([]);

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const server = API

    const getSelectedLanguage = () => {
        const storedLanguage = localStorage.getItem('selectedLanguage');
        return storedLanguage ? storedLanguage : 'en';
    };

    useEffect(() => {
        const locale = getSelectedLanguage();

        axios
            .get(`${server}/api/categories?populate[stores][populate]=*&populate[subcaregories][populate]=*&filters[Slug]=${slug}&locale=${locale}`)
            .then(({ data }) => {
                if (data && data.data && data.data.length > 0) {
                    setStores(data.data[0].attributes.stores.data);
                    setSubcategory(data.data[0].attributes.subcaregories.data);

                } else {
                    setError("No data found for this slug.");
                    console.log(error);
                }
            })
            .catch((error) => setError(error));


    }, [slug, error, i18n.language, server]);

    const truncateText = (text, limit) => {
        if (text.length > limit) {
            return text.substring(0, limit) + '...';
        }
        return text;
    };

    const handleFilterToggle = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    return (
        <section>
            <Navbar />
            <div className='inline'>
                <div className="subcategories">
                    <div className="title">Subcategories</div>
                    <div className="hr"></div>
                    {subcategory.map(({ id, attributes }) => (
                        <div className="subcategory-item" key={id}>
                            <Link to={`/subcategory/${attributes.Slug}`}>
                                {attributes.Name}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="subcategories-mobile">
                    <button onClick={handleFilterToggle}>All subcategories</button>

                    <div className={`header-filter-content ${isFilterOpen ? 'open' : ''}`}>
                        <div className="header-filter-content-top">
                            <button id="filterHeaderClose" onClick={handleFilterToggle}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clipRule="evenodd" />
                                </svg>

                            </button>
                        </div>
                        <ul>
                            {subcategory.map(({ id, attributes }) => (
                                <div className="subcategory-item" key={id}>
                                    <Link to={`/subcategory/${attributes.Slug}`}>
                                        {attributes.Name}
                                    </Link>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="filter-all-products">
                    {stores && stores.length > 0 ? (
                        stores
                            .map(({ id, attributes }, index) => {
                                const storeLogo = attributes.BrandLogo && attributes.BrandLogo.data ? attributes.BrandLogo.data.attributes.url : '';
                                const country = attributes.country && attributes.country.data ? attributes.country.data.attributes.Name : '';
                                const imageFirst = attributes.Image1 && attributes.Image1.data ? attributes.Image1.data.attributes.url : '';

                                return (
                                    <div className="stores-box" key={id}>
                                        <div className="logo"><img src={server + storeLogo} alt="Store Logo" /></div>
                                        <div
                                            className="store-slider"
                                            style={{
                                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('${server + imageFirst}')`,
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
                                                        <Link to={`/store/${attributes.Slug}`}><img src={link} alt="link" /></Link>
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

export default FilterStores;
