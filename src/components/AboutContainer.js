import React, { Component } from "react";
import interview from "../assets/images/undraw_interview_rmcf.svg";
import coding from "../assets/images/undraw_programming_2svr.svg";
import pair from "../assets/images/undraw_pair_programming_njlp.svg";
import("./css/About.css");

export default class AboutContainer extends Component {

  render() {
    const fadeInDelay = {
      animationDelay: "1s"
    };

    return (
      <div className="about fadein">
        <h4>TL;DR</h4>
        <img
          className="fadein"
          style={fadeInDelay}
          id="interview"
          alt="interview"
          src={interview}
        ></img>
        <div className="container">
          <p>
            I am a prospective Software Developer currently in my 5th semester
            of{" "}
            <a
              href="https://www.mohawkcollege.ca/programs/technology/computer-systems-technology-software-development-559"
              target="_blank"
              rel="noopener noreferrer"
            >
              studies at Mohawk College
            </a>
            . I am seeking a student co-op or intern position for Spring/Summer 2021 where I can make
            an active contribution and gain industry experience.
          </p>
          <p>
            I have a keen interest in any and all kinds of development work,
            from RESTful web services with Node.js to programming with C à la Kernighan & Ritchie.
            Through two co-op work terms, contract work and personal projects I have gained a foundational knowledge of
            software development that is ready to be applied in the workplace.
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
            or navigate to my Projects to see what I've been working on lately.
          </p>
        </div>
        <h4>BACK THEN</h4>
        <div className="container">
          <p>
            I first developed an interest in software a few years ago when the
            business I run with my wife inherited a very dated Wordpress website
            that I needed to turn in to a{" "}
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
            consider a career change when my aspirations in dairy farming hit a
            dead-end. <em>Ask me over a coffee about that one.</em>
          </p>
        </div>
        <h4>NOW</h4>
        <div className="container">
          <img
            className="fadein"
            style={fadeInDelay}
            id="coding"
            alt="coding"
            src={coding}
          ></img>
          <p>
            Fast forward to 2021. I am now nearly done my studies at Mohawk
            College and am feeling more and more confident in my ability to
            craft quality software.
          </p>
          <p>
            During my two co-op work terms in 2020, I worked on a variety of different projects.
            The first part of the work term had me working on a large legacy EMR application. 
            I used Java EE's JAX-RS libraries to build a REST API for a backend feature that was used to search for patients, doctors, and other entities.
            In that same app, I leveraged Webpack and vanilla JS to overhaul an important billing UI without the overhead of a frontend framework.
            During the second half of the work term, I worked on a more Dev-ops related project for a client whose application had a complex Node.js microservices architecture.
            I independently researched, built and documented a proof-of-concept ELK installation to solve their distributed logging problem.
            At the same time, I taught myself Ansible in order to automate the configuration of the proof-of-concept that I built, in both an AWS environment and on-prem KVM environment.
            The whole co-op experience taught me an incredible amount about the SDLC, communication with clients and stakeholders and coding as a team.
          </p>
          <p>
            Through coursework and my own studies I have learnt about data structures and algorithms,
            object-oriented design and test-driven development, among other computer science concepts and
            software engineering methodologies.
          </p>
          <p>
            Last year I worked on a few different side-projects such as this{" "}
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
            calls in the browser using my purchased Twilio phone number. I built
            the back-end with Node.js Express and the front-end with vanilla JS.
          </p>
          <p>
            If I have any spare time, you'll find me brushing up my data structures and algorithms. 
            On my bedside table is a copy of 
            Aditya Bhargava's influential book{" "}
            <a
              href="https://www.amazon.com/gp/product/1593279507/ref=dbs_a_def_rwt_bibl_vppi_i0"
              target="_blank"
              rel="noopener noreferrer"
            >
              'Grokking Algorithms'
            </a>
            . This book has transformed the way I think about programming problems and helped make DS & A a less intimidating domain.
          </p>
        </div>
        <h4>THE FUTURE</h4>
        <div className="container">
          <img
            className="fadein"
            style={fadeInDelay}
            id="pair"
            alt="pair programming"
            src={pair}
          ></img>
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
            science. What really excites me is where I can find an intersection between my other interests and software engineering.
            For example, agriculture and the Internet of Things.
          </p>
          <p>
            Over the next couple years, I'm hoping to further explore what can
            be done in the Javascript ecosystem and start contributing to some
            open-source projects. I also want to dive into Golang and learn more about containers.
          </p>
        </div>
      </div>
    );
  }
}
