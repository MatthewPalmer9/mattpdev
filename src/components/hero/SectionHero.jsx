import React from 'react';

export default function SectionHero() {

    return (
        <section className="section-hero">
            <div className="hero">
                <div className="hero-text-box">
                    <h1 className="hero-primary">People work better together</h1>
                    <p className="hero-description">
                        The best way to <strong>get things done</strong> is with 
                        a reliable team you can count on, and I would be delighted to be <strong>part of yours.</strong>
                    </p>
                    <div className="hero-btns">
                        <button className="hero-btn">
                            <a href="/">Contact Me</a>
                        </button>
                        <button className="hero-btn cta">
                            <a href="#about">Learn more &darr;</a>
                        </button>
                    </div>
                    <div className="technologies">
                        <div className="technology js">
                            <ion-icon name="logo-javascript"></ion-icon>
                        </div>
                        <div className="technology nodejs">
                            <ion-icon name="logo-nodejs"></ion-icon>
                        </div>
                        <div className="technology html5">
                            <ion-icon name="logo-html5"></ion-icon>
                        </div>
                        <div className="technology css3">
                            <ion-icon name="logo-css3"></ion-icon>
                        </div>
                        <div className="technology react">
                            <ion-icon name="logo-react"></ion-icon>
                        </div>
                        <div className="technology sass">
                            <ion-icon name="logo-sass"></ion-icon>
                        </div>
                        <div className="technology docker">
                            <ion-icon name="logo-docker"></ion-icon>
                        </div>
                        <div className="technology">
                            <ion-icon name="logo-github"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className="hero-interaction-box">
                    <div className="box-container">
                        <div className="navbar">
                            <div className="brand">
                                HOVER ME LLC
                            </div>
                            <ul className="box-list">
                                <li className="box-list-item">.mattpdev()</li>
                                <li className="box-list-item">.loves()</li>
                                <li className="box-list-item">.to()</li>
                                <li className="box-list-item">.design()</li>
                                <li className="box-list-item">.beautiful()</li>
                                <li className="box-list-item">.layouts()</li>
                            </ul>
                        </div>
                        <div className="inner-container">
                            <div className="frame">
                                <ion-icon name="person-circle-outline"></ion-icon>
                                <div className="description-lines">
                                    <div className="line-sm color-red"></div>
                                    <div className="line-md color-orange"></div>
                                    <div className="line-lg color-yellow"></div>
                                    <div className="line-sm color-green"></div>
                                </div>
                                <div className="description-lines">
                                    <div className="line-md color-blue"></div>
                                    <div className="line-lg color-purple"></div>
                                    <div className="line-sm color-violet"></div>
                                    <div className="line-sm color-red"></div>
                                </div>
                                <div className="description-lines">
                                    <div className="line-md color-orange"></div>
                                    <div className="line-sm color-yellow"></div>
                                    <div className="line-lg color-green"></div>
                                    <div className="line-sm color-blue"></div>
                                </div>
                            </div>
                            <div className="frame no-border">
                                <h1>{'<h1> Hello! </h1>'}</h1>
                                <div className="text">
                                    <ul>
                                        <li>
                                            <span>
                                                <ion-icon name="checkmark-done-outline"></ion-icon>
                                            </span>
                                            <div className="color-red line-xlg"></div>
                                        </li>
                                        <li>
                                            <span>
                                                <ion-icon name="checkmark-done-outline"></ion-icon>
                                            </span>
                                            <div className="color-orange line-xlg"></div>
                                        </li>
                                        <li>
                                            <span>
                                                <ion-icon name="checkmark-done-outline"></ion-icon>
                                            </span>
                                            <div className="color-yellow line-xlg"></div>
                                        </li>
                                        <li>
                                            <span>
                                                <ion-icon name="checkmark-done-outline"></ion-icon>
                                            </span>
                                            <div className="color-green line-xlg"></div>
                                        </li>
                                        <li>
                                            <span>
                                                <ion-icon name="checkmark-done-outline"></ion-icon>
                                            </span>
                                            <div className="color-blue line-xlg"></div>
                                        </li>
                                        <li>
                                            <span>
                                                <ion-icon name="checkmark-done-outline"></ion-icon>
                                            </span>
                                            <div className="color-purple line-xlg"></div>
                                        </li>
                                        <li>
                                            <span>
                                                <ion-icon name="checkmark-done-outline"></ion-icon>
                                            </span>
                                            <div className="color-pink line-xlg"></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
