import React from 'react';
import '../styles/Profile.css';
import profilePic from '../assets/profile.jpeg'; 

function Profile() {
  return (
    <section className="profile">
      <img src={profilePic} alt="Foto de perfil" className="profile-img" />
      <h1 className="profile-name">Camila Gonçalves</h1>
      <h2 className="profile-title">Analista de Sistemas/Desenvolvedora</h2>
      <p className="profile-description">
      Sou uma analista de sistemas e desenvolvedora, com uma paixão crescente por tecnologia e inovação. Ao longo da minha carreira, trabalhei em diversas áreas, como análise de dados, gestão de equipes e atendimento ao cliente. Atualmente, sou desenvolvedora full-stack com expertise em JavaScript, React, Node.js, Redux, React Hooks, MySQL e Postgres. Além das competências técnicas, valorizo a comunicação clara, a resolução criativa de problemas e o trabalho colaborativo. Tenho como objetivo seguir evoluindo e aplicando minhas habilidades em projetos desafiadores. </p>
    </section>
  );
}

export default Profile;
