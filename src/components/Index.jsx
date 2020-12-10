import React, { PureComponent } from 'react';
import Header from '../sections/Header.jsx';
import About from '../sections/About.jsx';
import Contact from '../sections/Contact.jsx';
import Footer from '../sections/Footer.jsx';


export default class Index extends PureComponent {
    render() {
        return (
            <>
                <Header />
                <div className="clip-header-path"></div>
                <About />
                <div className="clip-about-path"></div>
                <Contact />
                <Footer />

            </>
        )
    }
}
