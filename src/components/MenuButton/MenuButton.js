import React, { Component } from 'react';
import './MenuButton.css';

export class MenuButton extends Component {

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
      <span id="json-burger">
          {'[{}]'}
      </span>
    );
  }
}
