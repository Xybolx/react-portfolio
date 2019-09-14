import React from "react";

const ProjectDetail = props => {

    return (
        <div className="project-container">
            <div className="img-container">
                <img src={props.src} className="img-fluid" alt="" />
            </div>
            <div className="details">
                <h3 className="project-title">{props.title}</h3>
                <h6><a className="port-button" href={props.deployHref} rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i>
                    Deployment</a></h6>
                <h6><a className="port-button" href={props.repoHref} rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i>
                    Repository</a></h6>
            </div>
        </div>
    );
};

export default ProjectDetail;