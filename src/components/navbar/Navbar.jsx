import React from 'react';
import './navbar.css';

export default function Navbar() {
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
            </nav>
        </>
    )
}
