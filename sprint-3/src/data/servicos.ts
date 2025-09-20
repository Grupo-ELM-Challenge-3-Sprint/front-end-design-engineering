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
    descricao: 'Acesse e gerencie suas receitas de forma digital, com lembretes automáticos para não esquecer seus medicamentos.',
    link: '/receitas',
    linkTexto: 'Adicione agora',
    imagem: '/src/assets/img/imagens-servicos/imagem-agendamento.png',
    alt: 'Ícone Receitas'
  },
  {
    id: 'teleconsulta',
    titulo: 'Teleconsulta',
    descricao: 'Adicione Lembretes para suas consultas online e receba notificações para não perder seus atendimentos.',
    link: '/consultas',
    linkTexto: 'Conhecer serviço',
    imagem: '/src/assets/img/imagens-servicos/imagem-teleconsulta.png',
    alt: 'Ícone Teleconsulta'
  },
  {
    id: 'tutoriais',
    titulo: 'Tutoriais',
    descricao: 'Aprenda a usar todos os recursos do Portal do PacienteHC. Desde o cadastro até o agendamento de consultas.',
    link: '/tutoriais',
    linkTexto: 'Ver Tutoriais',
    imagem: '/src/assets/img/imagens-servicos/imagem-tutoriais.png',
    alt: 'Ícone Tutoriais'
  },
  {
    id: 'atendimento-24h',
    titulo: 'Atendimento 24h',
    descricao: 'Emergências médicas atendidas 24 horas por dia, em todas as unidades HC.',
    link: '/hospitais',
    linkTexto: 'Ver unidades',
    imagem: '/src/assets/img/imagens-servicos/imagem-atendimento.png',
    alt: 'Ícone Atendimento 24h'
  },
  {
    id: 'especialidades',
    titulo: 'Especialidades',
    descricao: 'Mais de 40 especialidades médicas com profissionais renomados e equipamentos de última geração.',
    link: '/hospitais',
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
