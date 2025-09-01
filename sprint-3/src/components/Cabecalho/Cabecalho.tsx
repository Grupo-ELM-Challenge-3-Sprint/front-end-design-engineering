import { Link } from "react-router-dom";
import { useState } from "react";

export default function Cabecalho() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={isMenuOpen ? 'menu-open' : ''}>
        <div className="container">
            <div>
                <Link to="/" className="logo">
                    <img src="./assets/img/imagem-index/imagem-logo.jpeg" alt="Logo SimplesHC" />
                    <span>SimplesHC</span>
                </Link>   
            </div>
            <button 
                className="menu-toggle" 
                type="button" 
                aria-label="Abrir menu" 
                aria-expanded={isMenuOpen} 
                aria-controls="primary-navigation"
                onClick={toggleMenu}>
                <img src="./assets/img/icons/icone-botao.png" alt="Menu" className="menu-icon-img" />
            </button>
            <nav 
                id="primary-navigation" 
                aria-hidden={!isMenuOpen}
                data-guide-step="3"
                data-guide-title="Navegação da página"
                data-guide-text="Use o menu acima para acessar páginas como Início, Serviços, FAQ e mais."
                data-guide-arrow="up">
                <ul>
                    <Link to={'/'}>Início</Link>
                    <Link to={'/hospitais'}>Hospitais</Link>
                    <Link to={'/servicos'}>Serviços</Link>
                    <Link to={'/integrantes'}>Integrantes</Link>
                    <Link to={'/faq'}>FAQ</Link>
                    <Link to={'/contato'}>Contato</Link>
                    <Link to={'/entrar'} className="btn-nav-login">Entrar</Link>
                </ul>
            </nav>
        </div>
    </header>
  );
}
