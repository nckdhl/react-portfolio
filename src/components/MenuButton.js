import React, { Component } from 'react';
import './css/MenuButton.css';

export class MenuButton extends Component {

render () {

  const { collapsed, toggleNavbar } = this.props;
  
  return (
    <span 
        className={`json-burger ${(collapsed ? 'collapsed' : 'expanded' )}`}
        onClick={toggleNavbar}
      >
          {'[{}]'}
      </span>
  );
}
}