import { Link, NavLink } from "react-router-dom";
import imagemLogo from '../../assets/img/imagem-index/imagem-logo.jpeg'
import imagemBotaoMenu from '../../assets/img/icons/icone-botao.png'
import { useState } from "react";

export default function Cabecalho() {

    const [menuOpen, setMenuOpen] = useState(false);
    //const linksHeader = ({ isActive }: { isActive: boolean }) => `block text-base p-4 ${isActive ? "text-blue-600 font-bold border-b-2 border-blue-600" : "text-gray-700 hover:text-blue-600"}`;
    
    const linksHeader = ({ isActive }: { isActive: boolean }) =>
  `
    block w-full px-4 py-2 text-base font-medium rounded text-center transition-colors
    min-[951px]:w-auto min-[951px]:px-[10px] min-[951px]:py-[8px] min-[951px]:rounded-none min-[951px]:text-[#555]
    ${isActive
      ? `
        text-blue-600 font-bold
        min-[951px]:border-b-2 min-[951px]:border-blue-600 min-[951px]:pl-[10px]
        max-[950px]:bg-[#e6f2ff] max-[950px]:border-l-4 max-[950px]:border-blue-600 max-[950px]:pl-[calc(1rem-4px)]
      `
      : `
        max-[950px]:text-[#333] max-[950px]:bg-[#f0f0f0]
        hover:text-blue-600
      `
    }
  `;


    return (
    <header className="bg-white py-2.5 border-b border-[#eee] relative" >
        <div className="w-[90%] flex justify-between items-center relative m-5">
            <Link to="/" className="font-bold flex items-center">
                <img src={imagemLogo} alt="Logo SimplesHC" className="w-24 h-auto mr-2" />
                <span className="text-xl text-[#005c99]">SimplesHC</span>
            </Link>

            <button className="hidden max-[950px]:block" type="button" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>
                <img src={imagemBotaoMenu} alt="Menu" className="menu-icon-img w-8" />
            </button>
            <nav className={`
                    ${menuOpen ? "block" : "hidden"} 
                    min-[951px]:flex min-[951px]:items-center min-[951px]:gap-4
                    max-[950px]:absolute max-[950px]:top-full max-[950px]:left-0 max-[950px]:w-full max-[950px]:bg-white max-[950px]:shadow-md max-[950px]:py-4
                `}>
                <ul className="menu-list flex flex-col items-center w-full min-[951px]:flex-row min-[951px]:w-auto">
                    <li><NavLink to={'/'} className={linksHeader}>Início</NavLink></li>
                    <li><NavLink to={'/hospitais'} className={linksHeader}>Hospitais</NavLink></li>
                    <li><NavLink to={'/servicos'} className={linksHeader}>Serviços</NavLink></li>
                    <li><NavLink to={'/integrantes'} className={linksHeader}>Integrantes</NavLink></li>
                    <li><NavLink to={'/faq'} className={linksHeader}>FAQ</NavLink></li>
                    <li><NavLink to={'/contato'} className={linksHeader}>Contato</NavLink></li>
                    <li><NavLink to={'/entrar'} className="botao-entrar bg-white text-blue-600 border border-blue-600 font-bold px-5 py-3 rounded hover:bg-[#e6f2ff] transition">Entrar</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
  );
}
