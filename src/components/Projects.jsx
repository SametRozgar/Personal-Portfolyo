import React, { useContext } from 'react';
import "./projects.css";
import { ContextLanguage } from '../context/LanguageContexts';
import useDarkMode from '../hooks/useDarkMode';
import image1 from "../assets/img/image.png";
import image2 from "../assets/img/project.jpeg";
import image3 from "../assets/img/projects-2.jpeg";

const Projects = () => {
  const { content } = useContext(ContextLanguage);
  const [isDarkMode] = useDarkMode();

  const projectsData = [
    {
      id: 1,
      title: content.project1_title,
      description: content.project1_desc,
      image: image1,
      tags: ["HTML", "CSS", "Three.js", "Blender"],
      github: "https://github.com/SametRozgar/Game-Of-Thrones-Imdb-Page-With-3D-Dragon-Model",
      live: "#"
    },
    {
      id: 2,
      title: content.project2_title,
      description: content.project2_desc,
      image: image2,
      tags: ["TypeScript", "Payload", "tRPCX"],
      github: "https://github.com/SametRozgar/Digital-Hippo",
      live: "#"
    },
    {
      id: 3,
      title: content.project3_title,
      description: content.project3_desc,
      image: image3,
      tags: ["React", "Three.js", "3D Models"],
      github: "https://github.com/SametRozgar/Animated-3D-iPhone-16-Cart-Desgin",
      live: "#"
    }
  ];

  return (
    <div className={`projects ${isDarkMode ? 'dark-mode' : ''}`}> 
      <h2 className="projects-title">{content.projects}</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="projects-card">
            <img src={project.image} alt={project.title} className="projects-image" />
            <h3 className="projects-name">{project.title}</h3>
            <p className="projects-description">{project.description}</p>
            <div className="projects-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="projects-tag">{tag}</span>
              ))}
            </div>
            <div className="projects-links">
              <a href={project.github} className="projects-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.live} className="projects-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
