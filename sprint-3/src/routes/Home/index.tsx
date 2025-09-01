import { Link } from 'react-router-dom';

import medicaImage from '../../assets/img//imagem-index/medica.png';
import examesImage from '../../assets/img//imagem-index/imagem-exames.png';
import agendamentoImage from '../../assets/img//imagem-index/imagem-agendamento.png';
import teleconsultaImage from '../../assets/img//imagem-index/imagem-teleconsulta.png';
import medicoImage from '../../assets/img//imagem-index/medico.png';

export default function Home(){
    return(
        <main>
        {/* Seção principal de destaque (hero), apresenta o propósito do site e botões de ação rápida */}
        <section id="hero" 
                 data-guide-step="1" 
                 data-guide-title="Bem-vindo ao SimplesHC!" 
                 data-guide-text="Esta é a nossa seção principal, onde você encontra um resumo do nosso propósito e botões de acesso rápido."
                 data-guide-arrow="down">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1>Simplificando o acesso à saúde</h1>
                    <p>O SimplesHC torna mais fácil o acesso aos serviços do Hospital das Clínicas para todos os pacientes, especialmente para os idosos.</p>
                    <div className="hero-buttons" 
                         data-guide-step="2" 
                         data-guide-title="Ações Rápidas" 
                         data-guide-text="Use estes botões para acessar sua área ou conhecer nossas unidades."
                         data-guide-arrow="up">
                        <Link to="./assets/img//paginas/area-paciente/meu-perfil.html" className="btn btn-primary">Acesse sua área de paciente</Link>
                        <Link to="./assets/img//paginas/hospitais.html#lista-unidades" className="btn btn-secondary">Conheça nossas unidades</Link>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={medicaImage} alt="Profissional de saúde utilizando um laptop em um ambiente moderno" />
                </div>
            </div>
        </section>

        {/* Seção de apresentação dos principais serviços oferecidos */}
        <section id="services">
            <div className="container">
                <h2>Nossos Serviços</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <img src={examesImage} alt="ícone exames" />
                        <h3>Exames Online</h3>
                        <p>Acesse seus resultados de exames a qualquer momento, de qualquer lugar, com total segurança.</p>
                    </div>
                    <div className="service-card">
                        <img src={agendamentoImage} alt="ícone agendamento" />
                        <h3>Agendamento Fácil</h3>
                        <p>Marque consultas e exames de forma simples e rápida, sem filas ou telefonemas.</p>
                    </div>
                    <div className="service-card">
                        <img src={teleconsultaImage} alt="ícone teleconsulta" />
                        <h3>Teleconsulta</h3>
                        <p>Consulte-se com especialistas sem sair de casa, através de videochamadas seguras.</p>
                    </div>
                </div>
                <Link to="./assets/img//paginas/servicos.html" className="view-all-services">Ver todos os serviços →</Link>
            </div>
        </section>

        {/* Seção dedicada ao recursos de acessibilidade */}
        <section id="guide-interactive-section">
            <div className="container guide-content">
                <div className="guide-image">
                    <img src={medicoImage} alt="Guia interativo" />
                </div>
                <div className="guide-text">
                    <h2>Guia Interativo</h2>
                    <p>Nossa plataforma conta com um assistente que ajuda você a navegar pelo sistema, explicando cada função e recurso disponível.</p>
                    <div className="accessibility-features">
                        <h4>Recursos de Acessibilidade</h4>
                        <ul>
                            <li>Interface simplificada e responsiva, adaptada para celulares</li>
                            <li>Guia interativo para ajudar na navegação passo a passo</li>
                            <li>Textos diretos e linguagem acessível para usuários com pouca familiaridade digital</li>
                            <li>Botões e elementos visuais organizados de forma clara e intuitiva</li>
                        </ul>

                    </div>
                    <Link to="./assets/img//paginas/faq.html" className="btn btn-primary">Ver perguntas frequentes</Link>
                </div>
            </div>
        </section>

        {/* Seção de depoimentos de pacientes */}
        <section id="testimonials">
            <div className="container">
                <h2>O que dizem nossos pacientes</h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="initials">RS</div>
                        <h4>Roberto Silva</h4>
                        <span>Paciente há 3 anos</span>
                        <p>"O SimplesHC tornou muito mais fácil acessar meus exames e agendar consultas. Não preciso mais ir ao hospital só para buscar resultados."</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="initials">AP</div>
                        <h4>Ana Paula</h4>
                        <span>Paciente há 1 ano</span>
                        <p>"A função de teleconsulta é excelente para minha mãe idosa, que tem dificuldade de locomoção. Agora ela consegue falar com o médico sem sair de casa."</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="initials">JO</div>
                        <h4>João Oliveira</h4>
                        <span>Paciente há 2 anos</span>
                        <p>"O guia interativo me ajudou muito a entender como usar o sistema. Mesmo não tendo muita experiência com tecnologia, consegui aprender rapidamente."</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
}