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
                            <span>(Updated: Jan. 4, 2021)</span>
                            <div className="hr"></div>
                            <p>Currently, I'm diving into <strong>Express with Node.js</strong> It has been in my sights for quite some time now,
                            and I'm excited to learn another MVC framework outside of Ruby on Rails. So far, it's proving 
                            to be quite an amazing learning experience. Stay tuned! I'm excited to share with you what I do with Express. <strong><a href="https://dev.to/matthewpalmer9" target="_blank" rel="noopener noreferrer">I write blogs about it here!</a></strong>
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
