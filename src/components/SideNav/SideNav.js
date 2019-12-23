import React, { Component } from 'react';
import { MenuButton } from '../MenuButton/MenuButton';
import './SideNav.css';

export class SideNav extends Component {

  render (props) {

    const { collapsed, toggleNavbar } = this.props;

    return (
      <div className={`sidebar ${(collapsed ? 'collapsed' : 'expanded' )}`}>
        <MenuButton 
          toggleNavbar={toggleNavbar}
          collapsed={collapsed}
        />
        <ul className={`links-container ${(collapsed ? 'collapsed' : 'expanded' )}`}>
          <li>About Me</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </div>  
    );
  }
}
