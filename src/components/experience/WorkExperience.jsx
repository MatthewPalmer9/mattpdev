import React from 'react';
import ibmLogo from './ibm-logo.png';

export default function WorkExperience() {
    return (
        <section className="section-experience" id="experience">
            <div className="container">
                <p className="label">EXPERIENCE</p>
                <h2 className="heading-secondary">
                    Where have I worked?
                </h2>
                <div className="grid grid-two-cols">
                    <div className="experience-text">
                        <h3 className="heading-tertiary">IBM (2021 &mdash; Present)</h3>
                        <p className="heading-description">
                            I started as an Application Developer Apprentice at IBM where we were placed 
                            on a 12-month curriculum track with enterprise courses such as Harvard University's CS50, 
                            among many others. After completing my apprenticeship within the first 4 months, 
                            I received my <a target="_blank" rel="noreferrer" className="external-link" href="https://www.linkedin.com/posts/mattpdev_ive-made-a-lot-of-accomplishments-over-the-activity-6852368584195239936-g8N1">Certificate of Completion</a> of Apprenticeship from The United States Department of Labor.
                        </p>
                    </div>
                    <div className="experience-img-box">
                        <img className="experience-img" src={ibmLogo} alt="IBM logo" />
                    </div>
                </div>
            </div>
        </section>
    );
}
