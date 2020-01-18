import React, { Component } from "react";
import interview from "../assets/images/undraw_interview_rmcf.svg";
import coding from "../assets/images/undraw_programming_2svr.svg";
import pair from "../assets/images/undraw_pair_programming_njlp.svg";
import ("./css/About.css");


export default class AboutContainer extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
        <div className="about">
          <h4>TL;DR</h4>
          <div className="container">
            <img className="fadein" id="interview" alt="interview" src={interview}></img>
            <p>
              I am a prospective Software Developer currently in my 4th semester
              of{" "}
              <a
                href="https://www.mohawkcollege.ca/programs/technology/computer-systems-technology-software-development-559"
                target="_blank"
                rel="noopener noreferrer"
              >
                studies at Mohawk College
              </a>
              . I am seeking a student co-op or intern position where I can make
              an active contribution and gain industry experience.
            </p>
            <p>
              I have a keen interest in any and all kinds of development work,
              from RESTful web services with Node.js to Windows desktop
              applications with WinForms. Through my coursework, personal
              projects and self-directed learning I have gained a foundational
              knowledge of software development that is ready to be applied in
              the workplace.
            </p>
            <p>
              Checkout{" "}
              <a
                href="http://github.com/nckdhl"
                target="_blank"
                rel="noopener noreferrer"
              >
                my Github page
              </a>{" "}
              or navigate to my Projects to see what I've been working on
              lately.
            </p>
          </div>
          <h4>THEN</h4>
          <div className="container">
            <p>
              I first developed an interest in software a few years ago when the
              business I run with my wife inherited a very dated Wordpress
              website that I needed to turn in to a{" "}
              <a
                href="https://peter-pat-seifenblasen.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                functioning, attractive online store.
              </a>
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
              consider a career change when my aspirations in dairy farming hit
              a dead-end. <em>Ask me over a coffee about that one.</em>
            </p>
          </div>
          <h4>NOW</h4>
          <div className="container">
            <img className="fadein" id="coding" alt="coding" src={coding}></img>
            <p>
              Fast forward to 2020. I am now half-way through my studies at
              Mohawk College and am feeling confident in my ability to craft
              quality software.
            </p>
            <p>
              Through coursework I have been exposed to a variety of programming
              languages, frameworks and technologies such as Java, .NET, Testing
              with MSTEST and Katalon Suite, Python, Javascript, PHP, SQL etc.
            </p>
            <p>
              Through my own side-projects I have gained knowledge of, and
              relative proficiency in Node.js Express, Bootstrap, Git, Django,
              Wordpress and Linux server admin.
            </p>
            <p>
              I'm currently working on building out my{" "}
              <a
                href="https://github/nckdhl/vanilla-twilio-node"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twilio VOIP browser client.
              </a>{" "}
              I started this project as a way for my wife to stay in touch with
              her family in Poland. Twilio allows you to purchase phone numbers
              from around the world. With my app I can make and receive phone
              calls in the browser using my purchased Twilio phone number. I
              built the back-end with Node.js Express and the front-end with
              vanilla JS.
            </p>
            <p>
              On my bedside table is a copy of Marijn Haverbeijn's influential
              book{" "}
              <a
                href="https://www.amazon.com/gp/product/1593279507/ref=dbs_a_def_rwt_bibl_vppi_i0"
                target="_blank"
                rel="noopener noreferrer"
              >
                'Eloquent Javascript'
              </a>
              . If I have any spare time, you'll find me brushing up on my
              higher order array functions. This book has actually turned me in
              to a fan of the much-maligned Javascript. There's just way to much
              you can do with the language!
            </p>
          </div>
          <h4>THE FUTURE</h4>
          <div className="container">
            <img className="fadein" id="pair" alt="pair programming" src={pair}></img>
            <p>
              My own side-projects as well as school assignments have shown me
              where my strengths and interests lie. I love full-stack web
              development. From deploying to a{" "}
              <a
                href="https://www.heroku.com/dynos"
                target="_blank"
                rel="noopener noreferrer"
              >
                Heroku Dyno
              </a>{" "}
              to tweaking layouts with CSS, I'm excited about the front and back
              and everything in between.
            </p>
            <p>
              In the future, I'm hoping to find a position that allows me to
              pursue this interest and contribute to modern full-stack web
              applications. I am, however, passionate about all things computer
              science. At this point, even maintaining a legacy Windows desktop
              application or monolithic Java back-end seems absoloutely
              fascinating to me.
            </p>
            <p>
              Over the next couple years, I'm hoping to further explore what can
              be done in the Javascript ecosystem and start contributing to some
              open-source projects. I also want to dive in to the Python
              microframework Flask and ASP.NET CORE's Web API.
            </p>
          </div>
        </div>
    );
  }
}
