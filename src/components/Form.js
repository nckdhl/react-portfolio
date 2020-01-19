import React, { Component } from "react";
import resume from "../assets/images/resume.pdf";
import("./css/Form.css");

export default class Form extends Component {
  render() {
    return (
      <div className="fadein" id="formContainer">
        <form name="contact" method="POST" data-netlify="true">
          <input placeholder="NAME" type="text" name="name" required />

          <input placeholder="EMAIL" type="email" name="email" required />

          <textarea placeholder="MESSAGE" type="text" name="message"></textarea>

          <button type="submit">SEND</button>
        </form>
        <p>
          Alternatively, you can{" "}
          <a href="mailto:nicholas.dahl@mohawkcollege.ca">send me an email</a>{" "}
          or{" "}
          <a href={resume} target="_blank" rel="noopener noreferrer">
            view my resume
          </a>{" "}
          to pull up my cell number.
        </p>
      </div>
    );
  }
}
