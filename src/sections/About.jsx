import React, { PureComponent } from 'react';
import selfImg from '../matthewpalmer.jpg'

export default class About extends PureComponent {
    render() {
        return (
            <div id="about">
                <h1>About</h1>
                <div className="hr"></div>

                <div className="about-content">
                    <div className="about-content-left">
                        <div id="selfImg">
                            <img alt="self-img" src={selfImg}/>
                        </div>
                    </div>

                    <div className="about-content-right">
                        <h1>Ruby on Rails Developer</h1>
                        <i className="fas fa-laptop-code"></i>
                        <p>My name is Matthew Ryan Palmer, and I'm a Ruby on Rails Developer (Full Stack) living in the Austin, TX area.</p>
                        <p>I specialize in Ruby on Rails and JavaScript-based programming. I am successful in working with Rails MVC architecture, database schema building, security/authentication through sessions, JWT Web Tokens and parameter validations. My interest with Ruby on Rails is due to its ability to maintain high security, clean code and a general environment fit for production/deployment. </p>

                        <div className="current-progress">
                            <h2>What am I currently learning?</h2>
                            <span>(Updated: Dec. 21, 2020)</span>
                            <div className="hr"></div>
                            <p>Currently, I'm diving into <strong>React Native!</strong> It's very important for us developers to
                                maintain modern technical skills that accelerate the future. These days, people spend
                                more time on their cell phones than they do an actual PC or laptop. React Native is
                                the next step in my journey as it allows for building applications that communicate
                                with both iOS and Android devices in one language!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
