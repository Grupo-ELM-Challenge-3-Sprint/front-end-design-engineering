import PacientePage from "../../components/Painel/PacientePage";

export default function Perfil(){
    return(
    <PacientePage>            
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
                            <input type="text" id="userName" disabled title="Nome Completo" placeholder="Nome usuário" />
                        </div>
                        <div className="info-item">
                            <strong>CPF:</strong>
                            <input type="text" id="userCpf" disabled title="CPF" placeholder="CPF usuário" />
                        </div>
                        <div className="info-item">
                            <strong>Data de Nascimento:</strong>
                            <input type="text" id="userDob" disabled title="Data de Nascimento" placeholder="DD/MM/AAAA" />
                        </div>
                        <div className="info-item">
                            <strong>Email:</strong>
                            <input type="email" id="userEmail" disabled title="Email" placeholder="Email usuário" />
                        </div>
                        <div className="info-item">
                            <strong>Telefone:</strong>
                            <input type="tel" id="userTelefone" disabled title="Telefone" placeholder="(XX) XXXXX-XXXX" />
                        </div>
                    </div>
                </div>
            </form>
    </PacientePage>
    );
}