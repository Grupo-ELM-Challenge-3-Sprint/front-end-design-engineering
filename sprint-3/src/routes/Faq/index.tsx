import { useState } from "react";
import { Link } from "react-router-dom";

import "../../globals.css";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como faço para me cadastrar no SimplesHC?",
      answer: "Para se cadastrar no SimplesHC, você precisa comparecer a uma unidade do Hospital das Clínicas com seus documentos pessoais (RG e CPF) e cartão do SUS. Após confirmar seus dados, você receberá um código de acesso para criar sua conta online."
    },
    {
      question: "Esqueci minha senha, como recupero o acesso?",
      answer: "Na tela de login, clique em \"Esqueci minha senha\". Você receberá um link de recuperação no e-mail cadastrado. Caso não tenha acesso ao e-mail, entre em contato com o suporte ou compareça a uma unidade HC com seus documentos."
    },
    {
      question: "Como marco uma consulta médica?",
      answer: "Após fazer login, acesse a seção \"Consultas\" no menu principal. Clique em \"Agendar Nova Consulta\", selecione a especialidade desejada, a unidade HC e verifique as datas disponíveis. Confirme seus dados e finalize o agendamento."
    },
    {
      question: "Os resultados de exames ficam disponíveis por quanto tempo?",
      answer: "Os resultados de exames ficam disponíveis permanentemente em sua conta do SimplesHC. Você pode acessá-los a qualquer momento na seção \"Exames\", mesmo anos após a realização."
    },
    {
      question: "Como funciona a teleconsulta?",
      answer: "A teleconsulta é realizada por videochamada. Após agendar, você receberá um lembrete por e-mail e no aplicativo. No horário marcado, acesse a seção \"Teleconsulta\" e clique em \"Iniciar Consulta\". O sistema usa o Google Meet para a videochamada, portanto certifique-se de que seu dispositivo tenha câmera e microfone funcionando."
    },
    {
      question: "Posso agendar exames pelo SimplesHC?",
      answer: "Sim, você pode agendar exames que tenham sido solicitados por médicos do HC. Acesse a seção \"Exames\", clique em \"Agendar Exame\" e selecione a solicitação médica correspondente, a unidade e a data desejada."
    },
    {
      question: "Como desativo o guia interativo?",
      answer: "O guia interativo pode ser desativado clicando no ícone de informação (i) no canto superior esquerdo da tela e selecionando \"Desativar guia\". Você pode reativá-lo a qualquer momento pelo mesmo ícone."
    },
    {
      question: "Posso acessar minhas receitas médicas pelo SimplesHC?",
      answer: "Sim, todas as receitas emitidas por médicos do HC estão disponíveis digitalmente na seção \"Receitas\". Você pode visualizá-las, baixá-las em PDF ou compartilhá-las diretamente com farmácias parceiras."
    },
    {
      question: "O sistema é seguro? Como meus dados são protegidos?",
      answer: "Sim, o SimplesHC segue rigorosos protocolos de segurança e criptografia. Seus dados médicos são protegidos conforme a LGPD (Lei Geral de Proteção de Dados) e só podem ser acessados por você e pelos profissionais de saúde autorizados envolvidos no seu atendimento."
    },
    {
      question: "Posso usar o SimplesHC em qualquer dispositivo?",
      answer: "Sim, o SimplesHC é responsivo e funciona em computadores, tablets e smartphones. Basta acessar o site ou baixar o aplicativo, disponível para Android e iOS."
    }
  ];

  return (
    <main>
        <section className="bg-[#e9f3fb] py-[30px] text-center md:text-[18px]"
            data-guide-step="1"
            data-guide-title="Perguntas Frequentes"
            data-guide-text="Bem-vindo à nossa seção de Perguntas Frequentes! Aqui você pode encontrar respostas rápidas para as dúvidas mais comuns."
            data-guide-arrow="down">
            <div className="container">
                <h2>Perguntas Frequentes</h2>
                <p>Encontre respostas para as dúvidas mais comuns sobre o SimplesHC.</p>
            </div>
        </section>

        {/*Seção de perguntas e respostas em formato de acordeão*/}
        <section className="py-9"
            data-guide-step="2"
            data-guide-title="Como Usar o FAQ"
            data-guide-text="Clique em uma pergunta para expandir e ver a resposta. O ícone ao lado indica se a resposta está visível."
            data-guide-arrow="up">
            <div className="container">
                <div className="max-w-[800px] mx-auto border border-gray-200 rounded-lg overflow-hidden md:text-[18px]">    
                                
                    {faqs.map((faq, idx) => (
                        <div className="border-b border-gray-200" key={idx}>
                            <button
                                className="faq-question text-[#1a237e] cursor-pointer text-[1.05em] p-5 w-full text-left flex justify-between items-center font-semibold hover:bg-[#eff1f7] focus:bg-[#eff1f7] focus:outline-none duration-200"
                                type="button"
                                aria-expanded={openIndex === idx}
                                aria-controls={`faq-answer-${idx}`}
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
                                {faq.question}
                                <span className={`transition-transform duration-300 ease-in-out ml-[10px] w-[12px] h-[12px] border-r-2 border-b-2 border-[#007bff] inline-block ${openIndex === idx ? "translate-y-[2px] -rotate-[135deg]" : "-translate-y-[2px] rotate-45"}`}></span>
                            </button>
                            {openIndex === idx && (
                                <div className={`px-5 bg-white overflow-hidden transition-all duration-400 ease-out ${openIndex === idx ? "max-h-[500px] pt-4 pb-4" : "max-h-0 pt-0 pb-0"}`} id={`faq-answer-${idx}`}>
                                <p className="py-5">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center my-10">
                    <p>Não encontrou o que procurava?</p>
                    <Link to="/contato" className="btn btn-primary mx-auto my-5">Entre em contato conosco</Link>
                </div>
            </div>
        </section>
  </main>
  );
}