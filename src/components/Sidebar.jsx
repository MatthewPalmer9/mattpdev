import React from 'react';
import img from '../images/me.jpg';

export default function Sidebar() {
    return (
        <div id="sidebar">
            <img id="matt" src={img} alt="Matthew Palmer" />
            <div className="links">
                <a target="_blank" href="https://www.linkedin.com/in/matthewpalmer9" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a target="_blank" href="https://www.github.com/matthewpalmer9" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a target="_blank" href="mailto:matthewpalmer9@outlook.com" rel="noopener noreferrer">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </div>
    )
}
