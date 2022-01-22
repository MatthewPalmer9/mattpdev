

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
                            <a href="/">Learn more &darr;</a>
                        </button>
                    </div>
                </div>
                <div className="hero-interaction-box">
                    <div className="box-container">
                        <div className="navbar">
                            <div className="brand">
                                HOVER ME LLC
                            </div>
                            <ul class="box-list">
                                <li className="box-list-item">.mattpdev()</li>
                                <li className="box-list-item">.loves()</li>
                                <li className="box-list-item">.to()</li>
                                <li className="box-list-item">.design()</li>
                                <li className="box-list-item">.beautiful()</li>
                                <li className="box-list-item">.layouts()</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
