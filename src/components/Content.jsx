import React from 'react';

export default function Content({contentID}) {
    return (
        <div id={contentID}>
            <h2>Skills</h2>
            <div className="skills">
                <div className="skill">
                    <i className="fab fa-html5"></i>
                    <p>HTML5</p>
                </div>
                <div className="skill">
                    <i className="fab fa-css3-alt"></i>
                    <p>CSS3</p>
                </div>
                <div className="skill">
                    <i className="fab fa-js-square"></i>
                    <p>JavaScript</p>
                </div>
                <div className="skill">
                    <i className="fab fa-react"></i>
                    <p>React</p>
                </div>
                <div className="skill">
                    <i className="fab fa-sass"></i>
                    <p>SASS</p>
                </div>
                <div className="skill">
                    <i class="fas fa-gem"></i>
                    <p>Rails</p>
                </div>
            </div>
        </div>
    )
}
