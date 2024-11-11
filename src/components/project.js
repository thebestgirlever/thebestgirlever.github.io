import "./project.css";
import React from 'react';
import data from '../data.json';

const Projects = () => {
    return (
        <div className="projects">
            {data.projects.map((project, index) => (
                <a
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="l-block-link"
                >
                    <div key={index} className="l-block">
                        <img className="l-pic" src={project.image} alt={project.title} />
                        <div className="l-description">
                            <div className="desc-title">{project.title}</div>
                            <div className="desc-text">{project.description}</div>
                            <div className="desk-tags">
                                {project.tags.map((tag, tagIndex) => (
                                    <div key={tagIndex} className="tag">{tag}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default Projects;
