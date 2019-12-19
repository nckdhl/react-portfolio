import React, { Component } from 'react';
import ContentArea from './components/ContentArea/ContentArea';
import { SideNav } from './components/SideNav/SideNav';
import './App.css';

export class App extends Component {

  render () {
    return (
      <div className="App">
        <ContentArea />
        <SideNav />
      </div>
    );
  }
}

