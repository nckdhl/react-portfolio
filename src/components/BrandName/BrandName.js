import React, { Component } from 'react';
import './BrandName.css';

export class BrandName extends Component {

  constructor (props) {
    super(props);

    this.toggleVowels = this.toggleVowels.bind(this);
    this.state = {
      vowels: true
    };
  }

  toggleVowels () {
    this.setState({
      vowels: !this.state.vowels
    });
  }

  render () {
    return (
        <span id="brand-name" onMouseLeave={this.toggleVowels} onMouseEnter={this.toggleVowels} href="#">{ 
            this.state.vowels ? 
            'Nckdhl' 
            : 'Nick Dahl' }</span>
    );
  }
}
