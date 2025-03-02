
import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const softSkills = [
    'Comunicação',
    'Trabalho em Equipe',
    'Empatia',
    'Liderança',
    'Criatividade'
  ];

  const hardSkills = [
    'JavaScript',
    'React',
    'Node.js',
    'HTML/CSS',
    'Git'
  ];

  return (
    <section className="skills">
      <h2>Minhas Skills</h2>
      <div className="skills-container">
        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <ul>
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="hard-skills">
          <h3>Hard Skills</h3>
          <ul>
            {hardSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
