import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

import axios from "axios";
import LanguageSwitcher from './LanguageSwitcher';

import { API } from '../../constant';

const Navbar = () => {
    const { slug } = useParams();

    const { t, i18n } = useTranslation();

    const [error, setError] = useState(null);
    const [country, setCountry] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const getSelectedLanguage = () => {
        const storedLanguage = localStorage.getItem('selectedLanguage');
        return storedLanguage ? storedLanguage : 'en';
    };

    const server = API

    useEffect(() => {
        const locale = getSelectedLanguage();

        axios
            .get(`${server}/api/countries?populate=*&locale=${locale}`)
            .then(({ data }) => {
                if (data && data.data && data.data.length > 0) {
                    setCountry(data.data);

                } else {
                    setError("No data found for this slug.");
                    console.log(error)
                }
            })
            .catch((error) => setError(error));


    }, [slug, error, i18n.language, server]);


    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const handleFilterToggle = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    return (
        <nav>
            <div className="nav-top">
                <div className="nav-logo"><img src="" alt="logo" /></div>
                <div className="nav-items">
                    <ul>
                        <li><a href="/">{t('navBar.item_1')}</a></li>
                        <li> <a href="/categories">{t('navBar.item_2')}</a></li>
                        <li>
                            <div className="navDropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                                <a href="/">
                                    {t('navBar.item_4')}
                                </a>
                                {isOpen && (
                                    <div className="navDropdown-content">
                                        <div className="servicesList">
                                            <ul className="servicesList__ul">
                                                <li>{t('featuresAndServices.paymentsSystem')}</li>
                                                <li>{t('featuresAndServices.centersManagementSystem')}</li>
                                                <li>{t('featuresAndServices.buildingManagementSystem')}</li>
                                                <li>{t('featuresAndServices.appointmentsSystem')}</li>
                                                <li>{t('featuresAndServices.accountingCloudSystems')}</li>
                                                <li>{t('featuresAndServices.posCloudSystems')}</li>
                                                <li>{t('featuresAndServices.calendar')}</li>
                                                <li>{t('featuresAndServices.remindersSystem')}</li>
                                                <li>{t('featuresAndServices.tasksManagementSystem')}</li>
                                                <li>{t('featuresAndServices.softwaresCloud')}</li>
                                                <li>{t('featuresAndServices.toolsCloud')}</li>
                                                <li>{t('featuresAndServices.socialMediaManagement')}</li>
                                                <li>{t('featuresAndServices.emailsManagement')}</li>
                                                <li>{t('featuresAndServices.ocrSystems')}</li>
                                                <li>{t('featuresAndServices.documentsConverter')}</li>
                                                <li>{t('featuresAndServices.onlineStoreSystems')}</li>
                                                <li>{t('featuresAndServices.sponsorsServices')}</li>
                                                <li>{t('featuresAndServices.communicationsSystems')}</li>
                                                <li>{t('featuresAndServices.paymentsByPhoneSystem')}</li>
                                                <li>{t('featuresAndServices.govermentIndex')}</li>
                                                <li>{t('featuresAndServices.countriesInfo')}</li>
                                                <li>{t('featuresAndServices.phoneIndex')}</li>
                                                <li>{t('featuresAndServices.virtualExpoAndExhibition')}</li>
                                                <li>{t('featuresAndServices.expensesSystem')}</li>
                                                <li>{t('featuresAndServices.personalExpensesSystem')}</li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li> <a href="/categories">{t('navBar.item_3')}</a></li>
                    </ul>
                </div>
                <div className="nav-top-r">
                    <LanguageSwitcher />
                    <div className="nav-login">
                        <a href="/login">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                    d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                                    clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    <div className="sidebar">
                        <input type="checkbox" id="toggleSidebar" />
                        <label className="hamburger" htmlFor="toggleSidebar">
                            <svg viewBox="0 0 32 32">
                                <path className="line line-top-bottom"
                                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22">
                                </path>
                                <path className="line" d="M7 16 27 16"></path>
                            </svg>
                        </label>
                        <div className="sidebar-content">
                            <div className="sidebar-logo">
                                <img src="./assets/logo.png" alt="logo" />
                            </div>
                            <div className="sidebar-items">
                                <ul>
                                    <li><a href="/">{t('navBar.item_1')}</a></li>
                                    <li><a href="/categories">{t('navBar.item_2')}</a></li>
                                    <li><a href="/contact">{t('navBar.item_3')}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="nav-bottom">
                <div className="countries">
                    <button id="filterHeader" onClick={handleFilterToggle}>
                        <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.3 0H1.7C0.761116 0 0 0.761116 0 1.7C0 2.63888 0.761117 3.4 1.7 3.4H22.3C23.2389 3.4 24 2.63888 24 1.7C24 0.761116 23.2389 0 22.3 0Z"
                                fill="black" />
                            <path
                                d="M22.3 6.5H1.7C0.761116 6.5 0 7.26112 0 8.2C0 9.13888 0.761117 9.9 1.7 9.9H22.3C23.2389 9.9 24 9.13888 24 8.2C24 7.26112 23.2389 6.5 22.3 6.5Z"
                                fill="black" />
                            <path
                                d="M22.3 13H1.7C0.761116 13 0 13.7611 0 14.7C0 15.6389 0.761117 16.4 1.7 16.4H22.3C23.2389 16.4 24 15.6389 24 14.7C24 13.7611 23.2389 13 22.3 13Z"
                                fill="black" />
                        </svg>
                        {t('navBarBottom.item_1')}
                    </button>
                    <div className={`header-filter-content ${isFilterOpen ? 'open' : ''}`}>
                        <div className="header-filter-content-top">
                            <button id="filterHeaderClose" onClick={handleFilterToggle}>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clipRule="evenodd" />
                                </svg>

                            </button>
                        </div>
                        <ul>
                            {country.map(({ id, attributes }) => (
                                <li key={id}><Link to={`/country/${attributes.Slug}`}>{attributes.Name}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="search">
                    <form action="">
                        <button type="submit">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                        <input type="text" placeholder={t('navBarBottom.item_2')} />
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
