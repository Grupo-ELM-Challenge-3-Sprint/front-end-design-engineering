import { Link, NavLink } from "react-router-dom";
import iconeYoutube from "../../assets/img/icons/icone-youtube.png";
import iconeInstagram from "../../assets/img/icons/icone-instagram.png";
import iconeTwitter from "../../assets/img/icons/icone-twitter.png";

export default function Rodape() {

  return (
    <footer className="grid p-5 pb-4 bg-[#202670] text-center w-screen text-white gap-6 grid-cols-1">
        <div >
            <div className="justify-start">
                <h3 className="text-lg m-2.5">SimplesHC</h3>
                <p className="text-base">Simplificando o acesso à saúde para todos.</p>
                <div className="flex justify-center">
                    <Link className="flex m-2.5 justify-center gap-2.5" to="https://www.youtube.com/user/RedeLucyMontoro" title="Youtube da Rede Lucy Montoro" target="_blank" rel="noopener"><img src={iconeYoutube} alt="Ícone Youtube" /> </Link> 
                    <Link className="flex m-2.5 justify-center gap-2.5" to="https://www.instagram.com/redelucymontoro/" title="Instagram da Rede Lucy Montoro" target="_blank" rel="noopener"><img src={iconeInstagram} alt="Ícone Instagram" /> </Link>
                    <Link className="flex m-2.5 justify-center gap-2.5" to="https://twitter.com/redelucymontoro" title="Twitter da Rede Lucy Montoro" target="_blank" rel="noopener"><img src={iconeTwitter} alt="Ícone Twitter" /></Link>
                </div>
            </div>
            <div className="justify-start">
                <h4 className="text-lg mb-2.5">Navegação</h4>
                <ul className="grid">
                    <NavLink className="text-sm mb-1.5" to={'/'} >Início</NavLink>
                    <NavLink className="text-sm mb-1.5" to={'/hospitais'} >Hospitais</NavLink>
                    <NavLink className="text-sm mb-1.5" to={'/servicos'} >Serviços</NavLink>
                    <NavLink className="text-sm mb-1.5" to={'/integrantes'} >Integrantes</NavLink>
                    <NavLink className="text-sm mb-1.5" to={'/faq'} >FAQ</NavLink>
                    <NavLink className="text-sm mb-1.5" to={'/contato'} >Contato</NavLink>
                </ul>
                
            </div>
            <div className="justify-start">
                <h4 className="text-lg m-2.5">Serviços</h4>
                <ul className="grid">
                    <NavLink className="text-sm mb-1.5" to={'/area-paciente'} >Área Paciente</NavLink>
                    <NavLink className="text-sm mb-1.5" to={'/tutorial-entrar'} >Tutoriais Entrar App HC</NavLink>
                    <NavLink className="text-sm mb-1.5" to={'/tutorial-hc'} >Tutoriais Gerais App HC</NavLink>
                </ul>
            </div>
            <div className="justify-start contact">
                <h4 className="text-lg m-2.5">Contato</h4>
                <p className="text-sm mb-1.5">HC Hospital das Clínicas</p>
                <p className="text-sm mb-1.5">Rua Dr. Ovídio Pires de Campos, 225</p>
                <p className="text-sm mb-1.5">São Paulo - SP</p>
                <p className="text-sm mb-1.5">CEP 05403-010</p>
                <p className="text-sm mb-1.5">Telefone: (11) 2661-0000</p>
                <p className="text-sm mb-1.5">Email: contato@simplify-hc.com.br</p>
            </div>
        </div>
        <div className="text-center p-3 border-t border-solid border-t-[#2c3894]">
            <p>© 2025 SimplesHC. Todos os direitos reservados.</p>
        </div>
    </footer>
  );
}
