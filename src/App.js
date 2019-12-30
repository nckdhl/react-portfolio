import React, { Component } from 'react';
import ContentArea from './components/ContentArea/ContentArea';
import { SideNav } from './components/SideNav/SideNav';
import './App.css';

export class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      collapsed: true,
      showPage: ''
    };
  }

  toggleNavbar = () => {
    console.log("Clicked - toggled");
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  togglePage = (pageName) => {
    console.log("Page - toggled");
    this.setState({
      showPage: pageName
    });
  }

  render () {
    return (
      <div className="App">
        <ContentArea showPage={this.state.showPage} />
        <SideNav
          showPage={this.togglePage} 
          toggleNavbar={this.toggleNavbar}
          collapsed={this.state.collapsed}
        />
      </div>
    );
  }
}

