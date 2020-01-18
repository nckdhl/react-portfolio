import React, { Component } from "react";
import Project from "./Project";
import ("./css/Project.css");

export default class ProjectContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title: "BUBBLY MAMMOTH",
          category: "Business Website",
          tags: "#StaticHTML #Netlify",
          thumbnailUrl: require("../assets/images/bubblymammoth-300px.gif"),
          repoUrl: "https://github.com/nckdhl/bubblymammoth-netlify",
          liveSiteUrl: "https://bubblymammoth.com",
          altText: "animated Bubbly Mammoth website",
          description:
            "Bubbly Mammoth is a business I run together with my wife. " +
            "This website is just static HTML and CSS, deployed to Netlify. " +
            "It is the Canadian arm of Peter&Pat Seifenblasen that we are currently working to launch in 2020. "
        },
        {
          title: "IN-BROWSER VOIP CLIENT",
          category: "Fullstack Javascript Web App",
          tags: "#NodeJS #TwilioAPI #Heroku #Netlify #VanillaJS #postgreSQL",
          thumbnailUrl: require("../assets/images/vanillavoip-300px.gif"),
          repoUrl: "https://github.com/nckdhl/vanilla-twilio-client",
          liveSiteUrl: "https://vanillavoip.com",
          altText: "animated Vanilla VOIP website",
          description:
            "This app is essentially a VOIP client to make and receive voice calls. " +
            "It uses the Twilio programmable voice API and a Twilio phone number. " +
            "The back-end is Node.js Express deployed to Heroku. The front-end is vanilla JS deployed to Netlify."
        },
        {
          title: "FOCUS FARM TO-DO APP",
          category: "Vanilla JS and PHP Web App",
          tags: "#PHP #VanillaJS #MySQL #Bootstrap",
          thumbnailUrl: require("../assets/images/focusfarm-300px.gif"),
          repoUrl: "https://github.com/nckdhl/focusfarm-todolist",
          liveSiteUrl: "",
          altText: "animated Focus Farm website",
          description:
            "This was a school project for my PHP and JS course. " +
            "It is a basic to-do list app."
        },
        {
          title: "PETER&PAT SEIFENBLASEN",
          category: "Business Website",
          tags: "#Wordpress #Woocommerce #Divi",
          thumbnailUrl: require("../assets/images/peterandpat-300px.gif"),
          repoUrl: "",
          liveSiteUrl: "https://peter-pat-seifenblasen.de",
          altText: "animated Peter & Pat Seifenblasen website",
          description:
            "This is the website for an online store I run with my wife and brother-in-law in Germany. " +
            "We sell giant bubble toys in German-speaking Europe. It is a Wordpress/Woocommerce site that I overhauled in 2016 and maintain part-time. "
        }
      ]
    };
  }

  render() {

    let projects = this.state.projects.map(project => {
      console.log(project);
      return <Project key={project.title} project={project} />;
    });

    return <div id="projectContainer">{projects}</div>;
  }
}
