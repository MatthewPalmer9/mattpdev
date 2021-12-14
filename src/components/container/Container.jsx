import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import FeaturedReasons from '../sections/featured/FeaturedReasons';
import './container.css';

export default function Container() {
    return (
        <div className="container">
            <Header />
            <FeaturedReasons />
            <Footer />
        </div>
    )
}
