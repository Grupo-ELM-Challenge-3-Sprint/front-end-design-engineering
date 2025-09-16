import React from 'react';
import type { FormData, StatusMessage } from '../../hooks';

interface EsqueciSenhaFormProps {
  formData: FormData;
  errors: {[key: string]: string};
  statusMessage: StatusMessage;
  onInputChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onFormChange: (form: string) => void;
}

export const EsqueciSenhaForm: React.FC<EsqueciSenhaFormProps> = ({
  formData,
  errors,
  statusMessage,
  onInputChange,
  onSubmit,
  onFormChange
}) => {
  return (
    <section>
      <div className="auth-card">
        <a href="#" onClick={(e) => { e.preventDefault(); onFormChange('login'); }} className="back-link">
          ← Voltar para login
        </a>
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-2">Recuperar senha</h2>
        <p className="auth-subtitle">Informe seus dados para receber as instruções.</p>
        
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
            <label htmlFor="esqueciCpf">CPF</label>
            <input 
              className={`form-input ${errors.esqueciCpf ? 'border-red-500' : ''}`}
              type="text" 
              id="esqueciCpf" 
              placeholder="000.000.000-00"
              value={formData.esqueciCpf}
              onChange={(e) => onInputChange('esqueciCpf', e.target.value)}
              required 
            />
            {errors.esqueciCpf && <small className="error-message text-red-500">{errors.esqueciCpf}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="esqueciEmail">Email</label>
            <input 
              className={`form-input ${errors.esqueciEmail ? 'border-red-500' : ''}`}
              type="email" 
              id="esqueciEmail" 
              value={formData.esqueciEmail}
              onChange={(e) => onInputChange('esqueciEmail', e.target.value)}
              required 
            />
            {errors.esqueciEmail && <small className="error-message text-red-500">{errors.esqueciEmail}</small>}
          </div>
          <button type="submit" className="btn btn-primary w-full mt-4">Enviar instruções</button>
        </form>
      </div>
    </section>
  );
};
