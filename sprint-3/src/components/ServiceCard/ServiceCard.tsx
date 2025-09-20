import React from 'react';
import { Link } from 'react-router-dom';
import type { Servico } from '../../data/servicos';

interface ServiceCardProps {
  servico: Servico;
  index: number;
}

const ServiceCard = React.memo(({ servico, index }: ServiceCardProps) => {
  return (
    <article
      className="servico-card-pagina"
      role="article"
      aria-labelledby={`servico-${servico.id}-title`}
      data-guide-step={index + 1}
      data-guide-title={servico.titulo}
      data-guide-text={`Informações sobre ${servico.titulo}`}
      data-guide-arrow="down"
    >
      <div className="servico-card-icon-wrapper">
        <img
          src={servico.imagem}
          alt={servico.alt}
          className="servico-icon"
          loading="lazy"
          width="60"
          height="60"
        />
      </div>

      <div className="servico-card-content">
        <h3
          id={`servico-${servico.id}-title`}
        >
          {servico.titulo}
        </h3>

        <p>
          {servico.descricao}
        </p>

        <Link
          to={servico.link}
          className="btn-saiba-mais"
          aria-label={`Acessar ${servico.titulo}`}
        >
          {servico.linkTexto}
          <span className="arrow-icon" aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
