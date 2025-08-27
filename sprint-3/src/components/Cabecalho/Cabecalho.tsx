import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <header>
        <div classNameNameName="container">
            <div>
                <a href="#" classNameNameName="logo">
                    <img src="./assets/img/imagem-index/imagem-logo.jpeg" alt="Logo SimplesHC" />
                    <span>SimplesHC</span>
                </a>   
            </div>
            <button classNameNameName="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="primary-navigation">
                <img src="./assets/img/icons/icone-botao.png" alt="Menu" classNameNameName="menu-icon-img" />
            </button>
            <nav id="primary-navigation" aria-hidden="true"
                    data-guide-step="3"
                    data-guide-title="Navegação da página"
                    data-guide-text="Use o menu acima para acessar páginas como Início, Serviços, FAQ e mais."
                    data-guide-arrow="up">

                    <Link to="/">Início</Link>
                    <Link to="/hospitais">Hospitais</Link>
                    <Link to="/servicos">Serviços</Link>
                    <Link to="/integrantes">Integrantes</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/contato">Contato</Link>
                    <Link to="/entrar">Entrar</Link>
            </nav>
        </div>
    </header>
  );
}
