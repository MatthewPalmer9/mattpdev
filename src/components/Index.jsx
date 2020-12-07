import React, { PureComponent } from 'react';
import Header from '../sections/Header.jsx';
import Contact from '../sections/Contact.jsx';


export default class Index extends PureComponent {
    render() {
        return (
            <>
                <Header />
                <div className="clip-path-left"></div>
                <Contact />
            </>
        )
    }
}
