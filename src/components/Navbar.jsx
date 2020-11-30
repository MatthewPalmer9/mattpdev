import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    display: flex;
    width: 100%;
    position: fixed;
    z-index: 1000;
    border-bottom: 1px solid white;
    background-color: rgba(21, 31, 21, 0.4);
    height: 60px;
`;

const Brand = styled.span`
    display: flex;
    height: 100%;
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    margin: 0 50px 0 0;
    justify-content: center;
    align-items: center;
    color: aqua;
    text-shadow: 0 0 5px aqua;
`;

const toggleMenu = () => {
    const activeElements = document.querySelectorAll(".active-element");
    for(let i = 0; i < activeElements.length; i++) {
        activeElements[i].classList.toggle("active");
    }

    const dropMenu = document.querySelector(".menu-container");
    dropMenu.classList.toggle("active");
}


export default class Navbar extends PureComponent {
    render() {
        return (
            <>
                <Nav>
                    <div className="navbar">
                        <Brand>
                            <div className="brand">
                                    <span>MattPDev</span>
                            </div>
                        </Brand>

                        <div onClick={toggleMenu} className="menu" id="menu">
                                <div className="one active-element"></div>
                                <div className="two active-element"></div>
                                <div className="three active-element"></div>
                        </div>
                    </div>
                </Nav>

                <div className="menu-container">
                    <ul>
                        <a href="/"><li className="navlink">Home</li></a>
                        <a href="/"><li className="navlink">About</li></a>
                        <a href="/"><li className="navlink">Projects</li></a>
                        <a href="/"><li className="navlink">Blog</li></a>
                        <a href="/"><li className="navlink">GitHub</li></a>
                    </ul>
                </div>
            </>
        )
    }
}
