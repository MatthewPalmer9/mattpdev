import React, { PureComponent } from 'react'

export default class Skills extends PureComponent {
    render() {
        return (
            <div id="skills">
                <h1>Skills & Tools</h1>
                <div className="hr"></div>

                <div className="skills-list">
                        <div className="skillbox">
                            <i className="fab fa-js-square"></i>
                            <span>JavaScript</span>
                        </div>

                        <div className="skillbox">
                            <i className="fab fa-css3-alt"></i>
                            <span>CSS</span>
                        </div>

                        <div className="skillbox">
                            <i className="fab fa-html5"></i>
                            <span>HTML</span>
                        </div>

                        <div className="skillbox">
                            <i className="fab fa-react"></i>
                            <span>React <span id="react-redux-splitter">/</span> <span id="redux">Redux</span></span>
                        </div>

                        <div className="skillbox">
                            <i className="fas fa-gem"></i>
                            <span>Ruby on Rails</span>
                        </div>

                        <div className="skillbox">
                            <i className="fab fa-github"></i>
                            <span>Git / Github</span>
                        </div>
                </div>
            </div>
        )
    }
}
