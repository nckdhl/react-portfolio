import React from 'react';
import Header from './../Header';
import './ContentArea.css';
import AboutMeBlurb from './AboutMeBlurb';
import ProjectContainer from './../Projects/ProjectContainer';
import Form from './../Contact/Form';
import resume from './../../images/resume.pdf';

function ContentArea (props) {
  let content;

  switch (props.showPage){
    case 'Projects':
      content = <ProjectContainer />;
      break;
    case 'About Me':
      console.log("About Me shown");
      content = (<div>
                  <p>
                    Ut occaecat cillum magna dolore esse labore cupidatat. Commodo enim eu mollit aute laborum aute anim nostrud. Quis adipisicing tempor voluptate excepteur ut sit quis reprehenderit enim sint culpa ut. Ex cillum non irure aliqua ut commodo velit sint. Officia est nisi cillum ullamco. Et aliquip sit eiusmod esse voluptate consectetur sit mollit.

                    Consectetur elit consectetur laborum aliqua non veniam in duis nostrud ullamco laboris consequat. Nostrud labore nostrud velit sint excepteur Lorem deserunt ad ullamco culpa ullamco. In laboris in culpa pariatur Lorem eu minim esse ad occaecat. Occaecat exercitation veniam duis nulla fugiat culpa est Lorem. Enim ullamco fugiat non officia incididunt culpa officia exercitation consectetur proident ullamco ad. Aliqua mollit labore laboris do duis labore ut et anim labore ut eu quis. Velit pariatur eu cupidatat ullamco enim excepteur exercitation sint do voluptate deserunt sint deserunt.

                    Anim non aliqua mollit laboris sunt qui sunt. Aliqua id occaecat culpa laborum dolore. Incididunt ullamco veniam minim elit eiusmod ea et. Minim incididunt deserunt consectetur adipisicing do eu.
                  </p>
                </div>)
      break;
    case 'Contact':
      console.log("Contact shown");
      content = <Form />
      break;
    case 'Resume':
      console.log("Resume shown");
      content = <object 
                  data={resume}  
                  type="application/pdf" 
                  width="1000px" 
                  height="1000px"
                >Resume</object>
      break;
    default:
      console.log("Empty action");
      break
  }

  return <div className="ContentArea">
    <Header />
    <AboutMeBlurb />
    {content}
  </div>;
}

export default ContentArea;