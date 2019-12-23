import React, { Component } from 'react';
//import wireframe from './../../images/wireframes-watercolour-resized.jpg';

export default class Project extends Component {

    render() {

        const projectStyle = {
            backgroundColor: '#212529',
            color: 'oldlace',
            borderRadius: '1em',
            margin: '1em',
            padding: '1em'
        }

        const { title, category, thumbnailUrl, altText, description } = this.props.project;

        return (

            <div style={projectStyle}>
                <p>{title}</p>
                <p>{category}</p>
                <img src={thumbnailUrl} alt={altText}/>
                <p style={{ maxWidth: '300px'}}>{description}</p>
            </div>
        );
        
    }

    

    
}

