import React, { Component } from 'react';
//import wireframe from './../../images/wireframes-watercolour-resized.jpg';

export default class Project extends Component {

    render() {

        const projectStyle = {
            backgroundColor: 'rgba(33,37,41,0.9)',
            color: 'oldlace',
            margin: '1em',
            padding: '1em'
        }

        const projectTitleStyle = {
            fontSize: '1.3em',
            fontFamily: 'bgMed',
        }

        const { title, category, thumbnailUrl, altText, description } = this.props.project;

        return (

            <div style={projectStyle}>
                <p style={projectTitleStyle}>{title}</p>
                <p>{category}</p>
                <img src={thumbnailUrl} alt={altText}/>
                <p style={{ maxWidth: '300px'}}>{description}</p>
            </div>
        );
        
    }

    

    
}

