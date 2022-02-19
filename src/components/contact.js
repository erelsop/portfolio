import React from "react"
import "../styles/contact.css"

const contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h1 class="contact-heading">Say hi</h1>
      <form
        method="post"
        action="https://getform.io/f/{getform-id-goes-here}"
        className="contact-form"
      >
        <div className="field-container">
          <div className="left">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input type="email" name="email" placeholder="Email" id="email" />
          </div>
          <div className="right">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input type="text" name="name" placeholder="Name" id="name" />
          </div>
          <div className="center">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              type="text"
              name="message"
              placeholder="Hello! Start your message here.."
              id="message"
            />
          </div>
          <div className="form-btns">
            <button type="submit" name="submit" value="Send">
              Send
            </button>
            <button type="reset" name="reset" value="Reset">
              Reset
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default contact
