import React, { Component } from 'react';
import emailjs from 'emailjs-com';

export default class Contact extends Component {

    constructor() {
        super()
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            message: null
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        let errors = document.querySelector('#errorMsg');
        errors.style.display = "none";
        let ulList = document.querySelector("#errorMsg ul");
        if(ulList) { ulList.remove() }

        let errUL = document.createElement('ul');
        let deleteErrors = document.querySelectorAll("#errorMsg li")
        deleteErrors.forEach(err => document.querySelector("#errorMsg ul").removeChild(err))
        errors.style.display = "none";
        
        // Handles blank input errors
        if(this.state.firstName === null || this.state.firstName === "") { 
            errors.style.display = "flex";
            let errMSG = document.createElement('li');
            errMSG.innerText = "Please include your first name.";
            errUL.appendChild(errMSG);
        } 
        if(this.state.lastName === null || this.state.lastName === "") { 
            errors.style.display = "flex";
            let errMSG = document.createElement('li');
            errMSG.innerText = "Please include your last name.";
            errUL.appendChild(errMSG);
        } 
        if(this.state.email === null || this.state.email === "") { 
            errors.style.display = "flex";
            let errMSG = document.createElement('li');
            errMSG.innerText = "Please include your email.";
            errUL.appendChild(errMSG);
        } 
        if(this.state.message === null || this.state.message === "") { 
            errors.style.display = "flex";
            let errMSG = document.createElement('li');
            errMSG.innerText = "Please include a message.";
            errUL.appendChild(errMSG);
        }
        errors.appendChild(errUL);

        if(this.state.firstName === null || this.state.lastName === null || this.state.email === null || this.state.message === null) return;
        this.sendEmail();
    }

    sendEmail = e => {
        emailjs.init("user_PhaHB3scWG4p7Nv7oXhNL");
        emailjs.send(
            'outlook',
            'template_hbRIh0S4',
            this.state
        )
        .then(res => console.log(res))
        .catch(err => console.log("The form was not submitted."))
    }

    render() {
        return (
            <div id="contact">
                <h1>Contact Me</h1>
                <div className="hr"></div>

                <div id="errorMsg"></div>
                <div className="contact-form-container">
                    <div className="input-container">
                        <label id="fn-label">First Name:</label> 
                        <input name="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-container">
                        <label id="ln-label">Last Name:</label> 
                        <input name="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-container">
                        <label id="email-label">Email:</label> 
                        <input name="email" onChange={this.handleChange}/>
                    </div>
                    <div className="textarea-container">
                        <label id="textarea-label">Message:</label>
                        <textarea name="message" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="submit">
                        <button onClick={this.handleSubmit} type="submit" id="submit-btn">Submit</button>
                    </div>
                </div>

                <div className="connect-with-me">
                    <h2>Connect with me</h2>
                    <p>I love to share my passion anywhere I can!</p>
                    <div id="socials">
                        <a href="https://linkedin.com/in/matthewpalmer9"><i className="fab fa-linkedin"></i></a>
                        <a href="https://dev.to/matthewpalmer9"><i className="fab fa-dev"></i></a>
                        <a href="https://github.com/matthewpalmer9"><i className="fab fa-github"></i></a>
                        <a href="https://twitter.com/mattpdev"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
                
            </div>
        )
    }
}
