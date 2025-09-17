export interface TutorialItem {
  id: string;
  title: string;
  to: string;
}

export const tutorials: TutorialItem[] = [
  { id: 'login', title: 'Como fazer login no app HC?', to: '/tutoriais/login' },
  { id: 'cadastro', title: 'Como se cadastrar no app HC?', to: '/tutoriais/cadastro' },
  { id: 'teleconsulta', title: 'Como acessar a teleconsulta no app HC?', to: '/tutoriais/teleconsulta' },
  { id: 'resultados-exames', title: 'Como acessar os meus resultados de exames?', to: '/tutoriais/resultados-exames' },
  { id: 'receitas', title: 'Como acessar as minhas receitas?', to: '/tutoriais/receitas' },
  { id: 'agendas', title: 'Como acessar minhas agendas?', to: '/tutoriais/agendas' },
  { id: 'solicitar-exames', title: 'Como solicitar exames no app HC?', to: '/tutoriais/solicitar-exames' },
  { id: 'documentos', title: 'Como acessar os meus documentos no app HC', to: '/tutoriais/documentos' },
];

export interface TutorialStep {
  title: string;
  description: string;
  image?: string;
}

export interface TutorialDetail {
  id: string;
  heading: string;
  videoTitle?: string;
  videoUrl?: string; // YouTube embed ou outro
  intro?: string;
  steps: TutorialStep[];
}

export const tutorialDetails: TutorialDetail[] = [
  {
    id: 'login',
    heading: 'Como fazer login no app HC?',
    videoTitle: 'Tutorial em vídeo de como fazer Login do App HC',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    intro: 'Siga os passos abaixo para acessar sua conta com CPF e senha.',
    steps: [
      { 
        title: 'Acesse a tela de login', 
        description: 'Abra o app e toque em Acessar Portal.',
        image: '/src/assets/img/tutoriais/abrirHC-etapa01.png'
      },
      { 
        title: 'Digite seu CPF e sua senha', 
        description: 'Informe o CPF e senha no campo indicado e clique em Acessar.',
        image: '/src/assets/img/tutoriais/login-etapa02.png'
      },
      { 
        title: 'Acesso realizado com sucesso', 
        description: 'Você será redirecionado para a tela de Início.',
        image: '/src/assets/img/tutoriais/login-etapa03.png'
      },
    ],
  },

  {
    id: 'cadastro',
    heading: 'Como se cadastrar no app HC?',
    videoTitle: 'Tutorial em vídeo de cadastro no App HC',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    intro: 'Veja como criar sua conta rapidamente.',
    steps: [
      { 
        title: 'Clique em Acessar Portal', 
        description: 'Abra o app e toque em Acessar Portal.',
        image: '/src/assets/img/tutoriais/abrirHC-etapa01.png'
      },
      { 
        title: 'Informe seus dados pessoais', 
        description: 'Insira CPF e em seguida clique em Localizar Paciente.',
        image: '/src/assets/img/tutoriais/cadastro-etapa02.png'
      },
      { 
        title: 'Dados de contato', 
        description: 'Adicione e-mail e telefone.',
        image: '/src/assets/img/tutoriais/cadastro-etapa03.png'
      },
      { 
        title: 'Selecione o nome da mãe', 
        description: 'Em seguida selecione a alternativa correta que corresponde ao nome completo de sua mãe.',
        image: '/src/assets/img/tutoriais/cadastro-etapa04.png'
      },
      { 
        title: 'Selecione o ano de nascimento', 
        description: 'Em seguida selecione qual alternativa correta é o ano de seu nascimento.',
        image: '/src/assets/img/tutoriais/cadastro-etapa05.png'
      },
      { 
        title: 'Crie uma senha segura', 
        description: 'Crie uma senha de acesso e confirme a mesma no próximo campo. Para finalizar clique no botão CADASTRAR SENHA.',
        image: '/src/assets/img/tutoriais/cadastro-etapa06.png'
      },
      { 
        title: 'Cadastro Concluído com sucesso!', 
        description: 'Ao concluir com sucesso a etapa de cadastro a tela será apresentada. Clique no botão ACESSAR AGORA.',
        image: '/src/assets/img/tutoriais/cadastro-etapa07.png'
      },
    ],
  },

  {
    id: 'teleconsulta',
    heading: 'Como acessar a teleconsulta no app HC?',
    videoTitle: 'Tutorial em vídeo de teleconsulta no App HC',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    intro: 'Aprenda como agendar e participar de consultas online.',
    steps: [
      { 
        title: 'Clique em Acessar Portal', 
        description: 'Abra o app e toque em Acessar Portal.',
        image: '/src/assets/img/tutoriais/abrirHC-etapa01.png'
      },
      { 
        title: 'Acesse a seção de Teleconsulta', 
        description: 'Na tela inicial, localize e clique na opção Teleconsulta.',
        image: '/src/assets/img/tutoriais/teleconsulta-etapa02.png'
      },
      { 
        title: 'Agende sua consulta', 
        description: 'Selecione a especialidade, médico e horário disponível.',
        image: '/src/assets/img/tutoriais/teleconsulta-etapa03.png'
      },
      { 
        title: 'Participe da consulta', 
        description: 'No horário agendado, acesse o link da consulta e participe da videochamada.',
        image: '/src/assets/img/tutoriais/teleconsulta-etapa04.png'
      },
    ],
  },

  {
    id: 'resultados-exames',
    heading: 'Como acessar os meus resultados de exames?',
    videoTitle: 'Tutorial em vídeo de resultados de exames no App HC',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    intro: 'Veja como visualizar seus resultados de exames de forma rápida e segura.',
    steps: [
      { 
        title: 'Clique em Acessar Portal', 
        description: 'Abra o app e toque em Acessar Portal.',
        image: '/src/assets/img/tutoriais/abrirHC-etapa01.png'
      },
      { 
        title: 'Acesse a seção de Exames', 
        description: 'Na tela inicial, localize e clique na opção Resultados de Exames.',
        image: '/src/assets/img/tutoriais/exames-etapa02.png'
      },
      { 
        title: 'Visualize seus resultados', 
        description: 'Selecione o exame desejado para visualizar o resultado completo.',
        image: '/src/assets/img/tutoriais/exames-etapa03.png'
      },
      { 
        title: 'Baixe ou compartilhe', 
        description: 'Você pode baixar o PDF ou compartilhar o resultado com seu médico.',
        image: '/src/assets/img/tutoriais/exames-etapa04.png'
      },
    ],
  },

  {
    id: 'receitas',
    heading: 'Como acessar as minhas receitas?',
    videoTitle: 'Tutorial em vídeo de receitas no App HC',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    intro: 'Aprenda como visualizar e gerenciar suas receitas médicas.',
    steps: [
      { 
        title: 'Clique em Acessar Portal', 
        description: 'Abra o app e toque em Acessar Portal.',
        image: '/src/assets/img/tutoriais/abrirHC-etapa01.png'
      },
      { 
        title: 'Acesse a seção de Receitas', 
        description: 'Na tela inicial, localize e clique na opção Minhas Receitas.',
        image: '/src/assets/img/tutoriais/receitas-etapa02.png'
      },
      { 
        title: 'Visualize suas receitas', 
        description: 'Selecione a receita desejada para visualizar os medicamentos prescritos.',
        image: '/src/assets/img/tutoriais/receitas-etapa03.png'
      },
      { 
        title: 'Baixe ou imprima', 
        description: 'Você pode baixar o PDF da receita ou imprimir para usar na farmácia.',
        image: '/src/assets/img/tutoriais/receitas-etapa04.png'
      },
    ],
  },

  {
    id: 'agendas',
    heading: 'Como acessar minhas agendas?',
    videoTitle: 'Tutorial em vídeo de agendas no App HC',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    intro: 'Veja como consultar e gerenciar seus agendamentos médicos.',
    steps: [
      { 
        title: 'Clique em Acessar Portal', 
        description: 'Abra o app e toque em Acessar Portal.',
        image: '/src/assets/img/tutoriais/abrirHC-etapa01.png'
      },
      { 
        title: 'Acesse a seção de Agendas', 
        description: 'Na tela inicial, localize e clique na opção Minhas Agendas.',
        image: '/src/assets/img/tutoriais/agendas-etapa02.png'
      },
      { 
        title: 'Visualize seus agendamentos', 
        description: 'Veja todos os seus agendamentos futuros e passados.',
        image: '/src/assets/img/tutoriais/agendas-etapa03.png'
      },
      { 
        title: 'Gerencie seus compromissos', 
        description: 'Você pode reagendar, cancelar ou agendar novas consultas.',
        image: '/src/assets/img/tutoriais/agendas-etapa04.png'
      },
    ],
  },

  {
    id: 'solicitar-exames',
    heading: 'Como solicitar exames no app HC?',
    videoTitle: 'Tutorial em vídeo de solicitação de exames no App HC',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    intro: 'Aprenda como solicitar exames médicos de forma prática.',
    steps: [
      { 
        title: 'Clique em Acessar Portal', 
        description: 'Abra o app e toque em Acessar Portal.',
        image: '/src/assets/img/tutoriais/abrirHC-etapa01.png'
      },
      { 
        title: 'Acesse a seção de Exames', 
        description: 'Na tela inicial, localize e clique na opção Solicitar Exames.',
        image: '/src/assets/img/tutoriais/solicitar-exames-etapa02.png'
      },
      { 
        title: 'Selecione o tipo de exame', 
        description: 'Escolha o tipo de exame que você precisa realizar.',
        image: '/src/assets/img/tutoriais/solicitar-exames-etapa03.png'
      },
      { 
        title: 'Agende o exame', 
        description: 'Selecione a data e horário disponível para realizar o exame.',
        image: '/src/assets/img/tutoriais/solicitar-exames-etapa04.png'
      },
    ],
  },

  {
    id: 'documentos',
    heading: 'Como acessar os meus documentos no app HC',
    videoTitle: 'Tutorial em vídeo de documentos no App HC',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    intro: 'Veja como acessar e gerenciar seus documentos médicos.',
    steps: [
      { 
        title: 'Clique em Acessar Portal', 
        description: 'Abra o app e toque em Acessar Portal.',
        image: '/src/assets/img/tutoriais/abrirHC-etapa01.png'
      },
      { 
        title: 'Acesse a seção de Documentos', 
        description: 'Na tela inicial, localize e clique na opção Meus Documentos.',
        image: '/src/assets/img/tutoriais/documentos-etapa02.png'
      },
      { 
        title: 'Visualize seus documentos', 
        description: 'Selecione o documento desejado para visualizar ou baixar.',
        image: '/src/assets/img/tutoriais/documentos-etapa03.png'
      },
      { 
        title: 'Gerencie seus arquivos', 
        description: 'Você pode baixar, compartilhar ou organizar seus documentos.',
        image: '/src/assets/img/tutoriais/documentos-etapa04.png'
      },
    ],
  },

];


