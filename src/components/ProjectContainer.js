import React, { Component } from 'react';
import Project from './Project';

export default class ProjectContainer extends Component {
    constructor (props) {
        super(props);
    
        this.state = {
            projects: [
                {
                    title: 'BUBBLY MAMMOTH', 
                    category: 'Business Website',
                    thumbnailUrl: require('../assets/images/wireframes-watercolour-resized.jpg'),
                    altText: 'Website watercolour wireframe',
                    description: 'Bubbly Mammoth is a business I run together with my wife. ' +
                                 'We sell handmade bubble toys'
                },
                {
                    title: 'IN-BROWSER VOIP CLIENT', 
                    category: 'VOIP Javascript Dialer',
                    thumbnailUrl: require('../assets/images/wireframes-watercolour-resized.jpg'),
                    altText: 'Website watercolour wireframe',
                    description: 'This project is essentially a dialpad to make outgoing voice calls. ' +
                                 'It uses the Twilio programmable voice API. ' +
                                 'The back-end is a python Flask app. The front-end is React.'
                },
                {
                    title: 'FOCUS FARM TO-DO APP', 
                    category: 'Vanilla JS and PHP Webapp',
                    thumbnailUrl: require('../assets/images/wireframes-watercolour-resized.jpg'),
                    altText: 'Website watercolour wireframe',
                    description: 'This was a school project for my PHP and JS course. ' +
                                 'It is a basic to-do list app.'
                }
            ]
        };
    }

    render() {

        const containerStyles = {
            display: 'flex',
            justifyContent: 'center',
            flexFlow: 'row wrap'
        }
        
        let projects = this.state.projects.map(project => {
            console.log(project);
            return (
                <Project key={project.title} project={project} />
            );
        })
        
        return (
            <div style={containerStyles}>
                { projects }
            </div>
        );
    }
}
