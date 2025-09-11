import { Link, NavLink } from "react-router-dom";
import imagemLogo from '../../assets/img/imagem-index/imagem-logo.jpeg'
import imagemBotaoMenu from '../../assets/img/icons/icone-botao.png'

export default function Cabecalho() {

    const linkClasses = ({ isActive }: { isActive: boolean }) => `block text-base p-4 ${isActive ? "text-blue-600 font-bold border-b-2 border-blue-600" : "text-gray-700 hover:text-blue-600"}`;
  return (
    <header className="bg-white py-2.5 border-b border-[#eee] relative top-0 z-[1000]" >
        <div className="w-[90%] flex justify-between items-center relative">
                <Link to="/" className="logo font-bold text-[#005c99] no-underline ml-12 z-[1001] flex items-center">
                    <img src={imagemLogo} alt="Logo SimplesHC" className="w-24 h-auto mr-2" />
                    <span className="text-lg text-[#005c99]">SimplesHC</span>
                </Link>
            <button 
                className="menu-toggle" 
                type="button" 
                aria-label="Abrir menu" 
                aria-expanded="false"
                aria-controls="primary-navigation">
                <img src={imagemBotaoMenu} alt="Menu" className="menu-icon-img w-8" />
            </button>
            <nav className="flex w-screen justify-end items-center h-[8vh] hidden">
                <NavLink to={'/'} className={linkClasses}>Início</NavLink>
                <NavLink to={'/hospitais'} className={linkClasses}>Hospitais</NavLink>
                <NavLink to={'/servicos'} className={linkClasses}>Serviços</NavLink>
                <NavLink to={'/integrantes'} className={linkClasses}>Integrantes</NavLink>
                <NavLink to={'/faq'} className={linkClasses}>FAQ</NavLink>
                <NavLink to={'/contato'} className={linkClasses}>Contato</NavLink>
                <NavLink to={'/entrar'} className="bg-white text-blue-600 border border-blue-600 font-bold px-5 py-3 rounded hover:bg-[#e6f2ff] transition">Entrar</NavLink>
            </nav>
        </div>
    </header>
  );
}
