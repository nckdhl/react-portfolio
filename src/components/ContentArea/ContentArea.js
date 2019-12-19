import React from 'react';
import Header from './../Header';
import './ContentArea.css';
import AboutMeBlurb from './AboutMeBlurb';

function ContentArea () {
  return <div className="ContentArea">
    <Header />
    <AboutMeBlurb />
  </div>;
}

export default ContentArea;