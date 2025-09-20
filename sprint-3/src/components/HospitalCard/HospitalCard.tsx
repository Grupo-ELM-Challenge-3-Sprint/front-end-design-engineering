import React from 'react';
import { Link } from 'react-router-dom';
import localizacaoIcone from '../../assets/img/icons/imagem-localizacao.png';
import telefoneIcone from '../../assets/img/icons/imagem-telefone.png';
import horarioIcone from '../../assets/img/icons/imagem-horario.png';
import type { Hospital } from '../../data/hospitais';

export default React.memo(function HospitalCard({ hospital }: { hospital: Hospital }) {
  return (
    <article className="unidade-card" role="article" aria-labelledby={`hospital-${hospital.id}-title`}>
      <img src={hospital.imagem} className="fachada-hospitais" alt={hospital.alt} loading="lazy" />

      <div className="unidade-card-content">
        <h3 id={`hospital-${hospital.id}-title`} className="unidade-card-title">
          {hospital.nome}
        </h3>

        <p className="unidade-card-info">
          <img src={localizacaoIcone} alt="ícone localização" className="info-icon" />
          {hospital.endereco.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              {idx < hospital.endereco.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>

        <p className="unidade-card-info">
          <img src={telefoneIcone} alt="ícone telefone" className="info-icon" />
          {hospital.telefone}
        </p>

        <p className="unidade-card-info">
          <img src={horarioIcone} alt="ícone horário" className="info-icon" />
          {hospital.horario}
        </p>

        <Link to={hospital.mapaUrl} className="btn-ver-no-mapa" target="_blank" rel="noopener noreferrer" aria-label={`Ver ${hospital.nome} no mapa`} >
          Ver no mapa <span className="arrow-icon">↗</span>
        </Link>
      </div>
    </article>
  );
});

