import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    display: flex;
    justify-content: space-evenly;
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
                                    MRP&nbsp;<span className="title-spacer">|</span>&nbsp;Technologies
                                </Title>
                            </h1>
                        </div>

                        <div className="header-content-right">
                            <h2>Want to work with me?</h2>
                        </div>

                    </div>
                </div>
                <div id="section1">

                </div>
            </>
        )
    }
}
