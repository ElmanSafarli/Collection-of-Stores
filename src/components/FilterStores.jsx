import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import axios from "axios";

import { Link } from "react-router-dom"

// Images
import link from '../assets/external-link.png'

// Companents
import Navbar from './include/Navbar';
import Footer from './include/Footer';

const FilterStores = () => {

    const { slug } = useParams();

    const [error, setError] = useState(null);
    const [stores, setStores] = useState([]);
    const [storesImg, setStoresImg] = useState([]);
    const [storesCountry, setStoresCountry] = useState([]);

    const server = 'http://localhost:1337'

    useEffect(() => {
        axios
            .get(`${server}/api/categories?populate[stores][populate]=*&filters[Slug]=${slug}`)
            .then(({ data }) => {
                if (data && data.data && data.data.length > 0) {
                    setStores(data.data[0].attributes.stores.data);

                    // Set Country name 
                    const countryNames = data.data[0].attributes.stores.data.map(products => {
                        if (products.attributes.countries && products.attributes.countries.data) {
                            return products.attributes.countries.data[0].attributes.Name;
                        } else {
                            return null;
                        }
                    });
                    setStoresCountry(countryNames)

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
                }
            })
            .catch((error) => setError(error));
    }, [slug]);

    return (
        <section>
            <Navbar />
            <div className="filter-all-products">
                {stores && stores.length > 0 ? (
                    stores.map(({ id, attributes }, index) => (
                        <div className="stores-box" key={id}>
                            <div className="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png" alt="Store Logo" /></div>
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
                                            <div className="country">{storesCountry[index]}</div>
                                        </div>
                                        <div className="link">
                                            <Link to={`/store/${attributes.Slug}`}><img src={link} alt="link" /></Link>
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
            <Footer />
        </section>
    );
};

export default FilterStores;
