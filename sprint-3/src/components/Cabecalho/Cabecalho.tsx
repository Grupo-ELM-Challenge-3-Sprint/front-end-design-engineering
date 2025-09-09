import { Link } from "react-router-dom";
import imagemLogo from '../../assets/img/imagem-index/imagem-logo.jpeg'
// import imagemBotaoMenu from '../../assets/img/icons/icone-botao.png'

export default function Cabecalho() {

  return (
    <header className="bg-white py-[10px] border-b border-[#eee] relative top-0 z-[1000]" >
        <div className="container">
            <div>
                <Link to="/" className="logo flex w-27 h-auto mr-2 items-center ">
                    <img src={imagemLogo} alt="Logo SimplesHC" className="" />
                    <span className="">SimplesHC</span>
                </Link>   
            </div>
            {/* <button 
                className="menu-toggle" 
                type="button" 
                aria-label="Abrir menu" 
                aria-expanded="false"
                aria-controls="primary-navigation">
                <img src={imagemBotaoMenu} alt="Menu" className="menu-icon-img" />
            </button> */}
            <nav 
                id="primary-navigation" 
                aria-hidden="true"
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
