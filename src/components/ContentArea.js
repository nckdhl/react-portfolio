import React from "react";
import "./css/ContentArea.css";
import "./css/BrandName.css";
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
      content = (
        <div className="about">
          <p>
            I first developed an interest in software a few years ago when the
            business I run with my wife inherited a very dated Wordpress website
            that I needed to turn in to a functioning, attractive online store.
          </p>
          <p>
            At the beginning, in my inexperience, I broke the website, alot.
            When that happened I needed to call an expensive expert to get my
            money-making production site back up. At that point I didn't
            understand such highfalutin concepts as production, staging and
            local development sites! Copying and pasting code snippets without
            understanding what they do was the extent of my web dev skills.
            Being someone who always needs to understand what's going on under
            the hood, I started watching alot of YouTube tutorials and reading
            books about this wide world of servers, languages, frameworks and
            package managers.
          </p>
          <p>
            What I discovered was incredibly fascinating and made me seriously
            consider a career change when my aspirations in dairy farming hit a
            dead-end. <em>Ask me over a coffee about that one.</em>
          </p>
          <p>
            Fast forward to 2020. I am now half-way through my studies at Mohawk
            College and am feeling quite confident in my ability to craft
            quality software. Through coursework I have been exposed to a
            variety of programming languages, frameworks and technologies such
            as Java, .NET, Testing with MSTEST and Selenium, Python, Javascript,
            PHP, SQL etc. Through my own side-projects I have gained knowledge
            of, and relative proficiency in Node.js Express, Bootstrap, Git, Django,
            Linux server admin.,
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
