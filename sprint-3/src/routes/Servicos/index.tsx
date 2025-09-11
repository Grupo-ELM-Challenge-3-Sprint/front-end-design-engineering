export default function Servicos(){
    return(
<main>
        {/* <!-- Seção de introdução aos serviços --> */}
        <section id="servicos-hero">
            <div className="container">
                <h2>Nossos Serviços</h2>
                <p>O Hospital das Clínicas oferece uma ampla gama de serviços de saúde com foco em qualidade, acessibilidade e experiência do paciente.</p>
            </div>
        </section>

        {/* <!-- Grid de serviços principais, cada card apresenta um serviço com ícone, descrição e ação --> */}
        <section id="servicos-destaque" 
            data-guide-step="1" 
            data-guide-title="Nossos Serviços"
            data-guide-text="Explore os principais serviços que o SimplesHC oferece para facilitar seu acesso à saúde."
            data-guide-arrow="down">
            <div className="container">
                <h2>Serviços em Destaque</h2>
                <div className="servicos-grid-pagina">
                    {/* <!-- Card: Agendamento Online --> */}
                    <div className="servico-card-pagina" 
                        data-guide-step="2" 
                        data-guide-title="Agendamento Online"
                        data-guide-text="Marque suas consultas e exames de forma prática e rápida através do nosso portal."
                        data-guide-arrow="down">
                        <div className="servico-card-icon-wrapper">
                            <img src="../img/imagens-servicos/imagem-agendamento.png" alt="Ícone Agendamento Online" className="servico-icon"/>
                        </div>
                        <div className="servico-card-content">
                            <h3>Agendamento Online</h3>
                            <p>Marque consultas e exames diretamente pelo nosso portal, sem precisar ligar ou ir ao hospital.</p>
                            <a href="./area-paciente/minhas-consultas.html" className="btn-saiba-mais">Agendar agora <span className="arrow-icon">→</span></a>
                        </div>
                    </div>

                    {/* <!-- Card: Teleconsulta --> */}
                    <div className="servico-card-pagina" 
                        data-guide-step="3" 
                        data-guide-title="Teleconsulta"
                        data-guide-text="Realize consultas médicas com nossos especialistas por vídeo, no conforto da sua casa."
                        data-guide-arrow="down">
                        <div className="servico-card-icon-wrapper">
                            <img src="../img/imagens-servicos/imagem-teleconsulta.png" alt="Ícone Teleconsulta" className="servico-icon"/>
                        </div>
                        <div className="servico-card-content">
                            <h3>Teleconsulta</h3>
                            <p>Atendimento médico online com especialistas do HC, sem sair de casa e com a mesma qualidade.</p>
                            <a href="./area-paciente/minhas-consultas.html" className="btn-saiba-mais">Conhecer serviço <span className="arrow-icon">→</span></a>
                        </div>
                    </div>

                    {/* <!-- Card: Resultados de Exames --> */}
                    <div className="servico-card-pagina" 
                        data-guide-step="4" 
                        data-guide-title="Resultados de Exames Online"
                        data-guide-text="Acesse seus resultados de exames de forma segura e conveniente através do portal."
                        data-guide-arrow="down">
                        <div className="servico-card-icon-wrapper">
                            <img src="../img/imagens-servicos/imagem-exames.png" alt="Ícone Resultados de Exames"
                                className="servico-icon"/>
                        </div>
                        <div className="servico-card-content">
                            <h3>Resultados de Exames</h3>
                            <p>Acesse seus resultados de exames pelo portal, disponíveis 24h após a coleta.</p>
                            <a href="./area-paciente/meus-exames.html" className="btn-saiba-mais">Ver meus exames <span className="arrow-icon">→</span></a>
                        </div>
                    </div>

                    {/* <!-- Card: Atendimento 24h --> */}
                    <div className="servico-card-pagina" 
                        data-guide-step="5" 
                        data-guide-title="Atendimento 24h"
                        data-guide-text="Nossas unidades oferecem atendimento de emergência 24 horas por dia."
                        data-guide-arrow="down">
                        <div className="servico-card-icon-wrapper">
                            <img src="../img/imagens-servicos/imagem-atendimento.png" alt="Ícone Atendimento 24h" className="servico-icon"/>
                        </div>
                        <div className="servico-card-content">
                            <h3>Atendimento 24h</h3>
                            <p>Emergências médicas atendidas 24 horas por dia, em todas as unidades HC.</p>
                            <a href="../paginas/hospitais.html#lista-unidades" className="btn-saiba-mais">Ver unidades <span className="arrow-icon">→</span></a>
                        </div>
                    </div>

                    {/* <!-- Card: Especialidades --> */}
                    <div className="servico-card-pagina" 
                        data-guide-step="6" 
                        data-guide-title="Nossas Especialidades"
                        data-guide-text="Contamos com uma vasta gama de especialidades médicas para cuidar da sua saúde."
                        data-guide-arrow="down">
                        <div className="servico-card-icon-wrapper">
                            <img src="../img/imagens-servicos/imagem-especialidades.png" alt="Ícone Especialidades" className="servico-icon"/>
                        </div>
                        <div className="servico-card-content">
                            <h3>Especialidades</h3>
                            <p>Mais de 40 especialidades médicas com profissionais renomados e equipamentos de última
                                geração.</p>
                            <a href="../paginas/hospitais.html#lista-unidades" className="btn-saiba-mais">Conhecer especialidades <span className="arrow-icon">→</span></a>
                        </div>
                    </div>

                    {/* <!-- Card: Unidades HC --> */}
                    <div className="servico-card-pagina" 
                        data-guide-step="7" 
                        data-guide-title="Unidades HC"
                        data-guide-text="Encontre a unidade do Hospital das Clínicas mais conveniente para você."
                        data-guide-arrow="down">
                        <div className="servico-card-icon-wrapper">
                            <img src="../img/imagens-servicos/imagem-unidades.png" alt="Ícone Unidades HC" className="servico-icon"/>
                        </div>
                        <div className="servico-card-content">
                            <h3>Unidades HC</h3>
                            <p>Conheça todas as unidades do Hospital das Clínicas espalhadas pela cidade.</p>
                            <a href="../paginas/hospitais.html" className="btn-saiba-mais">Ver no mapa <span className="arrow-icon">→</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Chamada para ação: agendamento ou contato --> */}
        <section id="cta-servicos">
            <div className="container">
                <h2>Estamos aqui para cuidar de você</h2>
                <p>Agende sua consulta hoje mesmo ou entre em contato para saber mais sobre nossos serviços.</p>
                <div className="cta-buttons">
                    <a href="./area-paciente/meu-perfil.html" className="btn btn-primary">Acessar minha conta</a>
                    <a href="./contato.html" className="btn btn-secondary">Fale conosco</a>
                </div>
            </div>
        </section>
    </main>
)}