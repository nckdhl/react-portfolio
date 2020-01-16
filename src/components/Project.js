import React, { Component } from 'react';
//import wireframe from './../../images/wireframes-watercolour-resized.jpg';

export default class Project extends Component {

    render() {

        const projectStyle = {
            backgroundColor: 'rgba(33,37,41,0.9)',
            color: 'oldlace',
            margin: '1em',
            padding: '1em',
            borderRadius: '0.3em'
        }

        const projectTitleStyle = {
            fontSize: '1.3em',
            fontFamily: 'bgMed',
        }

        const categoryStyle = {
            fontSize: '1.1em'
        }

        const pStyle = {
            textAlign: 'left',
            fontSize: '1.1em',
            maxWidth: '300px'
        }

        const { title, category, thumbnailUrl, altText, description } = this.props.project;

        return (

            <div style={projectStyle}>
                <p style={projectTitleStyle}>{title}</p>
                <p style={categoryStyle}>{category}</p>
                <img src={thumbnailUrl} alt={altText}/>
                <p style={pStyle}>{description}</p>
            </div>
        );
        
    }

    

    
}

