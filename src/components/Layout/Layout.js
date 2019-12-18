import React, { Component } from 'react';
import ContentArea from './../ContentArea/ContentArea';
import { SideNav } from './../SideNav/SideNav';

export class Layout extends Component {

  render () {
    return (
      <div className="Layout">
        <ContentArea />
        <SideNav />
      </div>
    );
  }
}
