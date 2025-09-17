import type { ReactElement, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import iconeCheck from '../../assets/img/icons/icone-check-verde.png';
import type { FormData, StatusMessage } from '../../hooks';

interface CadastroFormProps {
  formData: FormData;
  errors: {[key: string]: string};
  statusMessage: StatusMessage;
  showPasswords: {[key: string]: boolean};
  etapaCadastro: number;
  onInputChange: (field: string, value: string) => void;
  onTogglePassword: (field: string) => void;
  onSubmit: (e: FormEvent) => void;
  onFormChange: (form: string) => void;
  onNextStep: () => void;
  onPrevStep: () => void;
}

export const CadastroForm = ({
  formData,
  errors,
  statusMessage,
  showPasswords,
  etapaCadastro,
  onInputChange,
  onTogglePassword,
  onSubmit,
  onFormChange,
  onNextStep,
  onPrevStep
}: CadastroFormProps): ReactElement => {
  // Renderizar a tela de sucesso quando etapaCadastro === 4
  if (etapaCadastro === 4) {
    return (
      <section>
        <div className="auth-card text-center">
          <img src={iconeCheck} alt="Sucesso" className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Cadastro realizado!</h2>
          <p className="auth-subtitle">Sua conta foi criada. Agora você já pode acessar a plataforma.</p>
          <div className="mt-6 flex flex-col gap-3">
            <a href="#" onClick={(e) => { e.preventDefault(); onFormChange('login'); }} className="btn btn-primary w-full">
              Fazer login
            </a>
            <Link to="/" className="btn btn-secondary w-full">Voltar à página inicial</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="auth-card">
        <a href="#" onClick={(e) => { e.preventDefault(); onFormChange('login'); }} className="back-link">
          ← Voltar para login
        </a>
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-2">Criar uma conta</h2>
        <p className="auth-subtitle">Preencha o formulário abaixo para se cadastrar.</p>
        
        {statusMessage.message && (
          <div className={`p-3 rounded-md mb-4 ${
            statusMessage.type === 'success' 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            {statusMessage.message}
          </div>
        )}
        
        {/* Stepper */}
        <div className="flex items-center justify-center space-x-2 my-6">
          <div className={`stepper-item ${etapaCadastro >= 1 ? 'active' : ''}`}>1</div>
          <div className={`stepper-line ${etapaCadastro > 1 ? 'active' : ''}`}></div>
          <div className={`stepper-item ${etapaCadastro >= 2 ? 'active' : ''}`}>2</div>
          <div className={`stepper-line ${etapaCadastro > 2 ? 'active' : ''}`}></div>
          <div className={`stepper-item ${etapaCadastro >= 3 ? 'active' : ''}`}>3</div>
        </div>

        <form onSubmit={onSubmit}>
          {/* Etapa 1 */}
          {etapaCadastro === 1 && (
            <div>
              <h3 className="form-step-title">Informações Pessoais</h3>
              <div className="form-group">
                <label htmlFor="cadastroNomeCompleto">Nome completo*</label>
                <input 
                  className={`form-input ${errors.cadastroNomeCompleto ? 'border-red-500' : ''}`}
                  type="text" 
                  id="cadastroNomeCompleto" 
                  value={formData.cadastroNomeCompleto}
                  onChange={(e) => onInputChange('cadastroNomeCompleto', e.target.value)}
                  required 
                />
                {errors.cadastroNomeCompleto && <small className="error-message text-red-500">{errors.cadastroNomeCompleto}</small>}
              </div>
              <div className="form-group">
                <label htmlFor="cadastroCpf">CPF*</label>
                <input 
                  className={`form-input ${errors.cadastroCpf ? 'border-red-500' : ''}`}
                  type="text" 
                  id="cadastroCpf" 
                  value={formData.cadastroCpf}
                  onChange={(e) => onInputChange('cadastroCpf', e.target.value)}
                  required 
                />
                {errors.cadastroCpf && <small className="error-message text-red-500">{errors.cadastroCpf}</small>}
              </div>
              <div className="form-group">
                <label htmlFor="dataNascimento">Data de nascimento*</label>
                <input 
                  className={`form-input ${errors.dataNascimento ? 'border-red-500' : ''}`}
                  type="text" 
                  id="dataNascimento" 
                  placeholder="dd/mm/aaaa"
                  value={formData.dataNascimento}
                  onChange={(e) => onInputChange('dataNascimento', e.target.value)}
                  required 
                />
                {errors.dataNascimento && <small className="error-message text-red-500">{errors.dataNascimento}</small>}
              </div>
              <button type="button" onClick={onNextStep} className="btn btn-primary w-full mt-4 cursor-pointer">Continuar</button>
            </div>
          )}

          {/* Etapa 2 */}
          {etapaCadastro === 2 && (
            <div>
              <h3 className="form-step-title">Informações de Contato</h3>
              <div className="form-group">
                <label htmlFor="cadastroEmail">Email*</label>
                <input 
                  className={`form-input ${errors.cadastroEmail ? 'border-red-500' : ''}`}
                  type="email" 
                  id="cadastroEmail" 
                  value={formData.cadastroEmail}
                  onChange={(e) => onInputChange('cadastroEmail', e.target.value)}
                  required 
                />
                {errors.cadastroEmail && <small className="error-message text-red-500">{errors.cadastroEmail}</small>}
              </div>
              <div className="form-group">
                <label htmlFor="cadastroTelefone">Telefone</label>
                <input 
                  className="form-input"
                  type="tel" 
                  id="cadastroTelefone" 
                  placeholder="(11) 99999-9999"
                  value={formData.cadastroTelefone}
                  onChange={(e) => onInputChange('cadastroTelefone', e.target.value)}
                />
              </div>
              <div className="flex gap-3 mt-6">
                <button type="button" onClick={onPrevStep} className="btn btn-secondary w-full cursor-pointer">Voltar</button>
                <button type="button" onClick={onNextStep} className="btn btn-primary w-full cursor-pointer">Continuar</button>
              </div>
            </div>
          )}

          {/* Etapa 3 */}
          {etapaCadastro === 3 && (
            <div>
              <h3 className="form-step-title">Definir Senha</h3>
              <div className="form-group">
                <label htmlFor="cadastroSenha">Senha*</label>
                <div className="relative">
                  <input 
                    className={`form-input pr-10 ${errors.cadastroSenha ? 'border-red-500' : ''}`}
                    type={showPasswords.cadastroSenha ? "text" : "password"} 
                    id="cadastroSenha" 
                    value={formData.cadastroSenha}
                    onChange={(e) => onInputChange('cadastroSenha', e.target.value)}
                    required 
                  />
                  <button 
                    type="button" 
                    className="password-toggle"
                    onClick={() => onTogglePassword('cadastroSenha')}
                  >
                    {showPasswords.cadastroSenha ? '🙈' : '👁️'}
                  </button>
                </div>
                {errors.cadastroSenha && <small className="error-message text-red-500">{errors.cadastroSenha}</small>}
              </div>
              <div className="form-group">
                <label htmlFor="confirmarSenha">Confirmar senha*</label>
                <div className="relative">
                  <input 
                    className={`form-input pr-10 ${errors.confirmarSenha ? 'border-red-500' : ''}`}
                    type={showPasswords.confirmarSenha ? "text" : "password"} 
                    id="confirmarSenha" 
                    value={formData.confirmarSenha}
                    onChange={(e) => onInputChange('confirmarSenha', e.target.value)}
                    required 
                  />
                  <button 
                    type="button" 
                    className="password-toggle"
                    onClick={() => onTogglePassword('confirmarSenha')}
                  >
                    {showPasswords.confirmarSenha ? '🙈' : '👁️'}
                  </button>
                </div>
                {errors.confirmarSenha && <small className="error-message text-red-500">{errors.confirmarSenha}</small>}
              </div>
              <p className="text-xs p-3 mt-4 rounded-md border-l-4 bg-yellow-50 border-yellow-400 text-yellow-800">
                <strong>Dica de segurança:</strong> Use uma senha forte com letras, números e símbolos.
              </p>
              <div className="flex gap-3 mt-6">
                <button type="button" onClick={onPrevStep} className="btn btn-secondary w-full cursor-pointer">Voltar</button>
                <button type="submit" className="btn btn-primary w-full cursor-pointer">Criar conta</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
