import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    firstName: null,
    email: null,
    message: null
  })

  const handleChange = (e) => {
    setContactForm(
      {...contactForm, [e.target.name]: e.target.value.split(" ")[0]}
    );
    console.log(contactForm)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs.init("user_PhaHB3scWG4p7Nv7oXhNL");
    const response = await emailjs.send(
      'outlook',
      'template_hbRIh0S4',
      contactForm
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">

        <p className="label center">CONTACT</p>
        <h2 className="heading-secondary center">
            Interested in working together? Let's talk!
        </h2>
        
        <form className="contact-form">
          <h3 className="contact-heading">Contact Me</h3>
          <div className="input-field">
              <input
                  onChange={handleChange}
                  name="firstName"
                  type="text"
                  placeholder="Name"
              />
              <label htmlFor="name">Name:</label>
          </div>

          <div className="input-field">
              <input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Email"
              />
              <label htmlFor="email">Email:</label>
          </div>

          <div className="input-field">
            <textarea
              onChange={handleChange}
              className="text-field" 
              name="Contact Details"
              placeholder="Type your message here..."
            />
          </div>


          <div className="form-submit-box">
              <button onClick={handleSubmit} className="submit-button">
                Send 
                <ion-icon name="paper-plane-outline"></ion-icon>
              </button>
          </div>
        </form>
      </div>
    </section>
  )
}
