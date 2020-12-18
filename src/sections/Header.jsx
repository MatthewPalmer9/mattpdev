import React, { PureComponent } from 'react';
import selfImg from '../matthewpalmer.jpg';

export default class Header extends PureComponent {
    render() {
        return (
            <div id="header">
                <div className="header--content--container">

                    <div className="header--content--left">
                        <h1>Matthew Ryan Palmer</h1>
                        <div className="hr"></div>
                        <h3>
                            <em>Ruby on Rails Developer</em>
                            <i className="fas fa-code"></i>
                        </h3>

                        <div className="left--content">
                            <img id="self" src={selfImg} alt="Matthew Ryan Palmer"/>
                            <div className="technology--container">
                                <span>Skills / Technologies</span>
                                <div className="skills">
                                    <i className="fab fa-js-square"></i>
                                    <i className="fab fa-css3-alt"></i>
                                    <i className="fab fa-html5"></i>
                                    <i className="fab fa-react"></i>
                                    <img id="redux" src="https://raw.githubusercontent.com/reduxjs/redux/b1f0e4c3beb745294b7c674e30693af0116c7fe8/logo/logo.svg" alt="redux"/>
                                    <i className="fas fa-gem"></i>
                                    <div className="gh">
                                        <i className="fab fa-github"></i>
                                    </div>
                                    <i className="fas fa-code-branch"></i>
                                    <img id="postresql" src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt="postgres"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header--content--right">
                        <div className="business--card">
                                <h1>Contact Me</h1>
                                <div className="hr"></div>
                                <div className="contact--col">
                                    <div className="contact--row">
                                        <i className="fas fa-envelope"></i>
                                        <p>E: matthewpalmer9@outlook.com</p>
                                    </div>
                                    <div className="contact--row">
                                        <i className="fas fa-phone"></i>
                                        <p>C: (512) 579-9802</p>
                                    </div>
                                    <div className="contact--row">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <p>Location: Austin, TX</p>
                                    </div>
                                    <div className="connect--row">
                                        <h2>Connect With Me</h2>
                                        <div className="socials--list">
                                            hello
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
