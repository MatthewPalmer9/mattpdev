import React, { PureComponent } from 'react';
import Project from './Project.jsx';
import dragndropPic from '../project-imgs/react-dragndrop.png';
import weatherappPic from '../project-imgs/mattpdev-wa.png';
import rgbcolorgame from '../project-imgs/rgbcolorgame.png';
import JSSlider from '../project-imgs/js-slider.png';

export default class Projects extends PureComponent {
    render() {
        return (
            <div id="projects">
                <h1>Projects</h1>
                <div className="hr"></div>

                <div className="projects-container">
                    <Project
                        demoLink="https://react-drag-drop-five.vercel.app/"
                        imgSrc={dragndropPic}
                        title="React Drag N' Drop"
                        techs={["JavaScript", "CSS", "HTML", "React"]}
                        description={
                            <p className="description">
                                A UI/UX designed using the HTML5 "Drag n Drop API". <strong>Currently not mobile friendly due to this APIs capatability.</strong>
                            </p>
                        }
                    />

                    <Project
                        demoLink="https://mattpdev-weather-app.vercel.app/"
                        imgSrc={weatherappPic}
                        title="Weather App"
                        techs={["JavaScript", "CSS", "HTML", "React"]}
                        description={
                            <p className="description">
                                A weather app utilizing the OpenWeatherMap API. Gathers live weather information from anywhere around the world.
                            </p>
                        }
                    />

                    <Project
                        demoLink="https://rgbcolorgame.vercel.app/"
                        imgSrc={rgbcolorgame}
                        title="The Great RGB Color Guessing Game"
                        techs={["JavaScript", "CSS", "HTML", "React"]}
                        description={
                            <p className="description">
                                "The Great RGB Color Guessing Game" originaly created by Colt Steele and remade using React.
                            </p>
                        }
                    />

                    <Project
                        demoLink="https://mrp-carousel.vercel.app/"
                        imgSrc={JSSlider}
                        title="JS Slider"
                        techs={["JavaScript", "CSS", "HTML"]}
                        description={
                            <p className="description">
                                An image slider built 100% in vanilla JavaScript, CSS and HTML. Eliminates the heavy footprint of using a framework or library.
                            </p>
                        }
                    />
                </div>
            </div>
        )
    }
}
