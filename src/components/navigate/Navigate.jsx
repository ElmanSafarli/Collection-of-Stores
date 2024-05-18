// AppRouter.jsx

import React from 'react';
import { Route, Routes } from "react-router-dom"


// Components
import Home from '../Home'
import StoreDetail from '../Detail'
import CategoriesAll from '../CategoriesAll'
import FilterStores from '../FilterStores'
import AllStores from '../AllStores'
import CountryStore from '../CountryStore'
import SubCategory from '../SubCategory'
import ContactPage from '../ContactPage'


const Navigate = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stores" element={<AllStores />} />
            <Route path="/store/:slug" element={<StoreDetail />} />
            <Route path="/categories" element={<CategoriesAll />} />
            <Route path="/categories/:slug" element={<FilterStores />} />
            <Route path="/country/:slug" element={<CountryStore />} />
            <Route path="/subcategory/:slug" element={<SubCategory />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    );
};

export default Navigate;