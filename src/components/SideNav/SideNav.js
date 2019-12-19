import React, { Component } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import './SideNav.css';

export class SideNav extends Component {

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    console.log("Clicked - toggled");
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <div className={`sidebar ${(this.state.collapsed ? 'collapsed' : 'expanded' )}`}>
        <div onClick={this.toggleNavbar}>
          <MenuButton 
          collapsed={this.state.collapsed}
          />
          <ul className={`links-container ${(this.state.collapsed ? 'collapsed' : 'expanded' )}`}>
            <li>About Me</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>    
    );
  }
}
