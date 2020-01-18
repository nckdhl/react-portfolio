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
        className="link"
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="1x" /> GitHub Repo
      </a>
    );

    const liveSiteLink = (
      <a
        className="link"
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
      <div className="project" >
        <p className="title" >
          {title}
        </p>
        <p className="category" >
          {category}
        </p>
        <p className="tag" >
          {tags}
        </p>
        <img src={thumbnailUrl} alt={altText} />
        <p className="description" >
          {description}
        </p>
        <div className="linkContainer" >
          {links}
        </div>
      </div>
    );
  }
}
