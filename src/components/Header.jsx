import { Link } from 'react-scroll';
import '../styles/Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Camila Gonçalves</h1>
      </div>
      <nav className="nav-links">
        <Link to="profile" smooth={true} duration={500} className="nav-item">Quem Sou</Link>
        <Link to="skills" smooth={true} duration={500} className="nav-item">Skills</Link>
        <Link to="projects" smooth={true} duration={500} className="nav-item">Projetos</Link>
        <Link to="summary" smooth={true} duration={500} className="nav-item">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
