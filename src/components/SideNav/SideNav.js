import React, { Component } from "react";
import { MenuButton } from "../MenuButton/MenuButton";
import NavLink from "./NavLink";
import headshot from "../../images/circular-bw-willem-and-i.png";
import "./SideNav.css";

export class SideNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Links: [
        {
          title: "About Me"
        },
        {
          title: "Projects"
        },
        {
          title: "Resume"
        },
        {
          title: "Contact"
        }
      ]
    };
  }

  render() {
    const { collapsed, toggleNavbar, showPage } = this.props;
    let links = this.state.Links.map(link => (
      <NavLink
        key={link.title}
        toggleNavbar={toggleNavbar}
        linkTitle={link.title}
        showPage={showPage}
      />
    ));

    return (
      <div className={`sidebar ${collapsed ? "collapsed" : "expanded"}`}>
        <MenuButton toggleNavbar={toggleNavbar} collapsed={collapsed} />
        <img
          className={`links-container ${collapsed ? "collapsed" : "expanded"}`}
          src={headshot}
          alt="My son and I in the Alps"
        />
        <ul
          className={`links-container ${collapsed ? "collapsed" : "expanded"}`}
        >
          {links}
          <li>Github</li>
        </ul>
      </div>
    );
  }
}
