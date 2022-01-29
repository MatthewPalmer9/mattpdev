import React from 'react';
import ibmLogo from './ibm-logo.png';
import memberstackLogo from './memberstack-logo.svg';

export default function WorkExperience() {
    return (
        <section className="section-experience" id="experience">
            <div className="container">
                {/* TRACK */}
                <p className="label">EXPERIENCE</p>
                <h2 className="heading-secondary">
                    Where have I worked?
                </h2>
                <div className="grid grid-two-cols">
                    <div className="tracker-container">
                        <div className="track">

                        </div>
                    </div>
                    {/* EXPERIENCE IBM */}
                    <div className="experience-text">
                        <h3 className="heading-tertiary track--dot">IBM (May 2021 &mdash; Present)</h3>
                        <p className="heading-description">
                            I started my journey with IBM as an <strong>Application Developer Apprentice</strong> where we were placed 
                            on an estimated 12-month educational track with a variety of high quality courses such as Harvard University's CS50 and 
                            many others offering live training in a variety of modern, in-demand technologies. After completing my apprenticeship within the first 4 months of hire,
                            I received my <a target="_blank" rel="noreferrer" className="external-link" href="https://www.linkedin.com/posts/mattpdev_ive-made-a-lot-of-accomplishments-over-the-activity-6852368584195239936-g8N1">Certificate of Completion of Apprenticeship</a> from <em>The United States Department of Labor.</em>
                        </p>
                    </div>
                    <div className="experience-img-box">
                        <img className="experience-img" src={ibmLogo} alt="IBM logo" />
                    </div>

                    {/* EXPERINCE MEMBERSTACK */}
                    <div className="experience-text">
                        <h3 className="heading-tertiary track--dot">Memberstack (Jan. 2021 &mdash; May 2021)</h3>
                        <p className="heading-description">
                            As a <strong>Technical Support Engineer</strong> for Memberstack, I wrote custom scripts
                            and debugged a variety of websites ranging from CMS platforms (Webflow &amp; WordPress) as well as custom-built websites.
                            The custom scripts served to add extra functionality outside of the scope of what Memberstack could offer out 
                            of the box. I was successful in catching up on 100% of the backed-up ticket history within the first 2 weeks of hire &mdash; reshaping
                            the level of trust and support offered to clients.
                        </p>
                    </div>
                    <div className="experience-img-box">
                        <img src={memberstackLogo} alt="Memberstack logo" className="experience-img" />
                    </div>
                </div>
            </div>
        </section>
    );
}
