import React from 'react';
import omnifood from './omnifood.PNG';

export default function Projects() {
    return (
        <section className="section-projects" id="projects">
            <div className="container">
                <p className="label">PROJECTS</p>
                <h2 className="heading-secondary">What have I built?</h2>
                <div className="grid grid-three-cols">
                    {/* OMNIFOOD */}
                    <a className="project-link" target="_blank" rel="noreferrer" href="https://quirky-jennings-58c09b.netlify.app/">
                        <div className="project-card">
                            <img className="project-img" src={omnifood} alt="Omnifood thumbnail" />
                            <div className="project-info">
                                <span className="project-type">TYPE: Full Website</span>
                                <h3 className="project-title">Omnifood</h3>
                                <p className="project-text">
                                    A fake, AI-powered food subscription and delivery business that aims
                                    to make eating healthy convenient, effortless and automated.
                                </p>
                            </div>
                        </div>
                    </a>
                    <div className="project-card">
                        <img className="project-img" src={omnifood} alt="Omnifood thumbnail" />
                        <div className="project-info">
                            <span className="project-type">TYPE: Landing Page</span>
                            <h3 className="project-title">Omnifood</h3>
                            <p className="project-text">
                                Placeholder
                            </p>
                        </div>
                    </div>
                    <div className="project-card">
                        <img className="project-img" src={omnifood} alt="Omnifood thumbnail" />
                        <div className="project-info">
                            <h3 className="project-title">Omnifood</h3>
                            <p className="project-text">
                                Placeholder
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
