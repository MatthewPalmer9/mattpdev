import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">

        <p className="label center">CONTACT</p>
        <h2 className="heading-secondary center">
            Interested in working together? Let's talk!
        </h2>
        
        <form className="contact-form">
          <h3></h3>
          <div className="input-field">
              <input
                  // onChange={handleChange}
                  name="name"
                  type="text"
                  placeholder="Email"
              />
              <label htmlFor="name">Name:</label>
          </div>

          <div className="input-field">
              <input
                  // onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Email"
              />
              <label htmlFor="email">Email:</label>
          </div>

          <div className="input-field">
            <textarea
              className="text-field" 
              name="Contact Details"
              placeholder="Type your message here..."
            />
          </div>


          <div className="form-submit-box">
              <button onClick={(e) => {e.preventDefault()}} className="submit-button">
                Send 
                <ion-icon name="paper-plane-outline"></ion-icon>
              </button>
          </div>
        </form>
      </div>
    </section>
  )
}
