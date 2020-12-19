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
                {console.log("%c If you can read this, you're awesome! ;)", "background: black; color: turquoise; padding: 20px 30px; font-size: 16px; text-shadow: 0 0 5px turquoise")}
            </>
        )
    }
}
