import React, { Component } from 'react'

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
                
            </div>
        )
    }
}
