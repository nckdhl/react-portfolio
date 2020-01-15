import React from "react";
import "./css/ContentArea.css";
import "./css/BrandName.css";
import ProjectContainer from "./ProjectContainer";
import Form from "./Form";
import resume from "../images/resume.pdf";

function ContentArea(props) {
  let content;

  switch (props.showPage) {
    case "PROJECTS":
      content = <ProjectContainer />;
      break;
    case "ABOUT":
      console.log("About Me shown");
      content = (
        <div className="about">
          <p>
            Ut occaecat cillum magna dolore esse labore cupidatat. Commodo enim
            eu mollit aute laborum aute anim nostrud. Quis adipisicing tempor
            voluptate excepteur ut sit quis reprehenderit enim sint culpa ut. Ex
            cillum non irure aliqua ut commodo velit sint. Officia est nisi
            cillum ullamco. Et aliquip sit eiusmod esse voluptate consectetur
            sit mollit. Consectetur elit consectetur laborum aliqua non veniam
            in duis nostrud ullamco laboris consequat. Nostrud labore nostrud
            velit sint excepteur Lorem deserunt ad ullamco culpa ullamco. In
            laboris in culpa pariatur Lorem eu minim esse ad occaecat. Occaecat
            exercitation veniam duis nulla fugiat culpa est Lorem. Enim ullamco
            fugiat non officia incididunt culpa officia exercitation consectetur
            proident ullamco ad. Aliqua mollit labore laboris do duis labore ut
            et anim labore ut eu quis. Velit pariatur eu cupidatat ullamco enim
            excepteur exercitation sint do voluptate deserunt sint deserunt.
            Anim non aliqua mollit laboris sunt qui sunt. Aliqua id occaecat
            culpa laborum dolore. Incididunt ullamco veniam minim elit eiusmod
            ea et. Minim incididunt deserunt consectetur adipisicing do eu.
          </p>
        </div>
      );
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
