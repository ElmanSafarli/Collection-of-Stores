import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import axios from "axios";

// Companents
import Navbar from './include/Navbar';
import Footer from './include/Footer';

const StoreDetail = () => {

    const { slug } = useParams();

    const { t, i18n } = useTranslation();

    const [error, setError] = useState(null);

    const server = 'http://localhost:1337';

    const [store, setStore] = useState([]);
    const [country, setCountry] = useState([]);
    const [products, setProducts] = useState([]);
    const [productImg, setProductImg] = useState([]);
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');

    const [dataFetched, setDataFetched] = useState(false);

    // State to manage the main image URL
    const [mainImage, setMainImage] = useState(server + image1);

    const handleImageClick = (imageUrl) => {
        setMainImage(imageUrl);
    };

    // Function to handle image button clicks and update the main image
    useEffect(() => {
        setMainImage(server + image1);
    }, [image1, server]);

    const debounce = (func, delay) => {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => func(...args), delay);
        };
    };
    const getSelectedLanguage = () => {
        const storedLanguage = localStorage.getItem('selectedLanguage');
        return storedLanguage ? storedLanguage : 'en';
    };

    const fetchData = debounce(() => {
        const locale = getSelectedLanguage();

        axios
            .get(`${server}/api/stores/?populate=*&filters[Slug]=${slug}&locale=${locale}`)
            .then(({ data }) => {
                if (data && data.data && data.data.length > 0) {
                    const attributes = data.data[0].attributes;
                    setStore(attributes);
                    setCountry(attributes.countries.data[0].attributes.Name)

                } else {
                    setError("No data found for this slug.");
                }
            })
            .catch((error) => setError(error));

        axios
            .get(`${server}/api/stores/?populate=*&filters[Slug]=${slug}&locale=${locale}`)
            .then(({ data }) => {
                if (data && data.data && data.data.length > 0) {
                    const attributes = data.data[0].attributes;

                    // Extract and set image URLs
                    setImage1(attributes.Image1.data.attributes.url);
                    setImage2(attributes.Image2.data.attributes.url);
                    setImage3(attributes.Image3.data.attributes.url);
                    setImage4(attributes.Image4.data.attributes.url);

                    // Set mainImage initially to Image1 URL
                    setMainImage(attributes.Image1.data.attributes.url);

                    setDataFetched(true);

                } else {
                    setError("No data found for this slug.");
                }
            })
            .catch((error) => setError(error));

        axios
            .get(`${server}/api/stores/?populate[products][populate]=Image&filters[Slug]=${slug}&locale=${locale}`)
            .then(({ data }) => {
                if (data && data.data && data.data.length > 0) {
                    const attributes = data.data[0].attributes;

                    const productsData = attributes.products.data

                    setProducts(productsData)
                    // Access ImageBG data using indexes
                    const imageUrls = productsData.map(products => {
                        if (products.attributes.Image && products.attributes.Image.data) {
                            return products.attributes.Image.data.attributes.url;
                        } else {
                            return null;
                        }
                    });
                    setProductImg(imageUrls);
                } else {
                    setError("No data found for this slug.");
                    console.log(error);
                }
            })
            .catch((error) => setError(error));

    }, 500);

    useEffect(() => {
        fetchData();
    }, [slug, i18n.language]);

    return (
        <section>
            <Navbar />
            <div className="detailPage">
                <div className="detailPage-content">
                    <div className="detailPage-top">
                        <div className="detailPage-top-l">
                            <div className="img-group">
                                <button onClick={() => handleImageClick(`${server + image1}`)}><img src={server + image1} alt="store" /></button>
                                <button onClick={() => handleImageClick(`${server + image2}`)}><img src={server + image2} alt="store" /></button>
                                <button onClick={() => handleImageClick(`${server + image3}`)}><img src={server + image3} alt="store" /></button>
                                <button onClick={() => handleImageClick(`${server + image4}`)}><img src={server + image4} alt="store" /></button>
                            </div>
                            <div className="img-main"><img src={mainImage} alt="store" /></div>
                        </div>
                        <div className="detailPage-top-r">
                            <p>Brand: <span>{store.Brand}</span></p>
                            <p>Country: <span>{country}</span></p>
                            <div className="title">{store.Name}</div>
                            <div className="slogan">{store.Slogan}</div>
                            <div className="hr-1"></div>
                            <p>Address: <span>{store.Adress} </span></p>
                            <p>Phone: <span>{store.Phone}</span></p>
                            <p>WhatsApp: <span>{store.WhatsApp}</span></p>
                            <p>Instagram: <span><a href="/">{store.Facebook}</a></span></p>
                            <p>Facebook: <span><a href="/">{store.Instagram}</a></span></p>
                            <p>Website: <span><a href="/">{store.Website}</a></span></p>
                            <div className="hr-2"></div>
                        </div>
                    </div>
                    <div className="description">
                        <div className="hr">
                            <div className="name">{t('detailPage.item_1')}</div>
                            <div className="line-1"></div>
                            <div className="line-2"></div>
                        </div>
                        <div className="text">{store.Text1}</div>
                        <div className="text">{store.Text2}</div>
                    </div>
                    <div className="products">
                        <div className="title">{t('detailPage.item_2')}</div>
                        <div className="products-group">
                            {products && products.length > 0 ? (
                                products.map(({ id, attributes }, index) => (
                                    <div className="product" key={id}>
                                        <div className="image"><img src={server + productImg[index]} alt="product" /></div>
                                        <div className="name">{attributes.Name}</div>
                                        <div className="price">${attributes.Price}</div>
                                    </div>
                                ))
                            ) : (
                                <p>No data available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default StoreDetail;
