import React from 'react';

export default function Header() {

    
    return (
        <header className="header sticky">
            <div className="brand">
                <a href="#top">Matt<span className="brand-p">P</span>Dev</a>
                <ion-icon className="brand-icon" name="code-slash"></ion-icon>
            </div>
            <nav className="main-nav">
                <ul className="main-nav-list">
                    <li>
                        <a className="main-nav-link" href="#about">About</a>
                    </li>
                    <li>
                        <a className="main-nav-link" href="#experience">Experience</a>
                    </li>
                    <li>
                        <a className="main-nav-link" href="#projects">Projects</a>
                    </li>
                    <li>
                        <a className="main-nav-link" href="/">Testimonials</a>
                    </li>
                    <li>
                        <a className="main-nav-link" href="/">Contact</a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer" className="main-nav-link nav-cta" href="https://docs.google.com/document/d/1yuXgihAsPcb3lwrUAWItfwbs_Se54S_Hr8WxQ7irF40">
                            Resume
                            <div className="icon">
                                <ion-icon name="exit-outline"></ion-icon>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
