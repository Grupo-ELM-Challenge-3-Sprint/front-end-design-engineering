import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import iconeCheck from '../../assets/img/icons/icone-check-verde.png';

interface SucessoFormProps {
  onFormChange: (form: string) => void;
}

export const SucessoForm = ({ onFormChange }: SucessoFormProps): ReactElement => {
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
};
