import { Link } from "react-router-dom";

export default function Faq(){

    return(
        <main>
            <section id="faq-hero"
                 data-guide-step="1"
                 data-guide-title="Perguntas Frequentes"
                 data-guide-text="Bem-vindo à nossa seção de Perguntas Frequentes! Aqui você pode encontrar respostas rápidas para as dúvidas mais comuns."
                 data-guide-arrow="down">
            <div className="container">
                <h2>Perguntas Frequentes</h2>
                <p>Encontre respostas para as dúvidas mais comuns sobre o SimplesHC.</p>
            </div>
        </section>

        {/* <!-- Seção de perguntas e respostas em formato de acordeão --> */}
        <section id="faq-list"
                 data-guide-step="2"
                 data-guide-title="Como Usar o FAQ"
                 data-guide-text="Clique em uma pergunta para expandir e ver a resposta. O ícone ao lado indica se a resposta está visível."
                 data-guide-arrow="up">
            <div className="container">
                <div className="faq-accordion">
                    {/* <!-- Cada item representa uma pergunta frequente, com botão acessível e resposta oculta/expansível -->
                    <!-- Item FAQ 1 --> */}
                    <div className="faq-item">
                        <button className="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-1">
                            Como faço para me cadastrar no SimplesHC?
                            <span className="faq-icon" aria-hidden="true"></span>
                        </button>
                        <div className="faq-answer" id="faq-answer-1">
                            <p>Para se cadastrar no SimplesHC, você precisa comparecer a uma unidade do Hospital das Clínicas com seus documentos pessoais (RG e CPF) e cartão do SUS. Após confirmar seus dados, você receberá um código de acesso para criar sua conta online.</p>
                        </div>
                    </div>

                    {/* <!-- Item FAQ 2 --> */}
                    <div className="faq-item">
                        <button className="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-2">
                            Esqueci minha senha, como recupero o acesso?
                            <span className="faq-icon" aria-hidden="true"></span>
                        </button>
                        <div className="faq-answer" id="faq-answer-2">
                            <p>Na tela de login, clique em "Esqueci minha senha". Você receberá um link de recuperação no e-mail cadastrado. Caso não tenha acesso ao e-mail, entre em contato com o suporte ou compareça a uma unidade HC com seus documentos.</p>
                        </div>
                    </div>

                    {/* <!-- Item FAQ 3 --> */}
                    <div className="faq-item">
                        <button className="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-3">
                            Como marco uma consulta médica?
                            <span className="faq-icon" aria-hidden="true"></span>
                        </button>
                        <div className="faq-answer" id="faq-answer-3">
                            <p>Após fazer login, acesse a seção "Consultas" no menu principal. Clique em "Agendar Nova Consulta", selecione a especialidade desejada, a unidade HC e verifique as datas disponíveis. Confirme seus dados e finalize o agendamento.</p>
                        </div>
                    </div>

                    {/* <!-- Item FAQ 4 --> */}
                    <div className="faq-item">
                        <button className="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-4">
                            Os resultados de exames ficam disponíveis por quanto tempo?
                            <span className="faq-icon" aria-hidden="true"></span>
                        </button>
                        <div className="faq-answer" id="faq-answer-4">
                            <p>Os resultados de exames ficam disponíveis permanentemente em sua conta do SimplesHC. Você pode acessá-los a qualquer momento na seção "Exames", mesmo anos após a realização.</p>
                        </div>
                    </div>
                     {/* <!-- Item FAQ 5 --> */}
                     <div className="faq-item">
                        <button className="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-5">
                            Como funciona a teleconsulta?
                            <span className="faq-icon" aria-hidden="true"></span>
                        </button>
                        <div className="faq-answer" id="faq-answer-5">
                            <p>A teleconsulta é realizada por videochamada. Após agendar, você receberá um lembrete por e-mail e no aplicativo. No horário marcado, acesse a seção "Teleconsulta" e clique em "Iniciar Consulta". O sistema usa o Google Meet para a videochamada, portanto certifique-se de que seu dispositivo tenha câmera e microfone funcionando.</p>
                        </div>
                    </div>
                     {/* <!-- Item FAQ 6 --> */}
                     <div className="faq-item">
                        <button className="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-6">
                            Posso agendar exames pelo SimplesHC?
                            <span className="faq-icon" aria-hidden="true"></span>
                        </button>
                        <div className="faq-answer" id="faq-answer-6">
                            <p>Sim, você pode agendar exames que tenham sido solicitados por médicos do HC. Acesse a seção "Exames", clique em "Agendar Exame" e selecione a solicitação médica correspondente, a unidade e a data desejada.</p>
                        </div>
                    </div>
                     {/* <!-- Item FAQ 7 --> */}
                     <div className="faq-item">
                        <button className="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-7">
                            Como desativo o guia interativo?
                            <span className="faq-icon" aria-hidden="true"></span>
                        </button>
                        <div className="faq-answer" id="faq-answer-7">
                            <p>O guia interativo pode ser desativado clicando no ícone de informação (i) no canto superior esquerdo da tela e selecionando "Desativar guia". Você pode reativá-lo a qualquer momento pelo mesmo ícone.</p>
                        </div>
                    </div>
                     {/* <!-- Item FAQ 8 --> */}
                     <div className="faq-item">
                        <button className="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-8">
                            Posso acessar minhas receitas médicas pelo SimplesHC?
                            <span className="faq-icon" aria-hidden="true"></span>
                        </button>
                        <div className="faq-answer" id="faq-answer-8">
                            <p>Sim, todas as receitas emitidas por médicos do HC estão disponíveis digitalmente na seção "Receitas". Você pode visualizá-las, baixá-las em PDF ou compartilhá-las diretamente com farmácias parceiras.</p>
                        </div>
                    </div>
                     {/* <!-- Item FAQ 9 --> */}
                     <div className="faq-item">
                        <button className="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-9">
                            O sistema é seguro? Como meus dados são protegidos?
                            <span className="faq-icon" aria-hidden="true"></span>
                        </button>
                        <div className="faq-answer" id="faq-answer-9">
                            <p>Sim, o SimplesHC segue rigorosos protocolos de segurança e criptografia. Seus dados médicos são protegidos conforme a LGPD (Lei Geral de Proteção de Dados) e só podem ser acessados por você e pelos profissionais de saúde autorizados envolvidos no seu atendimento.</p>
                        </div>
                    </div>
                     {/* <!-- Item FAQ 10 --> */}
                     <div className="faq-item">
                        <button className="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-10">
                            Posso usar o SimplesHC em qualquer dispositivo?
                            <span className="faq-icon" aria-hidden="true"></span>
                        </button>
                        <div className="faq-answer" id="faq-answer-10">
                            <p>Sim, o SimplesHC é responsivo e funciona em computadores, tablets e smartphones. Basta acessar o site ou baixar o aplicativo, disponível para Android e iOS.</p>
                        </div>
                    </div>
                </div>

                <div className="faq-nao-encontrou">
                    <p>Não encontrou o que procurava?</p>
                    <Link to="./contato.html" className="btn btn-primary">Entre em contato conosco</Link>
                </div>
            </div>
        </section>
        </main>
    );
}