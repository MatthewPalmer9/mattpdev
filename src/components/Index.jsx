import React, { PureComponent } from 'react';
import Header from '../sections/Header.jsx';
import About from '../sections/About.jsx';
import Skills from '../sections/Skills.jsx';
import Projects from '../sections/Projects.jsx';
import Contact from '../sections/Contact.jsx';
import Footer from '../sections/Footer.jsx';


export default class Index extends PureComponent {
    render() {
        return (
            <>
                <Header />
                <div className="clip-right-path"></div>
                <About />
                <div className="clip-left-path"></div>
                <Skills />
                <div className="clip-background">
                    <div className="clip-left-reverse-path"></div>
                </div>
                <Projects />
                <Contact />
                <Footer />

            </>
        )
    }
}
