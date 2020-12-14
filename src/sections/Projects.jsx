import React, { PureComponent } from 'react';
import dragndropPic from '../project-imgs/react-dragndrop.png';
import weatherappPic from '../project-imgs/mattpdev-wa.png';
import rgbcolorgame from '../project-imgs/rgbcolorgame.png';

export default class Projects extends PureComponent {
    render() {
        return (
            <div id="projects">
                <h1>Projects</h1>
                <div className="hr"></div>

                <div className="projects-container">
                    <div className="project">
                        <a target="_blank" rel="noopener noreferrer" href="https://react-drag-drop-five.vercel.app/">
                            <img alt="react-dragndrop" src={dragndropPic} />
                        </a>
                        <div className="project-description">
                        <a target="_blank" rel="noopener noreferrer" href="https://react-drag-drop-five.vercel.app/">
                            <h2>React Drag N' Drop</h2>
                        </a>
                            <span className="tech-list">
                                <strong>Technologies: </strong>
                                <span className="javascript">JavaScript</span>,
                                <span className="css">CSS</span>,
                                <span className="html">HTML</span>,
                                <span className="react">React</span>, 
                            </span>
                        </div>
                        <div className="hr"></div> 
                        <p className="description">
                            A UI/UX designed using the HTML5 "Drag n Drop API". <strong>Currently not mobile friendly due to this APIs capatability.</strong>
                        </p>
                    </div>

                    <div className="project">
                        <a target="_blank" rel="noopener noreferrer" href="https://mattpdev-weather-app.vercel.app/">
                            <img alt="weatherapp" src={weatherappPic} />
                        </a>
                        <div className="project-description">
                        <a target="_blank" rel="noopener noreferrer" href="https://mattpdev-weather-app.vercel.app/">
                            <h2>Weather App</h2>
                        </a>
                            <span className="tech-list">
                                <strong>Technologies: </strong>
                                <span className="javascript">JavaScript</span>, 
                                <span className="css">CSS</span>,
                                <span className="html">HTML</span>,
                                <span className="react">React</span>, 
                            </span>
                        </div>
                        <div className="hr"></div> 
                        <p className="description">
                            A weather app utilizing the OpenWeatherMap API. Gathers live weather information from anywhere around the world.
                        </p>
                    </div>

                    <div className="project">
                        <a target="_blank" rel="noopener noreferrer" href="https://rgbcolorgame.vercel.app/">
                            <img alt="rgbcolorgame" src={rgbcolorgame} />
                        </a>
                        <div className="project-description">
                        <a target="_blank" rel="noopener noreferrer" href="https://rgbcolorgame.vercel.app/">
                            <h2>RGB Color Game</h2>
                        </a>
                            <span className="tech-list">
                                <strong>Technologies: </strong>
                                <span className="javascript">JavaScript</span>, 
                                <span className="css">CSS</span>,
                                <span className="html">HTML</span>,
                                <span className="react">React</span>, 
                            </span>
                        </div>
                        <div className="hr"></div> 
                        <p className="description">
                            "The Great RGB Color Guessing Game" originaly created by Colt Steele and remade using React.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
