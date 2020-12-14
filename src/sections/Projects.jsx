import React, { PureComponent } from 'react';
import dragndrop from '../project-imgs/react-dragndrop.png';

export default class Projects extends PureComponent {
    render() {
        return (
            <div id="projects">
                <h1>Projects</h1>
                <div className="hr"></div>

                <div className="projects-container">
                    <div className="project">
                        <img alt="react-dragndrop" src={dragndrop} />
                        <div className="project-description">
                            <h2>React Drag N' Drop</h2>
                            <span className="tech-list">
                                <strong>Technologies: </strong>
                                <span className="javascript">JavaScript</span>, 
                                <span className="react">React</span>, 
                                <span className="plain">HTML5 Drag n Drop API</span>
                            </span>
                        </div>
                        <div className="hr"></div>
                        <p className="description">
                            A UI/UX designed using the HTML5 "Drag n Drop API". <strong>Currently not mobile friendly due to this APIs capatability.</strong>
                        </p>
                    </div>

                    <div className="project">
                        <img alt="react-dragndrop" src={dragndrop} />
                        <div className="project-description">
                            <h2>React Drag N' Drop</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
