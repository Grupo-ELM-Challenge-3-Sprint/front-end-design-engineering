export default function Entrar(){
    return(
        <main>
            <div className="login-container">

            {/* <!-- === FORMULÁRIO DE LOGIN (INICIALMENTE VISÍVEL) === --> */}
            <section id="login-form-section" className="auth-section active"
                     data-guide-step="1"
                     data-guide-title="Acesse Sua Conta"
                     data-guide-text="Bem-vindo! Use esta área para entrar na sua conta SimplesHC ou navegue para criar uma nova ou recuperar sua senha."
                     data-guide-arrow="down"
                     data-guide-video-embed='<iframe src="https://www.youtube.com/embed/GcPrazUFDXw?si=Z1tHN9qhQ2Nb0y8W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'>
                <div className="auth-card">
                    <h2>Acesse sua conta</h2>
                    <p className="auth-subtitle">Entre com suas credenciais para acessar sua área de paciente.</p>
                    <form id="formLogin">
                        <div className="form-group">
                            <label htmlFor="loginCpf">CPF</label>
                            <input type="text" id="loginCpf" name="loginCpf" placeholder="000.000.000-00" required />
                            <small className="error-message"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="loginSenha">Senha</label>
                            <div className="password-wrapper">
                                <input type="password" id="loginSenha" name="loginSenha" placeholder="Sua senha" required />
                                <button type="button" className="toggle-password" aria-label="Mostrar senha">👁️</button>
                            </div>
                            <small className="error-message"></small>
                        </div>
                        <div className="form-options">
                            <label className="checkbox-label">
                                <input type="checkbox" id="lembrarDeMim" name="lembrarDeMim" />
                                Lembrar de mim
                            </label>
                            <a href="#" id="linkEsqueciSenha" className="auth-link">Esqueci minha senha</a>
                        </div>
                        <button type="submit" className="btn btn-primary btn-full-width">Entrar</button>
                    </form>
                    <p className="auth-switch"
                       data-guide-step="2"
                       data-guide-title="Criar Conta"
                       data-guide-text="Se você ainda não tem uma conta, clique em 'Cadastre-se' para iniciar o processo de criação."
                       data-guide-arrow="up"
                       data-guide-video-embed='<iframe src="https://www.youtube.com/embed/G0cfTSPXXzk?si=pn1WRZMskAdM6Si4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'>Não tem uma conta? <a href="#" id="linkCadastreSe" className="auth-link">Cadastre-se</a></p>
                    <div id="loginStatus" className="form-status-message" aria-live="polite"></div>
                </div>
            </section>

            {/* <!-- === FORMULÁRIO DE CADASTRO (INICIALMENTE OCULTO) === --> */}
            <section id="cadastro-form-section" className="auth-section">
                <div className="auth-card">
                    <a href="#" className="back-to-login" id="backToLoginFromCadastro" aria-label="Voltar para login">← Voltar para login</a>
                    <h2>Criar uma conta</h2>
                    <p className="auth-subtitle">Preencha o formulário abaixo para se cadastrar no SimplesHC.</p>
                    
                    {/* <!-- Indicador de Etapas --> */}
                    <div className="stepper">
                        <div className="step active" data-step="1">1</div>
                        <div className="step-line"></div>
                        <div className="step" data-step="2">2</div>
                        <div className="step-line"></div>
                        <div className="step" data-step="3">3</div>
                    </div>

                    <form id="formCadastro">
                        {/* <!-- Etapa 1: Informações Pessoais --> */}
                        <div className="form-step active" data-step="1">
                            <h3>Informações Pessoais</h3>
                            <div className="form-group">
                                <label htmlFor="cadastroNomeCompleto">Nome completo*</label>
                                <input type="text" id="cadastroNomeCompleto" name="cadastroNomeCompleto" placeholder="Digite seu nome completo" required />
                                <small className="error-message"></small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cadastroCpf">CPF*</label>
                                <input type="text" id="cadastroCpf" name="cadastroCpf" placeholder="Digite seu CPF" required />
                                <small className="error-message"></small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="dataNascimento">Data de nascimento*</label>
                                <input type="text" id="dataNascimento" name="dataNascimento" placeholder="dd/mm/yyyy" required />
                                <small className="error-message"></small>
                            </div>
                            <button type="button" className="btn btn-primary btn-full-width next-step">Continuar</button>
                        </div>

                        {/* <!-- Etapa 2: Informações de Contato --> */}
                        <div className="form-step" data-step="2">
                            <h3>Informações de Contato</h3>
                            <div className="form-group">
                                <label htmlFor="cadastroEmail">Email*</label>
                                <input type="email" id="cadastroEmail" name="cadastroEmail" placeholder="Digite seu email" required />
                                <small className="error-message"></small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cadastroTelefone">Telefone</label>
                                <input type="tel" id="cadastroTelefone" name="cadastroTelefone" placeholder="(XX) XXXXX-XXXX" />
                            </div>
                             <p className="form-dica"><strong>Dica:</strong> Cadastre um número de telefone com WhatsApp ou Telegram para receber lembretes de consultas e outras comunicações importantes.</p>
                            <div className="step-buttons">
                                <button type="button" className="btn btn-secondary prev-step">Voltar</button>
                                <button type="button" className="btn btn-primary next-step">Continuar</button>
                            </div>
                        </div>

                        {/* <!-- Etapa 3: Definir Senha --> */}
                        <div className="form-step" data-step="3">
                            <h3>Definir Senha</h3>
                            <div className="form-group">
                                <label htmlFor="cadastroSenha">Senha*</label>
                                <div className="password-wrapper">
                                    <input type="password" id="cadastroSenha" name="cadastroSenha" placeholder="Crie uma senha forte" required />
                                    <button type="button" className="toggle-password" aria-label="Mostrar senha">👁️</button>
                                </div>
                                <small className="error-message"></small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmarSenha">Confirmar senha*</label>
                                 <div className="password-wrapper">
                                    <input type="password" id="confirmarSenha" name="confirmarSenha" placeholder="Confirme sua senha" required />
                                    <button type="button" className="toggle-password" aria-label="Mostrar senha">👁️</button>
                                </div>
                                <small className="error-message"></small>
                            </div>
                            <p className="form-dica security-tip"><strong>Dica de segurança:</strong> Use uma senha com pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e números.</p>
                            <div className="step-buttons">
                                <button type="button" className="btn btn-secondary prev-step">Voltar</button>
                                <button type="submit" className="btn btn-primary">Criar conta</button>
                            </div>
                        </div>
                    </form>
                    <div id="cadastroStatus" className="form-status-message" aria-live="polite"></div>
                </div>
            </section>

            {/* <!-- === FORMULÁRIO ESQUECI MINHA SENHA (INICIALMENTE OCULTO) === --> */}
            <section id="esqueci-senha-form-section" className="auth-section">
                <div className="auth-card">
                    <a href="#" className="back-to-login" id="backToLoginFromEsqueci" aria-label="Voltar para login">← Voltar para login</a>
                    <h2>Recuperar senha</h2>
                    <p className="auth-subtitle">Informe seu CPF e email cadastrados para receber instruções de recuperação de senha.</p>
                    <form id="formEsqueciSenha">
                        <div className="form-group">
                            <label htmlFor="esqueciCpf">CPF</label>
                            <input type="text" id="esqueciCpf" name="esqueciCpf" placeholder="Seu CPF cadastrado" required />
                            <small className="error-message"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="esqueciEmail">Email</label>
                            <input type="email" id="esqueciEmail" name="esqueciEmail" placeholder="Seu email cadastrado" required />
                            <small className="error-message"></small>
                        </div>
                        <button type="submit" className="btn btn-primary btn-full-width">Enviar instruções</button>
                    </form>
                    <div id="esqueciSenhaStatus" className="form-status-message" aria-live="polite"></div>
                </div>
            </section>

            {/* <!-- === TELA DE CADASTRO CONCLUÍDO (INICIALMENTE OCULTO) === --> */}
            <section id="cadastro-sucesso-section" className="auth-section">
                <div className="auth-card text-center">
                    <img src="../img/icons/icone-check-verde.png" alt="Sucesso" className="success-icon" /> 
                    <h2>Cadastro realizado com sucesso!</h2>
                    <p className="auth-subtitle">Sua conta no SimplesHC foi criada com sucesso. Agora você pode acessar todos os serviços do Hospital das Clínicas pela plataforma.</p>
                    <div className="success-actions">
                        <a href="#" id="goToLoginFromSuccess" className="btn btn-primary btn-full-width">Fazer login</a>
                        <a href="../../index.html" className="btn btn-secondary btn-full-width">Voltar à página inicial</a> 
                    </div>
                    <div className="proximos-passos">
                        <h3>Próximos passos</h3>
                        <ol>
                            <li>Acesse sua conta com o CPF e senha cadastrados</li>
                            <li>Complete seu perfil adicionando informações de saúde</li>
                            <li>Agende sua primeira consulta ou exame</li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
        </main>
    );
}