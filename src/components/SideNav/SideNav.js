import React, { Component } from 'react';
import { MenuButton } from '../MenuButton/MenuButton';
import NavLink from './NavLink';

import './SideNav.css';

export class SideNav extends Component {
  constructor (props) {
    super(props);

    this.state = {
        Links: [
          {
            title: 'About Me'
          },
          {
            title: 'Projects'
          },
          {
            title: 'Resume'
          },
          {
            title: 'Contact'
          }
        ]
    };
}


  render () {

    const { collapsed, toggleNavbar, showPage } = this.props;
    let links = this.state.Links.map((link) => (
      <NavLink key={link.title} linkTitle={link.title} showPage={showPage}/>
    ));
 
    return (
      <div className={`sidebar ${(collapsed ? 'collapsed' : 'expanded' )}`}>
        <MenuButton 
          toggleNavbar={toggleNavbar}
          collapsed={collapsed}
        />
        <ul className={`links-container ${(collapsed ? 'collapsed' : 'expanded' )}`}>
          {links}
        </ul>
      </div>  
    );
  }
}
