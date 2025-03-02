import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Meu Portfólio',
      description: 'Um site pessoal criado com React para apresentar minhas habilidades e projetos.',
      repoLink: 'https://github.com/seuusuario/meu-portfolio',
      demoLink: 'https://seuportfolio.com'
    },
    {
      title: 'Gerenciador de Tarefas',
      description: 'Aplicação para gerenciar tarefas, utilizando React e Firebase.',
      repoLink: 'https://github.com/seuusuario/gerenciador-tarefas',
      demoLink: 'https://gerenciador-tarefas.com'
    },
    {
      title: 'E-commerce Simples',
      description: 'Uma loja virtual desenvolvida com React e Node.js.',
      repoLink: 'https://github.com/seuusuario/ecommerce-simples',
      demoLink: 'https://ecommerce-simples.com'
    }
  ];

  return (
    <section className="projects">
      <h2>Meus Projetos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Repositório</a>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
