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
                        <h1>Frontend JavaScript / React Developer</h1>
                        <i className="fas fa-laptop-code"></i>
                        <p>My name is Matthew Ryan Palmer, and I'm a frontend developer living in the Austin, TX area.</p>
                        <p>I specialize in JavaScript, React, and Ruby on Rails on the backend. I am successful in working with Rails MVC architecture, database schema building, security/authentication, JWT Web Tokens and parameter validations. Interested in working with me? Let's get connected! </p>

                        <div className="current-progress">
                            <h2>What am I currently learning?</h2>
                            <span>(Updated: March 11, 2021)</span>
                            <div className="hr"></div>
                            <p>I'm currently diving into design patterns. I really like the way that some websites like Stripe handle their UI/UX. 
                                I'm also looking into available animation libraries that really help websites stand out. Keep an eye out! I'll be updating
                                my website soon with a whole new design. I can't wait for you to see!
                                <strong><a href="https://dev.to/matthewpalmer9" target="_blank" rel="noopener noreferrer">I write blogs about it here!</a></strong>
                            &nbsp;</p>
                            <p><strong>Follow me on <a href="https://github.com/matthewpalmer9" target="_blank" rel="noopener noreferrer">Github</a> and <a href="https://linkedin.com/in/matthewpalmer9" target="_blank" rel="noopener noreferrer">LinkedIn</a> to see how I'm doing!</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
