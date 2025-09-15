import { Link } from "react-router-dom";

export default function Contato(){
    return(
        <main>
            <section id="contato-hero"
                 data-guide-step="1"
                 data-guide-title="Fale Conosco"
                 data-guide-text="Bem-vindo à nossa página de Contato. Utilize as opções abaixo para nos enviar sua mensagem ou encontrar outras formas de nos contatar."
                 data-guide-arrow="down">
            <div className="container">
                <h2>Entre em Contato</h2>
                <p>Estamos aqui para ajudar. Envie sua mensagem e responderemos o mais breve possível.</p>
            </div>
        </section>

        {/* Seção principal com formulário de contato e informações institucionais */}
        <section id="contato-form-section">
            <div className="container contato-layout" >
                <div className="form-container"
                     data-guide-step="2"
                     data-guide-title="Formulário de Contato"
                     data-guide-text="Para nos enviar uma mensagem diretamente, por favor, preencha os campos deste formulário. Campos com (*) são de preenchimento obrigatório."
                     data-guide-arrow="down" >
                    {/* Formulário de contato com validação e mensagens de erro */}
                    <form id="formContato">
                        <div className="form-group"
                             data-guide-step="3"
                             data-guide-title="Seu Nome"
                             data-guide-text="Por favor, informe seu nome completo para que possamos identificá-lo."
                             data-guide-arrow="down">
                            <label htmlFor="nomeCompleto">Nome Completo*</label>
                            <input type="text" id="nomeCompleto" name="nomeCompleto" placeholder="Seu nome completo" required />
                            <small className="error-message"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input type="email" id="email" name="email" placeholder="seu.email@exemplo.com" required />
                            <small className="error-message" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone</label>
                            <input type="tel" id="telefone" name="telefone" placeholder="(99) 99999-9999" />
                        </div>
                        <div className="form-group"
                             data-guide-step="4"
                             data-guide-title="Assunto da Mensagem"
                             data-guide-text="Selecione o assunto principal da sua mensagem para que possamos direcioná-la corretamente."
                             data-guide-arrow="down">
                            <label htmlFor="assunto">Assunto*</label>
                            <select id="assunto" name="assunto" required>
                                <option value="" disabled selected>Selecione um assunto</option>
                                <option value="duvida">Dúvida</option>
                                <option value="sugestao">Sugestão</option>
                                <option value="problema_tecnico">Problema Técnico</option>
                                <option value="agendamento">Agendamento</option>
                                <option value="outro">Outro</option>
                            </select>
                            <small className="error-message"></small>
                        </div>
                        <div className="form-group"
                             data-guide-step="5"
                             data-guide-title="Sua Mensagem"
                             data-guide-text="Escreva aqui os detalhes da sua dúvida, sugestão ou problema."
                             data-guide-arrow="up">
                            <label htmlFor="mensagem">Mensagem*</label>
                            <textarea id="mensagem" name="mensagem" placeholder="Descreva sua mensagem aqui..." required></textarea>
                            <small className="error-message"></small>
                        </div>
                        <button type="submit" className="btn btn-primary btn-enviar-contato"
                                data-guide-step="6"
                                data-guide-title="Enviar"
                                data-guide-text="Após preencher todos os campos obrigatórios, clique aqui para enviar sua mensagem."
                                data-guide-arrow="up">Enviar Mensagem</button>
                    </form>
                    {/* Área para feedback do status do envio do formulário */}
                    <div id="formStatus" className="form-status-message" aria-live="polite"></div>
                </div>
                {/* Informações institucionais e de contato ao lado do formulário */}
                 <aside className="info-contato-container"
                       data-guide-step="7"
                       data-guide-title="Outras Formas de Contato"
                       data-guide-text="Além do formulário, você pode nos encontrar através dos seguintes canais."
                       data-guide-arrow="down">
                    <h3>Informações de Contato</h3>
                    <div className="info-bloco"
                         data-guide-step="8"
                         data-guide-title="Nosso Endereço"
                         data-guide-text="Aqui está o endereço principal do Hospital das Clínicas da FMUSP."
                         data-guide-arrow="down">
                        <h4>Endereço</h4>
                        <p>Hospital das Clínicas da FMUSP<br />
                           Rua Dr. Ovídio Pires de Campos, 225<br />
                           Cerqueira César - São Paulo/SP<br />
                           CEP 05403-010</p>
                    </div>
                    <div className="info-bloco"
                         data-guide-step="9"
                         data-guide-title="Nossos Telefones"
                         data-guide-text="Entre em contato por telefone através da nossa Central de Atendimento ou SAC."
                         data-guide-arrow="down">
                        <h4>Telefones</h4>
                        <p>Central de Atendimento: (11) 2661-0000</p>
                    </div>
                    <div className="info-bloco">
                        <h4>Email</h4>
                        <p><Link to="mailto:contato@simplify-hc.com.br">contato@simplify-hc.com.br</Link></p>
                    </div>
                    <div className="info-bloco">
                        <h4>Horário de Atendimento</h4>
                        <p>Segunda a Sexta: 8h às 18h</p>
                        <p>Sábado: 8h às 12h</p>
                    </div>
                    <div className="info-bloco">
                        <h4>Redes Sociais</h4>
                        <div className="info-redes-sociais">
                            <Link to="https://www.youtube.com/user/RedeLucyMontoro" title="Youtube da Rede Lucy Montoro" target="_blank" rel="noopener"><img src="../img/icons/icone-youtube.png" alt="Ícone Youtube" /></Link>
                            <Link to="https://www.instagram.com/redelucymontoro/" title="Instagram da Rede Lucy Montoro" target="_blank" rel="noopener"><img src="../img/icons/icone-instagram.png" alt="Ícone Instagram" /></Link>
                            <Link to="https://twitter.com/redelucymontoro" title="Twitter da Rede Lucy Montoro" target="_blank" rel="noopener"><img src="../img/icons/icone-twitter.png" alt="Ícone Twitter" /></Link>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
        </main>
    );
}