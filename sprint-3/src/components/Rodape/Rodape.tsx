import { Link, NavLink } from "react-router-dom";
import iconeYoutube from "../../assets/img/icons/icone-youtube.png";
import iconeInstagram from "../../assets/img/icons/icone-instagram.png";
import iconeTwitter from "../../assets/img/icons/icone-twitter.png";

export default function Rodape() {

  return (
    <footer className="grid p-5 pb-4 bg-[#202670] text-center w-full text-white gap-6 grid-cols-1">
        <div>
            <div className="footer-column justify-start">
                <h3>SimplesHC</h3>
                <p>Simplificando o acesso à saúde para todos.</p>
                <div className="social-icons flex justify-center">
                    <Link to="https://www.youtube.com/user/RedeLucyMontoro" title="Youtube da Rede Lucy Montoro" target="_blank" rel="noopener"><img src={iconeYoutube} alt="Ícone Youtube" /> </Link> 
                    <Link to="https://www.instagram.com/redelucymontoro/" title="Instagram da Rede Lucy Montoro" target="_blank" rel="noopener"><img src={iconeInstagram} alt="Ícone Instagram" /> </Link>
                    <Link to="https://twitter.com/redelucymontoro" title="Twitter da Rede Lucy Montoro" target="_blank" rel="noopener"><img src={iconeTwitter} alt="Ícone Twitter" /></Link>
                </div>
            </div>
            <div className="footer-column justify-start">
                <h4>Navegação</h4>
                <ul className="grid">
                    <li><NavLink to={'/'} >Início</NavLink></li>
                    <li><NavLink to={'/hospitais'} >Hospitais</NavLink></li>
                    <li><NavLink to={'/servicos'} >Serviços</NavLink></li>
                    <li><NavLink to={'/integrantes'} >Integrantes</NavLink></li>
                    <li><NavLink to={'/faq'} >FAQ</NavLink></li>
                    <li><NavLink to={'/contato'} >Contato</NavLink></li>
                </ul>
                
            </div>
            <div className="footer-column justify-start">
                <h4>Serviços</h4>
                <ul className="grid">
                    <li><NavLink to={'/area-paciente'} >Área Paciente</NavLink></li>
                    <li><NavLink to={'/tutorial-entrar'} >Tutoriais Entrar App HC</NavLink></li>
                    <li><NavLink to={'/tutorial-hc'} >Tutoriais Gerais App HC</NavLink></li>
                </ul>
            </div>
            <div className="footer-column justify-start contact">
                <h4>Contato</h4>
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
