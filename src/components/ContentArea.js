import React from "react";
import "./css/ContentArea.css";
import "./css/BrandName.css";
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
      content = (
        <object
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
      <div>
        <h1 className="brand-name" href="#">
          <span className="im">I'M &nbsp;</span>
          <span className="n">N</span>
          <span className="vowel">I</span>
          <span className="ck">CK</span>
          <span className="space">&nbsp;</span>
          <span className="d">D</span>
          <span className="vowel">A</span>
          <span className="hl">HL</span>
          <span className="dot">,</span>
        </h1>
      </div>
      <div className="AboutMeBlurb">
        <h4>STUDENT OF SOFTWARE DEVELOPMENT AT MOHAWK COLLEGE.</h4>
      </div>
      {content}
    </div>
  );
}

export default ContentArea;
