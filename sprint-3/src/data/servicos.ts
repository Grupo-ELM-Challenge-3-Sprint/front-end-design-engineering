export interface Servico {
  id: string;
  titulo: string;
  descricao: string;
  link: string;
  linkTexto: string;
  imagem: string;
  alt: string;
}

export const servicos: Servico[] = [
  {
    id: 'receitas',
    titulo: 'Receitas',
    descricao: 'Acesse e gerencie suas receitas médicas de forma digital, com renovação simplificada e lembretes automáticos para não esquecer seus medicamentos.',
    link: '/receitas',
    linkTexto: 'Adicione agora',
    imagem: '/src/assets/img/imagens-servicos/imagem-agendamento.png',
    alt: 'Ícone Receitas'
  },
  {
    id: 'teleconsulta',
    titulo: 'Teleconsulta',
    descricao: 'Consulte com especialistas de forma remota e segura, sem precisar sair de casa. Agende sua consulta online e receba atendimento médico de qualidade.',
    link: '/consultas',
    linkTexto: 'Conhecer serviço',
    imagem: '/src/assets/img/imagens-servicos/imagem-teleconsulta.png',
    alt: 'Ícone Teleconsulta'
  },
  {
    id: 'tutoriais',
    titulo: 'Tutoriais',
    descricao: 'Aprenda a usar todos os recursos do SimplesHC com nossos guias interativos. Desde o cadastro até o agendamento de consultas, tudo explicado passo a passo.',
    link: '/tutoriais',
    linkTexto: 'Ver Tutoriais',
    imagem: '/src/assets/img/imagens-servicos/imagem-tutoriais.png',
    alt: 'Ícone Tutoriais'
  },
  {
    id: 'atendimento-24h',
    titulo: 'Atendimento 24h',
    descricao: 'Emergências médicas atendidas 24 horas por dia, em todas as unidades HC.',
    link: '/hospitais#lista-unidades',
    linkTexto: 'Ver unidades',
    imagem: '/src/assets/img/imagens-servicos/imagem-atendimento.png',
    alt: 'Ícone Atendimento 24h'
  },
  {
    id: 'especialidades',
    titulo: 'Especialidades',
    descricao: 'Mais de 40 especialidades médicas com profissionais renomados e equipamentos de última geração.',
    link: '/hospitais#lista-unidades',
    linkTexto: 'Conhecer especialidades',
    imagem: '/src/assets/img/imagens-servicos/imagem-especialidades.png',
    alt: 'Ícone Especialidades'
  },
  {
    id: 'unidades-hc',
    titulo: 'Unidades HC',
    descricao: 'Conheça todas as unidades do Hospital das Clínicas espalhadas pela cidade.',
    link: '/hospitais',
    linkTexto: 'Ver no mapa',
    imagem: '/src/assets/img/imagens-servicos/imagem-unidades.png',
    alt: 'Ícone Unidades HC'
  }
];
