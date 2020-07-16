import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Productitems from './Components/Productitems';
import NotFound from './NotFound'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar';

function RouteConfig() {
    return (
        <div>
            <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/:id" element={<Productitems />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
        </div>
    );
}

export default RouteConfig;