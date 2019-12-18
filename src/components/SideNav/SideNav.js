import React, { Component } from 'react';
import { MenuButton } from '../MenuButton/MenuButton';
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
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <div className='sidebar'>
        <MenuButton />
      </div>    
    );
  }
}
