import React, { useState } from 'react';
import "./projects.css";

const projectsData = [
  {
    id: 1,
    title: "Workintech",
    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline...",
    image: "https://static.vecteezy.com/system/resources/thumbnails/021/957/915/small/cat-having-bad-mood-angry-pet-bad-emotions-anger-dissatisfaction-with-life-negative-facial-expression-bad-day-misfortune-concept-generative-ai-photo.jpg",
    tags: ["react", "redux", "axios"],
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Random Jokes",
    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline...",
    image: "https://static.vecteezy.com/system/resources/thumbnails/021/957/915/small/cat-having-bad-mood-angry-pet-bad-emotions-anger-dissatisfaction-with-life-negative-facial-expression-bad-day-misfortune-concept-generative-ai-photo.jpg",
    tags: ["react", "redux", "axios"],
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Journey",
    description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline...",
    image: "https://static.vecteezy.com/system/resources/thumbnails/021/957/915/small/cat-having-bad-mood-angry-pet-bad-emotions-anger-dissatisfaction-with-life-negative-facial-expression-bad-day-misfortune-concept-generative-ai-photo.jpg",
    tags: ["react", "redux", "axios"],
    github: "#",
    live: "#"
  }
];

const Projects = () => {
    const [project , setProject]=useState("");
  return (
    <div className='projects'>
      <h2 className="projects-title">Projects</h2>
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
              <a href={project.github} className="projects-link">Github</a>
              <a href={project.live} className="projects-link">View Site</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
