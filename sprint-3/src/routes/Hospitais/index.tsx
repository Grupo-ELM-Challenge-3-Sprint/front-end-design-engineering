   <main>
        {/* <!-- Seção de introdução às unidades hospitalares --> */}
        <section id="unidades-hero"
                 data-guide-step="1"
                 data-guide-title="Bem-vindo às Nossas Unidades"
                 data-guide-text="Esta seção apresenta uma visão geral das nossas unidades hospitalares."
                 data-guide-arrow="down">
            <div className="container">
                <h2>Nossas Unidades</h2>
                <p>Conheça as unidades do Hospital das Clínicas e escolha a mais próxima de você.</p>
            </div>
        </section>

        {/* <!-- Mapa interativo das unidades, com iframe do Google Maps --> */}
        <section id="mapa-unidades"
                 data-guide-step="2"
                 data-guide-title="Mapa Interativo"
                 data-guide-text="Utilize o mapa para visualizar a localização de todas as nossas unidades e planejar sua rota."
                 data-guide-arrow="down">
            <div className="container">
                <div className="map-placeholder">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1493.9251962264836!2d-46.67025976576064!3d-23.558067770266657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b00d3aa487%3A0xfe715b43e354f823!2sHospital%20das%20Cl%C3%ADnicas%20FMUSP!5e0!3m2!1spt-BR!2sbr!4v1747314059376!5m2!1spt-BR!2sbr" allowfullscreen="" title="Mapa do Hospital das Clínicas FMUSP"></iframe> */}
                </div>
            </div>
        </section>

        {/* <!-- Lista de unidades hospitalares em formato de cards --> */}
        <section id="lista-unidades"
                 data-guide-step="3"
                 data-guide-title="Detalhes das Unidades"
                 data-guide-text="Explore os cards abaixo para encontrar informações detalhadas sobre cada unidade, como endereço, telefone e horários de funcionamento."
                 data-guide-arrow="up">
            <div className="container">
                <div className="unidades-grid">
                    {/* <!-- Card de Unidade 1 --> */}
                    <div className="unidade-card"
                         data-guide-step="4"
                         data-guide-title="IMREA Vila Mariana"
                         data-guide-text="Esta é a unidade IMREA da Vila Mariana. Clique em 'Ver no mapa' para rotas."
                         data-guide-arrow="down">
                        <img src="../img/imagens-hospitais/imrea-vila-mariana.png" className="fachada-hospitais" alt="Fachada IMREA Vila Mariana"/>
                        <div className="unidade-card-content">
                            <h3>IMREA Vila Mariana</h3>
                            <p><img src="../img/icons/imagem-localizacao.png" alt="ícone localização" className="info-icon"/> Rua Domingo de Soto, 100<br/>Vila Mariana - São Paulo/SP - CEP: 04026-080</p>
                            <p><img src="../img/icons/imagem-telefone.png" alt="ícone telefone" className="info-icon"/> (11) 5549-0111</p>
                            <p><img src="../img/icons/imagem-horario.png" alt="ícone horário" className="info-icon"/> Segunda a Sexta: 7h às 19h</p>
                            <a href="https://maps.app.goo.gl/yJ8ErztdASvJBuz17" className="btn-ver-no-mapa" target="_blank" rel="noopener">Ver no mapa <span className="arrow-icon">↗</span></a>
                        </div>
                    </div>

                    {/* <!-- Card de Unidade 2 --> */}
                    <div className="unidade-card"
                         data-guide-step="5"
                         data-guide-title="IMREA Umarizal"
                         data-guide-text="Esta é a unidade IMREA da Umarizal. Clique em 'Ver no mapa' para rotas."
                         data-guide-arrow="down">
                        <img src="../img/imagens-hospitais/imrea-umarizal.png" className="fachada-hospitais" alt="Fachada IMREA Umarizal"/>
                        <div className="unidade-card-content">
                            <h3>IMREA Umarizal</h3>
                            <p><img src="../img/icons/imagem-localizacao.png" alt="ícone localização" className="info-icon"/> Rua Guaramembé, 589<br/>Umarizal - São Paulo/SP - CEP: 05754-060</p>
                            <p><img src="../img/icons/imagem-telefone.png" alt="ícone telefone" className="info-icon"/> (11) 3719-6060</p>
                            <p><img src="../img/icons/imagem-horario.png" alt="ícone horário" className="info-icon"/> Segunda a Sexta: 7h às 19h</p>
                            <a href="https://maps.app.goo.gl/qSQCG7WwCpAy47w89" className="btn-ver-no-mapa" target="_blank" rel="noopener">Ver no mapa <span className="arrow-icon">↗</span></a>
                        </div>
                    </div>

                    {/* <!-- Card de Unidade 3 --> */}
                    <div className="unidade-card"
                         data-guide-step="6"
                         data-guide-title="IMREA Lapa"
                         data-guide-text="Esta é a unidade IMREA da Lapa. Clique em 'Ver no mapa' para rotas."
                         data-guide-arrow="down">
                        <img src="../img/imagens-hospitais/imrea-lapa.png" className="fachada-hospitais" alt="Fachada IMREA Lapa"/>
                        <div className="unidade-card-content">
                            <h3>IMREA Lapa</h3>
                            <p><img src="../img/icons/imagem-localizacao.png" alt="ícone localização" className="info-icon"/> Rua Guaicurus, 1274<br/>Lapa - São Paulo/SP - CEP: 05033-002</p>
                            <p><img src="../img/icons/imagem-telefone.png" alt="ícone telefone" className="info-icon"/> (11) 3838-7555</p>
                            <p><img src="../img/icons/imagem-horario.png" alt="ícone horário" className="info-icon"/> Segunda a Sexta: 7h às 19h</p>
                            <a href="https://maps.app.goo.gl/R3sU1STb2zPuhboR6" className="btn-ver-no-mapa" target="_blank" rel="noopener">Ver no mapa <span className="arrow-icon">↗</span></a>
                        </div>
                    </div>
                     {/* <!-- Card de Unidade 4 --> */}
                     <div className="unidade-card"
                          data-guide-step="7"
                          data-guide-title="IMREA Clínicas"
                          data-guide-text="Esta é a unidade IMREA da Clínicas. Clique em 'Ver no mapa' para rotas."
                          data-guide-arrow="down">
                        <img src="../img/imagens-hospitais/imrea-clinicas.jpg" className="fachada-hospitais" alt="Fachada IMREA Clínicas"/>
                        <div className="unidade-card-content">
                            <h3>IMREA Clínicas</h3>
                            <p><img src="../img/icons/imagem-localizacao.png" alt="ícone localização" className="info-icon"/> Rua Particular - Portão 3 do INRAD<br/>Cerqueira César - São Paulo/SP - CEP: 05403-010</p>
                            <p><img src="../img/icons/imagem-telefone.png" alt="ícone telefone" className="info-icon"/> (11) 2661-1000</p>
                            <p><img src="../img/icons/imagem-horario.png" alt="ícone horário" className="info-icon"/> Segunda a Sexta: 7h às 19h</p>
                            <a href="https://maps.app.goo.gl/ok3phCwsGKuYQLFL6" className="btn-ver-no-mapa" target="_blank" rel="noopener">Ver no mapa <span className="arrow-icon">↗</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Seção com informações gerais sobre atendimento, documentos e agendamento --> */}
        <section id="informacoes-gerais"
                 data-guide-step="8"
                 data-guide-title="Informações Gerais Importantes"
                 data-guide-text="Leia estas informações sobre atendimento, documentos necessários e como funciona o agendamento em nossas unidades."
                 data-guide-arrow="up">
            <div className="container">
                <div className="info-gerais-content">
                    <h2>Informações Gerais</h2>
                    
                    <h3>Atendimento</h3>
                    <p>O Hospital das Clínicas da FMUSP oferece atendimento em diversas especialidades médicas. Os pacientes são atendidos mediante encaminhamento da rede pública de saúde, através do sistema CROSS (Central de Regulação de Ofertas de Serviços de Saúde).</p>

                    <h3>Documentos Necessários</h3>
                    <ul>
                        <li>Cartão SUS</li>
                        <li>Documento de identidade com foto (RG ou CNH)</li>
                        <li>CPF</li>
                        <li>Comprovante de residência</li>
                        <li>Encaminhamento médico (quando aplicável)</li>
                    </ul>

                    <h3>Agendamento</h3>
                    <p>O agendamento de consultas e exames pode ser realizado através da central telefônica ou pelo site/aplicativo SimplesHC, onde você também pode acompanhar seus resultados e histórico médico.</p>
                </div>
            </div>
        </section>

    </main>