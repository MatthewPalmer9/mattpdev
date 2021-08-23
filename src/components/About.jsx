import React from 'react';

export default function About() {
    return (
        <>
            <main>
                <h2>About</h2>
                <p>Hi there! My name is Matthew Palmer, and I'm an Application Developer at IBM. 
                    These days, I'm focused on Front-End designing. It's my creative outlet.
                    You're looking at my latest one right now, which is my fully redesigned portfolio
                    I love to code, I love to learn, and I love to talk about it!
                    <br /><br />
                    If you'd like to follow and connect with me, you can find me on&nbsp;
                        <a 
                            className="about-link-decorator" 
                            rel="noopener noreferrer" 
                            href="https://www.linkedin.com/in/matthewpalmer9">
                                LinkedIn
                        </a> 
                    &nbsp;and&nbsp; 
                        <a 
                            className="about-link-decorator" 
                            rel="noopener noreferrer" 
                            href="https://www.github.com/matthewpalmer9">
                                Github
                        </a>
                    . 
                    </p>
                    <a target="_blank" href="https://docs.google.com/document/d/12wxIOwUbB73DCBfDr88eU5zr6fRSz4whHWNun1hgeVs" rel="noopener noreferrer">
                        <button id="resume-btn">
                            Resume &nbsp;
                            <i class="fas fa-external-link-alt"></i>
                        </button>
                    </a>
            </main>
        </>
    )
}
