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
                        <h1>Ruby on Rails Developer<i className="fas fa-laptop-code"></i></h1>
                        <p>Hi there!</p> 
                        <p>My name is Matthew Ryan Palmer, and I'm a Ruby on Rails Developer (Full Stack) living in the Austin, TX area.</p>
                        <p>I specialize in Ruby on Rails and JavaScript-based programming. I am successful in working with Rails MVC architecture, database schema building, security/authentication through sessions, JWT Web Tokens and parameter validations. My interest with Ruby on Rails is due to its ability to maintain high security, clean code and a general environment fit for production/deployment. </p>
                    </div>
                </div>
            </div>
        )
    }
}
