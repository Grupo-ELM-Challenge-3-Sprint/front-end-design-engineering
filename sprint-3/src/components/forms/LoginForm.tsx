import React from 'react';
import type { FormData, StatusMessage } from '../../hooks';

interface LoginFormProps {
  formData: FormData;
  errors: {[key: string]: string};
  statusMessage: StatusMessage;
  showPasswords: {[key: string]: boolean};
  onInputChange: (field: string, value: string) => void;
  onTogglePassword: (field: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onFormChange: (form: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  formData,
  errors,
  statusMessage,
  showPasswords,
  onInputChange,
  onTogglePassword,
  onSubmit,
  onFormChange
}) => {
  return (
    <section>
      <div className="auth-card">
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-2">Acesse sua conta</h2>
        <p className="auth-subtitle">Entre com suas credenciais para acessar sua área de paciente.</p>
        
        {statusMessage.message && (
          <div className={`p-3 rounded-md mb-4 ${
            statusMessage.type === 'success' 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            {statusMessage.message}
          </div>
        )}
        
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="loginCpf">CPF</label>
            <input 
              className={`form-input ${errors.loginCpf ? 'border-red-500' : ''}`}
              type="text" 
              id="loginCpf" 
              placeholder="000.000.000-00" 
              value={formData.loginCpf}
              onChange={(e) => onInputChange('loginCpf', e.target.value)}
              required 
            />
            {errors.loginCpf && <small className="error-message text-red-500">{errors.loginCpf}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="loginSenha">Senha</label>
            <div className="relative">
              <input 
                className={`form-input pr-10 ${errors.loginSenha ? 'border-red-500' : ''}`}
                type={showPasswords.loginSenha ? "text" : "password"} 
                id="loginSenha" 
                placeholder="Sua senha" 
                value={formData.loginSenha}
                onChange={(e) => onInputChange('loginSenha', e.target.value)}
                required 
              />
              <button 
                type="button" 
                className="password-toggle" 
                aria-label="Mostrar senha"
                onClick={() => onTogglePassword('loginSenha')}
              >
                {showPasswords.loginSenha ? '🙈' : '👁️'}
              </button>
            </div>
            {errors.loginSenha && <small className="error-message text-red-500">{errors.loginSenha}</small>}
          </div>
          <div className="flex justify-end mb-4">
            <a href="#" onClick={(e) => { e.preventDefault(); onFormChange('esqueci'); }} className="auth-link">
              Esqueci minha senha
            </a>
          </div>
          <button type="submit" className="btn btn-primary w-full">Entrar</button>
        </form>
        <p className="auth-switch">
          Não tem uma conta? 
          <a href="#" onClick={(e) => { e.preventDefault(); onFormChange('cadastro'); }} className="auth-link">
            Cadastre-se
          </a>
        </p>
      </div>
    </section>
  );
};
