export default function WorkExperience() {
    return (
        <section className="section-experience" id="experience">
            <div className="container">
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
                    <div className="tracker-container">
                        <div className="track">

                        </div>
                    </div>
                        <h3 className="heading-tertiary track--dot">IBM (May 2021 &mdash; Present)</h3>
                        <p className="heading-description">
                            As an <strong>Application Developer</strong> at IBM, my responsibilities include mentoring, and developing code and documentation for<em>The State of Florida, DCF.</em> Primary technologies used for this role are Java (Struts 2), JavaScript, and SQL (DB2).
                        </p>
                    </div>
                    <div className="experience-img-box">
                        <img className="experience-img" src={"/img/ibm-logo.png"} alt="IBM logo" />
                    </div>

                    {/* EXPERINCE MEMBERSTACK */}
                    <div className="experience-text">
                        <h3 className="heading-tertiary track--dot">Memberstack (Jan. 2021 &mdash; May 2021)</h3>
                        <p className="heading-description">
                            As a <strong>Technical Support Engineer</strong> for Memberstack, my responsibilies were writing custom scripts
                            and debugging a variety of websites ranging from CMS platforms (Webflow &amp; WordPress) as well as custom-built websites.
                            The custom scripts served to add extra functionality outside of the scope of what Memberstack could offer out of the box. I was successful in completing 100% of the backlog ticket history within the first 2 weeks of hire (<em>well</em> over 300 tickets) &mdash; reshaping the level of trust and support offered to clients.
                        </p>
                    </div>
                    <div className="experience-img-box">
                        <img src={"/img/memberstack-logo.svg"} alt="Memberstack logo" className="experience-img" />
                    </div>
                </div>
            </div>
        </section>
    );
}
