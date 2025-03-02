import React from 'react';
import '../styles/Summary.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Summary() {
  return (
    <section className="summary">
      <h2>Sobre este Portfólio</h2>
      <p>
        Este portfólio foi desenvolvido utilizando as seguintes tecnologias:
      </p>
      <ul className="tech-list">
        <li>React.js para a estrutura do site</li>
        <li>JavaScript (ES6+) para a lógica</li>
        <li>CSS3 para estilização</li>
        <li>React Icons para ícones</li>
        <li>React Scroll para navegação suave</li>
        <li>Fetch API para integrar com o GitHub </li>
      </ul>
      
      <h3>Onde me encontrar</h3>
      <div className="contact-links">
        <a href="https://github.com/CamilGon" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/camila-gons" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} /> LinkedIn
        </a>
        <a href="mailto:dev.camilagon@gmail.com">
          <FaEnvelope size={24} /> Email
        </a>
      </div>
    </section>
  );
}

export default Summary;
