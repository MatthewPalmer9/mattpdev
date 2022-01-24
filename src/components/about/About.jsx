import familyPhoto from './the-family1.png';
import NoraleeAndI from './NoraleeAndI.png';

export default function About() {
    return (
        <section id="about" className="section-about">
            <div className="container">
                <p className="about-label">ABOUT</p>
                <h2 className="heading-secondary">Who am I?</h2>
                <div className="grid-two-cols row-gap mg-top center-v">
                    {/* STEP 01 TEXT */}
                    <div className="about-text-container">
                        <p className="number">01</p>
                        <h3>First and Foremost &mdash; A Family Man!</h3>
                        <p className="about-description">
                            I am a husband and a father to a beautiful 2-year-old girl, and soon a newborn! My wife and kids are my 
                            primary motivation in everything I do, and they are my drive to be better than I was yesterday.
                        </p>
                    </div>

                    {/* STEP 01 IMAGE */}
                    <div className="about-img-container">
                        <img className="about-img" src={familyPhoto} alt="Matt and his family" />
                    </div>

                    {/* STEP 02 IMAGE */}
                    <div className="about-img-container">
                        <img className="about-img" src={NoraleeAndI} alt="Matt and his family" />
                    </div>

                    {/* STEP 02 TEXT */}
                    <div className="about-text-container">
                        <p className="number">02</p>
                        <h3>A Front-end Developer</h3>
                        <p className="about-description">
                            I love to design and develop websites! I am focused on UI/UX, visual hierarchy, 
                            typography, and ultimately mobile responsiveness. Websites all have a personality 
                            that tell a story, and I take pride in helping you tell yours. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
