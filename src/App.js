import React, { Component } from 'react';
import ContentArea from './components/ContentArea/ContentArea';
import { SideNav } from './components/SideNav/SideNav';
import './App.css';

export class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      collapsed: true
    };
  }

  toggleNavbar = () => {
    console.log("Clicked - toggled");
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <div className="App">
        <ContentArea />
        <SideNav 
          toggleNavbar={this.toggleNavbar}
          collapsed={this.state.collapsed}
        />
      </div>
    );
  }
}

