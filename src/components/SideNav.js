import React, { Component } from "react";
import { MenuButton } from "./MenuButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import headshot from "../assets/images/circular-bw-willem-and-i.png";
import "./css/SideNav.css";

export class SideNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Links: [
        {
          title: "ABOUT"
        },
        {
          title: "PROJECTS"
        },
        {
          title: "RESUME"
        },
        {
          title: "CONTACT"
        }
      ]
    };
  }

  render() {
    const toggleView = linkTitle => {
      toggleNavbar();
      showPage(linkTitle);
    };

    const { collapsed, toggleNavbar, showPage } = this.props;
    let links = this.state.Links.map(link => (
      <li key={link.title} onClick={toggleView.bind(this, link.title)}>
        <a>{link.title}</a>
      </li>
    ));

    return (
      <div className={`sidebar ${collapsed ? "collapsed" : "expanded"}`}>
        <MenuButton toggleNavbar={toggleNavbar} collapsed={collapsed} />
        <div className={`sidebarWrapper ${collapsed ? "collapsed" : "expanded"}`}>
          <img
            src={headshot}
            alt="My son and I in the Alps"
          />
          <ul
            className="links-container"
          >
            {links}
          </ul>

          <div className="social">
            <span>
              <a href="http://github.com/nckdhl" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </span>
            <a href="#" target="">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
