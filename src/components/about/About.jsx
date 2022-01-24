import familyPhoto from './the-family.png';

export default function About() {
    return (
        <section id="about" className="section-about">
            <div className="container">
                <p className="about-label">ABOUT</p>
                <h2 class="heading-secondary">Who am I?</h2>
                <div className="grid-two-cols mg-top center-v">
                    <div className="about-text-container">
                        <p className="number">01</p>
                        <h3>First and foremost</h3>
                        <p className="about-description">
                            I am a husband and a father to a beautiful 2-year-old girl, and soon a newborn! My wife and kids are my 
                            primary motivation in everything I do, and they are my drive to be better than I was yesterday.
                        </p>
                    </div>
                    <div className="about-img-container">
                        <img className="about-img" src={familyPhoto} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
