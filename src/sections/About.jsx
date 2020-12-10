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
                        <h1>Front-end Website Developer</h1>
                        <p>Hi there!</p> 
                        <p>My name is Matthew Ryan Palmer, and I'm a Front-end Website Developer living in the Austin, TX area.</p>
                        <p>I started my journey from "The Web Developer Bootcamp" by Colt Steele on Udemy. Ever since, I've fallen in love with web development and went to school twice for it -- Once at Purdue University Global and again at Flatiron School. Since graduating, I've spent most of my free time taking my craft to the next level. Like many other people, I enjoy spending my free time increasing my knowledge of web development and building new and challenging projects.</p>
                    </div>
                </div>
            </div>
        )
    }
}
