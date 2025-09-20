export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
  {
    id: 'cadastro',
    question: "Como faço para me cadastrar no SimplesHC?",
    answer: "Para se cadastrar no SimplesHC, você precisa comparecer a uma unidade do Hospital das Clínicas com seus documentos pessoais (RG e CPF) e cartão do SUS. Após confirmar seus dados, você receberá um código de acesso para criar sua conta online."
  },
  {
    id: 'senha',
    question: "Esqueci minha senha, como recupero o acesso?",
    answer: "Na tela de login, clique em \"Esqueci minha senha\". Você receberá um link de recuperação no e-mail cadastrado. Caso não tenha acesso ao e-mail, entre em contato com o suporte ou compareça a uma unidade HC com seus documentos."
  },
  {
    id: 'consulta',
    question: "Como marco uma consulta médica?",
    answer: "Após fazer login, acesse a seção \"Consultas\" no menu principal. Clique em \"Agendar Nova Consulta\", selecione a especialidade desejada, a unidade HC e verifique as datas disponíveis. Confirme seus dados e finalize o agendamento."
  },
  {
    id: 'exames',
    question: "Os resultados de exames ficam disponíveis por quanto tempo?",
    answer: "Os resultados de exames ficam disponíveis permanentemente em sua conta do SimplesHC. Você pode acessá-los a qualquer momento na seção \"Exames\", mesmo anos após a realização."
  },
  {
    id: 'teleconsulta',
    question: "Como funciona a teleconsulta?",
    answer: "A teleconsulta é realizada por videochamada. Após agendar, você receberá um lembrete por e-mail e no aplicativo. No horário marcado, acesse a seção \"Teleconsulta\" e clique em \"Iniciar Consulta\". O sistema usa o Google Meet para a videochamada, portanto certifique-se de que seu dispositivo tenha câmera e microfone funcionando."
  },
  {
    id: 'agendar-exame',
    question: "Posso agendar exames pelo SimplesHC?",
    answer: "Sim, você pode agendar exames que tenham sido solicitados por médicos do HC. Acesse a seção \"Exames\", clique em \"Agendar Exame\" e selecione a solicitação médica correspondente, a unidade e a data desejada."
  },
  {
    id: 'guia',
    question: "Como desativo o guia interativo?",
    answer: "O guia interativo pode ser desativado clicando no ícone de informação (i) no canto superior esquerdo da tela e selecionando \"Desativar guia\". Você pode reativá-lo a qualquer momento pelo mesmo ícone."
  },
  {
    id: 'receitas',
    question: "Posso acessar minhas receitas médicas pelo SimplesHC?",
    answer: "Sim, todas as receitas emitidas por médicos do HC estão disponíveis digitalmente na seção \"Receitas\". Você pode visualizá-las, baixá-las em PDF ou compartilhá-las diretamente com farmácias parceiras."
  },
  {
    id: 'seguranca',
    question: "O sistema é seguro? Como meus dados são protegidos?",
    answer: "Sim, o SimplesHC segue rigorosos protocolos de segurança e criptografia. Seus dados médicos são protegidos conforme a LGPD (Lei Geral de Proteção de Dados) e só podem ser acessados por você e pelos profissionais de saúde autorizados envolvidos no seu atendimento."
  },
  {
    id: 'dispositivos',
    question: "Posso usar o SimplesHC em qualquer dispositivo?",
    answer: "Sim, o SimplesHC é responsivo e funciona em computadores, tablets e smartphones. Basta acessar o site ou baixar o aplicativo, disponível para Android e iOS."
  }
];
