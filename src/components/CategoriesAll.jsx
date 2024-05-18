import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import axios from "axios";

import { Link } from "react-router-dom"

// Companents
import Navbar from './include/Navbar';
import Footer from './include/Footer';

const AllCategories = () => {

    const { slug } = useParams();

    const { i18n } = useTranslation();


    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([]);
    const [categoriesImg, setCategoriesImg] = useState([]);

    const server = 'http://localhost:1337'

    const getSelectedLanguage = () => {
        const storedLanguage = localStorage.getItem('selectedLanguage');
        return storedLanguage ? storedLanguage : 'en';
    };

    useEffect(() => {
        const locale = getSelectedLanguage();

        axios
            .get(`${server}/api/categories/?populate=*&locale=${locale}`)
            .then(({ data }) => {
                if (data && data.data && data.data.length > 0) {
                    setCategories(data.data);
                    const images = {};
                    data.data.forEach(({ id, attributes }) => {
                        if (attributes.Image && attributes.Image.data && attributes.Image.data.attributes.url) {
                            images[id] = attributes.Image.data.attributes.url;
                        }
                    });
                    setCategoriesImg(images);
                } else {
                    setError("No data found for this slug.");
                    console.log(error)
                }
            })
            .catch((error) => setError(error));
    }, [slug, i18n.language, error]);

    return (
        <section>
            <Navbar />
            <div className="all-categories-group">
                {categories.map(({ id, attributes }) => (
                    <div className="categories-box" key={id}>
                        <img src={server + categoriesImg[id]} alt="category" />
                        <Link to={`/categories/${attributes.Slug}`}>
                            {attributes.Name}
                            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.8117 8.70711C20.2022 8.31658 20.2022 7.68342 19.8117 7.29289L13.4477 0.928932C13.0572 0.538408 12.4241 0.538408 12.0335 0.928932C11.643 1.31946 11.643 1.95262 12.0335 2.34315L17.6904 8L12.0335 13.6569C11.643 14.0474 11.643 14.6805 12.0335 15.0711C12.4241 15.4616 13.0572 15.4616 13.4477 15.0711L19.8117 8.70711ZM0.699951 9H19.1046V7H0.699951V9Z" fill="white" />
                            </svg>
                        </Link>
                    </div>
                ))}
            </div>
            <Footer />
        </section>
    );
};

export default AllCategories;
