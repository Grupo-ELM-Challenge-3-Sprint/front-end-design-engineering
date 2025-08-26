import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <header>
        <div className="container">
            <div>
                <a href="#" className="logo">
                    <img src="./assets/img/imagem-index/imagem-logo.jpeg" alt="Logo SimplesHC" />
                    <span>SimplesHC</span>
                </a>   
            </div>
            <button className="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="primary-navigation">
                <img src="./assets/img/icons/icone-botao.png" alt="Menu" className="menu-icon-img" />
            </button>
            <nav id="primary-navigation" aria-hidden="true"
                    data-guide-step="3"
                    data-guide-title="Navegação da página"
                    data-guide-text="Use o menu acima para acessar páginas como Início, Serviços, FAQ e mais."
                    data-guide-arrow="up">
<<<<<<< HEAD

                    <Link to="/">Início</Link>
                    <Link to="/hospitais">Hospitais</Link>
                    <Link to="/servicos">Serviços</Link>
                    <Link to="/integrantes">Integrantes</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/contato">Contato</Link>
                    <Link to="/entrar">Entrar</Link>
=======
                <ul>
                    <li><a href="#" className="active">Início</a></li>
                    <li><a href="./assets/paginas/hospitais.html">Hospitais</a></li>
                    <li><a href="./assets/paginas/servicos.html">Serviços</a></li>
                    <li><a href="./assets/paginas/integrantes.html">Integrantes</a></li>
                    <li><a href="./assets/paginas/faq.html">FAQ</a></li>
                    <li><a href="./assets/paginas/contato.html">Contato</a></li>
                    <li className="nav-item-login"><a href="./assets/paginas/area-paciente/meu-perfil.html" className="btn-nav-login">Entrar</a></li>
                </ul>
>>>>>>> main
            </nav>
        </div>
    </header>
  );
}
