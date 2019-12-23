import React from 'react';
import Header from './../Header';
import './ContentArea.css';
import AboutMeBlurb from './AboutMeBlurb';
import ProjectContainer from './../Projects/ProjectContainer';

function ContentArea () {
  return <div className="ContentArea">
    <Header />
    <AboutMeBlurb />
    <ProjectContainer />
  </div>;
}

export default ContentArea;