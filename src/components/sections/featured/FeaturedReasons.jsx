import React from 'react';
import './featured.css';

export default function FeaturedReasons() {
    return (
        <>
            <section className="featured">
                <h1>Why work with me?</h1>
                <div className="grid-col-3">
                    <div className="feature-card">
                        <div className="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h4>Team Player</h4>
                        <p>We succeed together, and no one is left behind. This is about trust, accountability, and a common goal to deliver.</p>
                    </div>
                    <div className="feature-card">
                        <div className="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h4>Client-oriented</h4>
                        <p>
                            Placing an emphisis on the value and importance of our client's input. These human-first values mean we can deliver a carefully tailored product that makes an impact.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="icon-container">
                            <svg xmlns="http://www.w3.org/2000/svg" className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h4>All-Inclusive</h4>
                        <p>Diversity and culture matters in all areas of life, and it's important to work alongside other unique professionals who value and care for each other.</p>
                    </div>
                </div>
                <h3>TESTIMONIALS</h3>
                <div className="testimonial a">
                    <img src="malcolm.jfif" alt="Malcolm Leake" />
                    <div className="testimonial-text">
                        <h4>Matthew Palmer is very enthusiastic when it comes to writing clean code and helping others.</h4>
                        <p>
                            <em>"He always finds a way to take time out of his busy schedule to give any advice if needed. 
                            He actively shares cutting edge links of the tech sector as well as showing his own personal projects he currently works on. 
                            And on top of that, he manages to pull it off while working a full-time job, being a husband, and father to a lovely girl. 
                            He's someone I could learn a thing or two from."</em>
                        </p>
                        <span>
                            <p>⎯ Malcolm Leake, Cloud Engineer at Deloitte</p> <a href="https://www.linkedin.com/in/malcolmleake/"><i className="fab fa-linkedin"></i></a>
                        </span>
                    </div>
                </div>
                <div className="testimonial b reverse">
                    <img src="marlon.jfif" alt="Marlon Braga" />
                    <div className="testimonial-text">
                        <h4>Matthew has a positive attitude in the face of challenging tasks.</h4>
                        <p>
                            <em>"He just dives right in and has and incredible capacity to quickly focus and get into a state of flow, 
                                he just loves what he does and he shows it in every word when sharing his thoughts and ideas with 
                                colleagues. [...] I'm grateful to have shared this initial path of 
                                my professional development with an individual like Matthew. I hope to always have someone like him in my 
                                team, it just makes work feel lighter."</em>
                        </p>
                        <span>
                            <p>⎯ Marlon Braga, Application Developer at IBM</p> <a href="https://www.linkedin.com/in/marlon-braga"><i className="fab fa-linkedin"></i></a>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}
