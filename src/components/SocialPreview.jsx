import React, { useEffect, useState } from 'react';
import '../styles/SocialPreview.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function SocialPreview() {
  const githubUsername = "CamilGon"; 
  const linkedinProfileUrl = "https://www.linkedin.com/in/camila-gons"; 
  const linkedinProfilePic = "https://media.licdn.com/dms/image/v2/D4D03AQHeSCmF-GErgg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694795126646?e=1746662400&v=beta&t=84PHohDQ2iVHEQtAXiqDb9pmPvxw32rpn3yE9OqTL5Q"; 
  
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}`)
      .then(response => response.json())
      .then(data => setGithubData(data))
      .catch(error => console.error("Erro ao buscar dados do GitHub:", error));
  }, [githubUsername]);

  return (
    <section className="social-preview">
      <h2>Minhas Redes</h2>

      <div className="social-container">
        {/* GitHub Section */}
        {githubData && (
          <div className="github-preview">
            <img src={githubData.avatar_url} alt="GitHub Avatar" className="github-avatar" />
            <h3>{githubData.name}</h3>
            <p>{githubData.bio}</p>
            <p>💻 Repositórios públicos: {githubData.public_repos}</p>
            <a href={githubData.html_url} target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} /> Acessar GitHub
            </a>
          </div>
        )}

        {/* LinkedIn Section */}
        <div className="linkedin-preview">
          <div className="linkedin-photo">
            <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
              <img src={linkedinProfilePic} alt="Foto de Perfil do LinkedIn" className="linkedin-avatar" />
            </a>
          </div>
          <p>Vamos conectar no LinkedIn! Veja minhas experiências e habilidades profissionais.</p>
          <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} /> Acessar LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialPreview;

