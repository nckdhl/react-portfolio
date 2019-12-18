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

  componentDidMount() {
    const transition = () => {
      this.refs.Name.classList.add("active");
    }
    setTimeout(transition, 3000);
  }

  toggleVowels () {
    this.setState({
      vowels: !this.state.vowels
    });
  }

  render () {
    return (
        <h1 className="brand-name" onMouseLeave={this.toggleVowels} onMouseEnter={this.toggleVowels} href="#">
          <span ref="Name" className="consonant n">n</span>
          <span ref="Name" className="vowel i">i</span>
          <span ref="Name" className="consonant ck">ck</span>
          <span ref="Name" className="consonant d">d</span>
          <span ref="Name" className="vowel a">a</span>
          <span ref="Name" className="consonant hl">hl</span>
        </h1>
    );
  }
}
