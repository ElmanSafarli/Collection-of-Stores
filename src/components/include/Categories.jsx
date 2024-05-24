import React from 'react';
import { useTranslation } from 'react-i18next';

// Images
import health from '../../assets/Health and Wellness.jpg'
import clothes from '../../assets/clothes.jpg'
import food from '../../assets/food.jpg'
import fashion from '../../assets/fashion.jpg'
import electronic from '../../assets/electronics.png'


const Categories = () => {
    const { t } = useTranslation();
    return (
        <section>
            <div className="categoriesHome">
                <div className="section-title">{t('homeCategories.item_1')}</div>
                <div className="section-hr"></div>
                <div className="section-text">{t('homeCategories.item_2')}</div>
                <div className="categories-group">
                    <div className="categories-group-l">
                        <div className="categories-box">
                            <img src={health} alt="category" />
                            <a href="categories/health">
                                {t('homeCategories.item_3')}
                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8117 8.70711C20.2022 8.31658 20.2022 7.68342 19.8117 7.29289L13.4477 0.928932C13.0572 0.538408 12.4241 0.538408 12.0335 0.928932C11.643 1.31946 11.643 1.95262 12.0335 2.34315L17.6904 8L12.0335 13.6569C11.643 14.0474 11.643 14.6805 12.0335 15.0711C12.4241 15.4616 13.0572 15.4616 13.4477 15.0711L19.8117 8.70711ZM0.699951 9H19.1046V7H0.699951V9Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="categories-group-r">
                        <div className="categories-box">
                            <img src={clothes} alt="category" />
                            <a href="categories/clothes">
                                {t('homeCategories.item_4')}
                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8117 8.70711C20.2022 8.31658 20.2022 7.68342 19.8117 7.29289L13.4477 0.928932C13.0572 0.538408 12.4241 0.538408 12.0335 0.928932C11.643 1.31946 11.643 1.95262 12.0335 2.34315L17.6904 8L12.0335 13.6569C11.643 14.0474 11.643 14.6805 12.0335 15.0711C12.4241 15.4616 13.0572 15.4616 13.4477 15.0711L19.8117 8.70711ZM0.699951 9H19.1046V7H0.699951V9Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                        <div className="categories-box">
                            <img src={electronic} alt="category" />
                            <a href="categories/electronics">
                                {t('homeCategories.item_5')}
                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8117 8.70711C20.2022 8.31658 20.2022 7.68342 19.8117 7.29289L13.4477 0.928932C13.0572 0.538408 12.4241 0.538408 12.0335 0.928932C11.643 1.31946 11.643 1.95262 12.0335 2.34315L17.6904 8L12.0335 13.6569C11.643 14.0474 11.643 14.6805 12.0335 15.0711C12.4241 15.4616 13.0572 15.4616 13.4477 15.0711L19.8117 8.70711ZM0.699951 9H19.1046V7H0.699951V9Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                        <div className="categories-box">
                            <img src={fashion} alt="category" />
                            <a href="categories/fashion">
                                {t('homeCategories.item_6')}
                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8117 8.70711C20.2022 8.31658 20.2022 7.68342 19.8117 7.29289L13.4477 0.928932C13.0572 0.538408 12.4241 0.538408 12.0335 0.928932C11.643 1.31946 11.643 1.95262 12.0335 2.34315L17.6904 8L12.0335 13.6569C11.643 14.0474 11.643 14.6805 12.0335 15.0711C12.4241 15.4616 13.0572 15.4616 13.4477 15.0711L19.8117 8.70711ZM0.699951 9H19.1046V7H0.699951V9Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                        <div className="categories-box">
                            <img src={food} alt="category" />
                            <a href="categories/food">
                                {t('homeCategories.item_7')}
                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8117 8.70711C20.2022 8.31658 20.2022 7.68342 19.8117 7.29289L13.4477 0.928932C13.0572 0.538408 12.4241 0.538408 12.0335 0.928932C11.643 1.31946 11.643 1.95262 12.0335 2.34315L17.6904 8L12.0335 13.6569C11.643 14.0474 11.643 14.6805 12.0335 15.0711C12.4241 15.4616 13.0572 15.4616 13.4477 15.0711L19.8117 8.70711ZM0.699951 9H19.1046V7H0.699951V9Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;
