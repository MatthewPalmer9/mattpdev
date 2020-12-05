import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    display: flex;
    justify-content: left;
    align-items: center;
    color: aqua;
    text-shadow: 0 0 5px aqua;
    font-size: 2.5rem;
`;

export default class Index extends PureComponent {
    render() {
        return (
            <>
                <div id="header">
                    <div className="header-content">

                        <div className="header-content-left">
                            <h1 className="title">
                                <Title>
                                    <span>MRP</span><div className="title-spacer">&nbsp;|&nbsp;</div>TECHNOLOGIES
                                </Title>
                            </h1>
                            <p>People work better together</p>
                        </div>

                        <div className="header-content-right">
                            <p>Want to work with me? I'm always looking for a new coding buddy and new challenges. Don't be shy, get in touch!</p>
                            <a href="#contact"><button>Get in Touch</button></a>
                        </div>

                    </div>
                </div>
                <div id="contact">

                </div>
            </>
        )
    }
}
