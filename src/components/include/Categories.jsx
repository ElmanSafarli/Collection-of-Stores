import React from 'react';

// Images
import health from '../../assets/Health and Wellness.jpg'
import clothes from '../../assets/clothes.jpg'
import food from '../../assets/food.jpg'


const Categories = () => {
    return (
        <section>
            <div className="categoriesHome">
                <div className="section-title">Categories</div>
                <div className="section-hr"></div>
                <div className="section-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt </div>
                <div className="categories-group">
                    <div className="categories-group-l">
                        <div className="categories-box">
                            <img src={health} alt="category" />
                            <a href="">
                                Health and Wellness
                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8117 8.70711C20.2022 8.31658 20.2022 7.68342 19.8117 7.29289L13.4477 0.928932C13.0572 0.538408 12.4241 0.538408 12.0335 0.928932C11.643 1.31946 11.643 1.95262 12.0335 2.34315L17.6904 8L12.0335 13.6569C11.643 14.0474 11.643 14.6805 12.0335 15.0711C12.4241 15.4616 13.0572 15.4616 13.4477 15.0711L19.8117 8.70711ZM0.699951 9H19.1046V7H0.699951V9Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="categories-group-r">
                        <div className="categories-box">
                            <img src={clothes} alt="category" />
                            <a href="">
                                Clothes
                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8117 8.70711C20.2022 8.31658 20.2022 7.68342 19.8117 7.29289L13.4477 0.928932C13.0572 0.538408 12.4241 0.538408 12.0335 0.928932C11.643 1.31946 11.643 1.95262 12.0335 2.34315L17.6904 8L12.0335 13.6569C11.643 14.0474 11.643 14.6805 12.0335 15.0711C12.4241 15.4616 13.0572 15.4616 13.4477 15.0711L19.8117 8.70711ZM0.699951 9H19.1046V7H0.699951V9Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                        <div className="categories-box">
                            <img src="" alt="category" />
                            <a href="">
                                Electronics
                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8117 8.70711C20.2022 8.31658 20.2022 7.68342 19.8117 7.29289L13.4477 0.928932C13.0572 0.538408 12.4241 0.538408 12.0335 0.928932C11.643 1.31946 11.643 1.95262 12.0335 2.34315L17.6904 8L12.0335 13.6569C11.643 14.0474 11.643 14.6805 12.0335 15.0711C12.4241 15.4616 13.0572 15.4616 13.4477 15.0711L19.8117 8.70711ZM0.699951 9H19.1046V7H0.699951V9Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                        <div className="categories-box">
                            <img src="" alt="category" />
                            <a href="">
                                Fashion
                                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8117 8.70711C20.2022 8.31658 20.2022 7.68342 19.8117 7.29289L13.4477 0.928932C13.0572 0.538408 12.4241 0.538408 12.0335 0.928932C11.643 1.31946 11.643 1.95262 12.0335 2.34315L17.6904 8L12.0335 13.6569C11.643 14.0474 11.643 14.6805 12.0335 15.0711C12.4241 15.4616 13.0572 15.4616 13.4477 15.0711L19.8117 8.70711ZM0.699951 9H19.1046V7H0.699951V9Z" fill="white" />
                                </svg>
                            </a>
                        </div>
                        <div className="categories-box">
                            <img src={food} alt="category" />
                            <a href="">
                                Grocery
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
