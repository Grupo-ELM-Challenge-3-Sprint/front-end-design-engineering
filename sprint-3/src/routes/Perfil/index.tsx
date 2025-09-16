export default function Perfil(){
    return(
    <main className="paciente-main-container container">
        <aside className="paciente-sidebar"
                data-guide-step="2"
                data-guide-title="Navegação da Área do Paciente"
                data-guide-text="Use este menu para navegar entre as diferentes seções da sua área, como seus dados, exames, receitas e consultas."
                data-guide-arrow="left">
            <div className="paciente-sidebar-header">
                <h3>Área do Paciente</h3>
                <p id="sidebarUserName">Carregando...</p>
            </div>
            <nav className="paciente-nav" aria-label="Navegação da área do paciente">
                <ul>
                    <li><a href="./meu-perfil.html" className="active"><span className="nav-icon">👤</span> Meus Dados </a></li>
                    <li><a href="./meus-exames.html"><span className="nav-icon">📄</span> Exames </a></li>
                    <li><a href="./minhas-receitas.html"><span className="nav-icon">💊</span> Receitas </a></li>
                    <li><a href="./minhas-consultas.html"><span className="nav-icon">📅</span> Consultas </a></li>
                    <li><a href="#" id="linkSair"><span className="nav-icon">🚪</span> Sair </a></li>
                </ul>
            </nav>
        </aside>
        
        <section className="paciente-content-area"
                data-guide-step="1"
                data-guide-title="Seus Dados Pessoais"
                data-guide-text="Bem-vindo ao seu perfil! Aqui você pode visualizar e gerenciar suas informações pessoais, resumo de saúde e preferências de notificação."
                data-guide-arrow="down">
            
            <div className="content-header">
                <h2>Meus Dados</h2>
                <div className="form-actions-header"
                    data-guide-step="4"
                    data-guide-title="Editar Informações"
                    data-guide-text="Clique em 'Editar' para modificar seus dados de contato e preferências. Lembre-se de 'Salvar' as alterações."
                    data-guide-arrow="right">
                    
                    <button id="editProfileButton" className="btn btn-secondary" type="button">Editar</button>
                    <button id="saveProfileButton" className="btn btn-primary" type="submit" form="formInformacoesPessoais">Salvar</button>
                    <button id="cancelEditButton" className="btn btn-tertiary hidden" type="button">Cancelar</button>
                </div>
            </div>

            <form id="formInformacoesPessoais">
                <div className="meus-dados-grid">
                    <div className="info-section"
                        data-guide-step="3"
                        data-guide-title="Suas Informações Pessoais"
                        data-guide-text="Confira seus dados cadastrais. Alguns campos como nome e CPF não podem ser alterados por aqui."
                        data-guide-arrow="down">
                        
                        <h3>Informações Pessoais</h3>
                        <div className="info-item">
                            <strong>Nome Completo:</strong>
                            <input type="text" id="userName" disabled title="Nome Completo" placeholder="Digite seu nome completo" />
                        </div>
                        <div className="info-item">
                            <strong>CPF:</strong>
                            <input type="text" id="userCpf" disabled title="CPF" placeholder="Digite seu CPF" />
                        </div>
                        <div className="info-item">
                            <strong>Data de Nascimento:</strong>
                            <input type="text" id="userDob" disabled title="Data de Nascimento" placeholder="DD/MM/AAAA" />
                        </div>
                        <div className="info-item">
                            <strong>Email:</strong>
                            <input type="email" id="userEmail" disabled title="Email" placeholder="Digite seu email" />
                        </div>
                        <div className="info-item">
                            <strong>Telefone:</strong>
                            <input type="tel" id="userTelefone" disabled title="Telefone" placeholder="(XX) XXXXX-XXXX" />
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </main>
    );
}