import React, { Component } from "react";
import { MenuButton } from "./MenuButton";
import headshot from "../images/circular-bw-willem-and-i.png";
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
    const toggleView = (linkTitle) => {
      toggleNavbar();
      showPage(linkTitle);
    }

    const { collapsed, toggleNavbar, showPage } = this.props;
    let links = this.state.Links.map(link => (
      <li key={link.title}
        onClick={toggleView.bind(this, link.title)}
      >
        <a>{link.title}</a>
      </li>
    ));

    return (
      <div className={`sidebar ${collapsed ? "collapsed" : "expanded"}`}>
        <MenuButton toggleNavbar={toggleNavbar} collapsed={collapsed} />
        <img
          className={`${collapsed ? "collapsed" : "expanded"}`}
          src={headshot}
          alt="My son and I in the Alps"
        />
        <ul
          className={`links-container ${collapsed ? "collapsed" : "expanded"}`}
        >
          {links}
          <li><a href="https://github.com/nckdhl" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>
      </div>
    );
  }
}
