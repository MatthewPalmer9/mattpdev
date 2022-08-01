import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  // Track Form Click
  const [formSubmitted, setFormSubmitted] = useState({submitted: false});

  // Track Email Sent
  const [emailSent, setEmailSent] = useState({sent: false});
  
  // Form State
  const [contactForm, setContactForm] = useState({
    firstName: null,
    email: null,
    message: null
  });

  // Errors State
  const [errors, setErrors] = useState({});

  // Handle Form Changes
  const handleChange = (e) => {
    if(e.target.name !== "firstName") {
      setContactForm(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value
      }));
    } else {
      setContactForm(prevState => ({
        ...prevState,
        [e.target.name]: e.target.value.split(" ")[0]
      }));
    }
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset Errors State
    setErrors(prevErrors => ({
      ...prevErrors,
      name: null, email: null, message: null
    }));

    // Name
    if(contactForm.firstName === null) {
      setErrors(prevState => ({
        ...prevState,
        name: "Please include your name."
      }));
    }

    // Email
    let emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if(contactForm.email === null) {
      setErrors(prevState => ({
        ...prevState,
        email: "Please include your email."
      }));
    } else if(!emailRegex.test(contactForm.email)) {
      setErrors(prevState => ({
        ...prevState,
        email: "Please use a valid email."
      }));
    };

    // Message
    if(contactForm.message === null) {
      setErrors(prevState => ({
        ...prevState,
        message: "Please include your message."
      }));
    };

    // If no validation errors, set formSubmitted = true
    if(Object.keys(errors) > 0) {
      return;
    } else {
      setFormSubmitted(prevState => ({
        ...prevState,
        submitted: true
      }));
    }
  };


  useEffect(() => {
    // Handle Send Email
    const sendEmail = async () => {
      emailjs.init("user_PhaHB3scWG4p7Nv7oXhNL");
      const resp = await emailjs.send(
        'outlook',
        'template_hbRIh0S4',
        contactForm
      )
      
      // On Success, Reset Form
      if(resp.status === 200) {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const inputFields = document.querySelectorAll('input-field');

        // Form Reset
        setContactForm(prevState => ({
          ...prevState,
          firstName: null, email: null, message: null
        }));
        name.value = "";
        email.value ="";
        message.value ="";

        // Form Submitted Reset
        setFormSubmitted(prevState => ({
          ...prevState,
          submitted: false
        }));

        // Hide Input Fields From DOM
        inputFields.forEach(input => {
          input.style.display = "none";
        });

        // Email Sent Flag
        setEmailSent(prevState => ({
          ...prevState,
          sent: true
        }));

        console.log("Successfully sent!");
        console.log(contactForm);
      };
    };

    // If no errors or validation issues, go ahead and send email!
    if(
      formSubmitted.submitted
      && contactForm.email !== null
      && contactForm.firstName !== null
      && contactForm.message !== null
      ) {
      sendEmail();
    }
  }, [errors, contactForm, formSubmitted]);

  console.log(emailSent)

  return (
    <section id="contact" className="contact">
      <div className="container">

        <p className="label center">CONTACT</p>
        <h2 className="heading-secondary center">
            Interested in working together? Let's talk!
        </h2>
        
        <form className="contact-form">
          <h3 className="contact-heading">Contact Me</h3>
          {emailSent.sent ? (
            <h2>Successfully sent! Check your inbox for confirmation! 🎉</h2>
          ) : (
            <>
              <div className="input-field">
                <input
                    id="name"
                    onChange={handleChange}
                    name="firstName"
                    type="text"
                    placeholder="Name"
                    required
                />
                <label htmlFor="name">Name:</label>
                <span className={errors.name ? "error" : ""}>{errors.name}</span>
              </div>

              <div className="input-field">
                <input
                    id="email"
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                />
                <label htmlFor="email">Email:</label>
                <span className={errors.email ? "error": ""}>{errors.email}</span>
              </div>

              <div className="input-field">
                <textarea
                id="message"
                  onChange={handleChange}
                  className="text-field" 
                  name="message"
                  placeholder="Type your message here..."
                  required
                />
                <span className={errors.message ? "error" : ""}>{errors.message}</span>
              </div>
            </>
          )}
          


          <div className="form-submit-box">
            {!emailSent.sent ? (
              <button id="send-button" onClick={handleSubmit} className="submit-button">
                Send 
                <ion-icon name="paper-plane-outline"></ion-icon>
              </button>
            ) : (
              <button id="send-button" onClick={handleSubmit} className="submitted-button" disabled>
                Sent!
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
