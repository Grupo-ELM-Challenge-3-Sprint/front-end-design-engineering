import { NavLink } from 'react-router-dom';

export default function PacienteSidebar() {
  return (
    <aside className="paciente-sidebar"
      data-guide-step="2"
      data-guide-title="Navegação da Área do Usuário"
      data-guide-text="Use este menu para navegar entre as diferentes seções da sua área, como seus dados e tutoriais."
      data-guide-arrow="left">
      <div className="paciente-sidebar-header">
        <h3>Área do Usuário</h3>
      </div>
      <nav className="paciente-nav" aria-label="Navegação Área do Usuário">
        <ul>
          <li><NavLink to="/perfil" className={({isActive}) => isActive ? 'active' : ''}><span className="nav-icon">👤</span> Meus Dados </NavLink></li>
          <li><NavLink to="/tutoriais" className={({isActive}) => isActive ? 'active' : ''}><span className="nav-icon">📄</span> Tutoriais </NavLink></li>
          <li><NavLink to="/receitas" className={({isActive}) => isActive ? 'active' : ''}><span className="nav-icon">💊</span> Receitas </NavLink></li>
          <li><NavLink to="/consultas" className={({isActive}) => isActive ? 'active' : ''}><span className="nav-icon">📅</span> Consultas </NavLink></li>
          <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}><span className="nav-icon">🚪</span> Sair </NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}


