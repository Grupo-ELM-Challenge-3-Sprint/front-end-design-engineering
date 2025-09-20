import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { tutorials } from '../../data/tutoriais';
import PacientePage from '../../components/Painel/PacientePage';
import { useAuth } from '../../hooks/useAuth';

const TutorialCard = ({ title, to }: { title: string; to: string }) => (
  <div className="border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
    <h3 className="text-slate-800 text-base md:text-lg font-semibold leading-relaxed mb-6 group-hover:text-blue-600 transition-colors duration-200">{title}</h3>
    <Link to={to} 
      className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-6 py-3 text-sm font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md">
      Clique aqui para aprender!
    </Link>
  </div>
);

export default function Tutoriais() {
  const { checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <PacientePage>
      <div className="py-2">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 text-left mb-8 border-b-3 border-black-300 p-2"
            data-guide-step="1"
            data-guide-title="Bem-vindo aos Tutoriais!"
            data-guide-text="Esta é a página de tutoriais onde você encontra guias para usar o Portal do Paciente HC."
            data-guide-arrow="down">Tutoriais Portal do Paciente HC</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
             data-guide-step="2"
             data-guide-title="Lista de Tutoriais"
             data-guide-text="Aqui estão todos os tutoriais disponíveis. Clique em um card para acessar o tutorial desejado."
             data-guide-arrow="up">
          {tutorials.map(item => (
            <TutorialCard key={item.id} title={item.title} to={item.to} />
          ))}
        </div>
      </div>
    </PacientePage>
  );
}


