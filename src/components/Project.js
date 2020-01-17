import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab, faGithub, faExpeditedssl } from "@fortawesome/free-brands-svg-icons";

export default class Project extends Component {
  render() {
    const projectStyle = {
      backgroundColor: "rgba(33,37,41,0.9)",
      color: "oldlace",
      margin: "1em",
      padding: "1em",
      borderRadius: "0.3em",
      height: '100%'
    };

    const projectTitleStyle = {
      fontSize: "1.3em",
      fontFamily: "bgMed"
    };

    const categoryStyle = {
      fontSize: "1.1em"
    };

    const pStyle = {
      textAlign: "left",
      fontSize: "1.1em",
      maxWidth: "300px"
    };

    const linkStyle = {
        color: 'oldlace',
        position: 'relative',
        bottom: '5px',
        left: '5px',
        textDecoration: 'none'
    }

    const {
      title,
      category,
      thumbnailUrl,
      repoUrl,
      altText,
      description
    } = this.props.project;

    return (
      <div style={projectStyle}>
        <p style={projectTitleStyle}>{title}</p>
        <p style={categoryStyle}>{category}</p>
        <img src={thumbnailUrl} alt={altText} />
        <p style={pStyle}>{description}</p>
        <a style={linkStyle} href={repoUrl} target="_blank">
          <FontAwesomeIcon style={{ marginBottom: '-4px'}} icon={faGithub} size="2x" /> GitHub repository
        </a>
      </div>
    );
  }
}
