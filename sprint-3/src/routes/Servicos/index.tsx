import { Link } from "react-router-dom";

import '../../globals.css';
import agendamentoImagem from '../../assets/img/imagens-servicos/imagem-agendamento.png';
import teleconsultaImagem from '../../assets/img/imagens-servicos/imagem-teleconsulta.png';
import examesImagem from '../../assets/img/imagens-servicos/imagem-exames.png';
import atendimentoImagem from '../../assets/img/imagens-servicos/imagem-atendimento.png';
import especialidadesImagem from '../../assets/img/imagens-servicos/imagem-especialidades.png';

export default function Servicos(){
    return(
    <main>
        {/* <!-- Seção de introdução aos serviços --> */}
        <section className="bg-[#e9f3fb] py-10 text-center md:text-[17px] lg:text-[20px]">
            <div className="container">
                <h2>Nossos Serviços</h2>
                <p>O Hospital das Clínicas oferece uma ampla gama de serviços de saúde com foco em qualidade, acessibilidade e experiência do paciente.</p>
            </div>
        </section>

        {/* <!-- Grid de serviços principais, cada card apresenta um serviço com ícone, descrição e ação --> */}
        <section className="py-5"
            data-guide-step="1" 
            data-guide-title="Nossos Serviços"
            data-guide-text="Explore os principais serviços que o SimplesHC oferece para facilitar seu acesso à saúde."
            data-guide-arrow="down">
            <div className="container">
                <h2>Serviços em Destaque</h2>
                <div className="servicos-grid-pagina grid grid-cols-1 gap-6 md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] md:gap-8">
                    {/* <!-- Card: Agendamento Online --> */}
                    <div className="servico-card-pagina">
                        <div className="servico-card-icon-wrapper">
                            <img src={agendamentoImagem} alt="Ícone Agendamento Online" className="servico-icon"/>
                        </div>
                        <div className="servico-card-content">
                            <h3>Agendamento Online</h3>
                            <p>Marque consultas e exames diretamente pelo nosso portal, sem precisar ligar ou ir ao hospital.</p>
                            <Link to="./perfil/minhas-consultas.html" className="btn-saiba-mais">Agendar agora <span className="arrow-icon">→</span></Link>
                        </div>
                    </div>

                    {/* <!-- Card: Teleconsulta --> */}
                    <div className="servico-card-pagina">
                        <div className="servico-card-icon-wrapper">
                            <img src={teleconsultaImagem} alt="Ícone Teleconsulta" className="servico-icon"/>
                        </div>
                        <div className="servico-card-content">
                            <h3>Teleconsulta</h3>
                            <p>Atendimento médico online com especialistas do HC, sem sair de casa e com a mesma qualidade.</p>
                            <Link to="./perfil/minhas-consultas.html" className="btn-saiba-mais">Conhecer serviço <span className="arrow-icon">→</span></Link>
                        </div>
                    </div>

                    {/* <!-- Card: Resultados de Exames --> */}
                    <div className="servico-card-pagina">
                        <div className="servico-card-icon-wrapper">
                            <img src={examesImagem} alt="Ícone Resultados de Exames" className="servico-icon"/>
                        </div>
                        <div className="servico-card-content">
                            <h3>Resultados de Exames</h3>
                            <p>Acesse seus resultados de exames pelo portal, disponíveis 24h após a coleta.</p>
                            <Link to="./perfil/meus-exames.html" className="btn-saiba-mais">Ver meus exames <span className="arrow-icon">→</span></Link>
                        </div>
                    </div>

                    {/* <!-- Card: Atendimento 24h --> */}
                    <div className="servico-card-pagina">
                        <div className="servico-card-icon-wrapper">
                            <img src={atendimentoImagem} alt="Ícone Atendimento 24h" className="servico-icon"/>
                        </div>
                        <div className="servico-card-content">
                            <h3>Atendimento 24h</h3>
                            <p>Emergências médicas atendidas 24 horas por dia, em todas as unidades HC.</p>
                            <Link to="/hospitais#lista-unidades" className="btn-saiba-mais">Ver unidades <span className="arrow-icon">→</span></Link>
                        </div>
                    </div>

                    {/* <!-- Card: Especialidades --> */}
                    <div className="servico-card-pagina">
                        <div className="servico-card-icon-wrapper">
                            <img src={especialidadesImagem} alt="Ícone Especialidades" className="servico-icon"/>
                        </div>
                        <div className="servico-card-content">
                            <h3>Especialidades</h3>
                            <p>Mais de 40 especialidades médicas com profissionais renomados e equipamentos de última geração.</p>
                            <Link to="/hospitais#lista-unidades" className="btn-saiba-mais">Conhecer especialidades <span className="arrow-icon">→</span></Link>
                        </div>
                    </div>

                    {/* <!-- Card: Unidades HC --> */}
                    <div className="servico-card-pagina">
                        <div className="servico-card-icon-wrapper">
                            <img src={especialidadesImagem} alt="Ícone Unidades HC" className="servico-icon"/>
                        </div>
                        <div className="servico-card-content">
                            <h3>Unidades HC</h3>
                            <p>Conheça todas as unidades do Hospital das Clínicas espalhadas pela cidade.</p>
                            <Link to="/hospitais" className="btn-saiba-mais">Ver no mapa <span className="arrow-icon">→</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Chamada para ação: agendamento ou contato --> */}
        <section className="py-10 bg-indigo-100 text-center md:text-lg">
            <div className="container">
                <h2 className="text-[#1a237e] mb-2.5">Estamos aqui para cuidar de você</h2>
                <p className="md:text-[18px] mb-[25px] text-[#2d3748] mx-auto">Agende sua consulta hoje mesmo ou entre em contato para saber mais sobre nossos serviços.</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-2.5 md:gap-4">
                    <Link to="./perfil/meu-perfil.html" className="btn btn-primary">Acessar minha conta</Link>
                    <Link to="/contato" className="btn btn-secondary">Fale conosco</Link>
                </div>
            </div>
        </section>
    </main>
)}