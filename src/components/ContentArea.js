import React from "react";
import "./css/ContentArea.css";
import "./css/BrandName.css";
import Header from "./Header";
import AboutContainer from "./AboutContainer";
import ProjectContainer from "./ProjectContainer";
import Form from "./Form";
import resume from "../assets/images/resume.pdf";

function ContentArea(props) {
  let content;

  switch (props.showPage) {
    case "PROJECTS":
      content = <ProjectContainer />;
      break;
    case "ABOUT":
      console.log("About Me shown");
      content = <AboutContainer />;
      break;
    case "CONTACT":
      console.log("Contact shown");
      content = <Form />;
      break;
    case "RESUME":
      console.log("Resume shown");
      if ()
      content = (
        <object
          className="fadein"
          data={resume}
          type="application/pdf"
          width="1000px"
          height="1000px"
        >
          Resume
        </object>
      );
      break;
    default:
      console.log("Empty action");
      break;
  }

  return (
    <div className="ContentArea">
      <Header title={props.showPage} />
      { content }
    </div>
  );
}

export default ContentArea;
