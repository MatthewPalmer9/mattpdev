import React from 'react';
import './navbar.css';

export default function Navbar() {

    const toggleMenu = () => {
        const bar1 = document.querySelector(".bar1");
        const bar2 = document.querySelector(".bar2");
        const bar3 = document.querySelector(".bar3");
        const menu = document.querySelector(".mobile-dropdown");

        bar1.classList.toggle("active");
        bar2.classList.toggle("active");
        bar3.classList.toggle("active");
        menu.classList.toggle("active");
    };

    return (
        <>
            <nav className="navbar">
                <div className="brand">
                    <div>MattPDev</div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="brand-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                </div>
                <ul className="nav-ul">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                    <li>Resume</li>
                </ul>
                <div onClick={toggleMenu} className="mobile-menu">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <div className="mobile-dropdown">
                    <ul className="mobile-ul">
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                        <li>Resume</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
