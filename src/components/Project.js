import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faGithub,
  faExpeditedssl,
  faChrome
} from "@fortawesome/free-brands-svg-icons";

export default class Project extends Component {
  render() {
    const projectStyle = {
      backgroundColor: "rgba(33,37,41,0.9)",
      color: "oldlace",
      margin: "1em",
      padding: "0em 1em 1em 1em",
      borderRadius: "0.3em",
      height: "100%"
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
      position: "relative",
      bottom: "5px",
      left: "5px"
    };

    const anchorStyle = {
      paddingTop: "0.5em",
      display: "block",
      color: "oldlace",
      textDecoration: "none"
    };

    const tagStyle = {
      color: "orange",
      maxWidth: "300px"
    };

    const imgStyle = {
      filter: "drop-shadow(0 0 1rem black)"
    };

    const {
      title,
      category,
      tags,
      thumbnailUrl,
      repoUrl,
      liveSiteUrl,
      altText,
      description
    } = this.props.project;

    let links = [];

    const gitHubLink = (
      <a
        style={anchorStyle}
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="1x" /> GitHub Repo
      </a>
    );

    const liveSiteLink = (
      <a
        style={anchorStyle}
        href={liveSiteUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faChrome} size="1x" /> Live Site
      </a>
    );

    if (repoUrl && liveSiteUrl) {
      links = [gitHubLink, liveSiteLink];
    } else if (repoUrl && !liveSiteUrl) {
      links = [gitHubLink];
    } else if (!repoUrl && liveSiteUrl) {
      links = [liveSiteLink];
    }

    return (
      <div style={projectStyle}>
        <p style={projectTitleStyle}>{title}</p>
        <p style={categoryStyle}>{category}</p>
        <p style={tagStyle}>{tags}</p>
        <img style={imgStyle} src={thumbnailUrl} alt={altText} />
        <p style={pStyle}>{description}</p>
        <div style={linkStyle}>
          { links }
        </div>
      </div>
    );
  }
}
