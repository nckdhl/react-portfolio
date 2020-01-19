import React, { Component } from "react";
import resume from "../assets/images/resume.pdf";
import("./css/Form.css");

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="fadein" id="formContainer">
        <form data-netlify="true" onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <input
            placeholder="NAME"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />

          <input
            placeholder="EMAIL"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          />

          <textarea
            placeholder="MESSAGE"
            type="text"
            name="message"
            value={message}
            onChange={this.handleChange}
            required
          ></textarea>

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
