import { Link } from 'react-router-dom';

import '../../globals.css'
import medicaImage from '../../assets/img/imagem-index/medica.png';
import examesImage from '../../assets/img/imagem-index/imagem-exames.png';
import agendamentoImage from '../../assets/img/imagem-index/imagem-agendamento.png';
import teleconsultaImage from '../../assets/img/imagem-index/imagem-teleconsulta.png';
import medicoImage from '../../assets/img/imagem-index/medico.png';

export default function Home(){
    return(
        <main>
        {/* Seção principal de destaque (hero), apresenta o propósito do site e botões de ação rápida */}
        <section className="bg-[#e9f3fb] py-6 text-center"
                 data-guide-step="1" 
                 data-guide-title="Bem-vindo ao SimplesHC!" 
                 data-guide-text="Esta é a nossa seção principal, onde você encontra um resumo do nosso propósito e botões de acesso rápido."
                 data-guide-arrow="down">
            <div className="container flex flex-col items-center gap-[25px] px-8 py-10">
                <div>
                    <h1 className='mb-5 text-4xl font-bold text-[#1a237e]'>Simplificando o acesso à saúde</h1>
                    <p className='mb-[25px] text-[#333]'>O SimplesHC torna mais fácil o acesso aos serviços do Hospital das Clínicas para todos os pacientes, especialmente para os idosos.</p>
                    <div className="flex flex-col gap-[12px] w-full items-center"
                         data-guide-step="2" 
                         data-guide-title="Ações Rápidas"
                         data-guide-text="Use estes botões para acessar sua área ou conhecer nossas unidades."
                         data-guide-arrow="up">
                        <Link to="#" className="btn bg-[#005c99] text-white border border-[#005c99] hover:bg-[#004471]">Acesse sua área de paciente</Link>
                        <Link to="#" className="btn bg-white text-[#005c99] border border-[#005c99] hover:bg-[#e6f2ff]">Conheça nossas unidades</Link>
                    </div>
                </div>
                <div className="w-full max-w-[400px] mt-[10px] mx-auto">
                    <img src={medicaImage} alt="Profissional de saúde utilizando um laptop em um ambiente moderno" className='rounded-[8px] shadow-[0_4px_15px_rgba(0,0,0,0.2)]' />
                </div>
            </div>
        </section>

        {/* Seção de apresentação dos principais serviços oferecidos */}
        <section className="px-6 bg-white">
            <div className="container">
                <h2 className='text-center'>Nossos Serviços</h2>
                <div className="grid grid-cols-1 mb-[25px] gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="service-card">
                        <img src={examesImage} alt="ícone exames" />
                        <h3>Exames Online</h3>
                        <p>Acesse seus resultados de exames a qualquer momento, de qualquer lugar, com total segurança.</p>
                    </div>
                    <div className="service-card">
                        <img src={agendamentoImage} alt="ícone agendamento" />
                        <h3>Agendamento Fácil</h3>
                        <p>Marque consultas e exames de forma simples e rápida, sem filas ou telefonemas.</p>
                    </div>
                    <div className="service-card">
                        <img src={teleconsultaImage} alt="ícone teleconsulta" />
                        <h3>Teleconsulta</h3>
                        <p>Consulte-se com especialistas sem sair de casa, através de videochamadas seguras.</p>
                    </div>
                </div>
                <Link to="#" className="block text-center mt-[15px] font-bold text-[#007bff] text-[0.85em] hover:underline">Ver todos os serviços →</Link>
            </div>
        </section>

        {/* Seção dedicada ao recursos de acessibilidade */}
        <section id="guide-interactive-section">
            <div className="container flex flex-col items-center gap-[20px] text-center bg-gray-100">
                <div className="w-full max-w-[400px] mx-auto my-6">
                    <img src={medicoImage} alt="Guia interativo" className='rounded-lg shadow-lg' />
                </div>
                <div className="guide-text">
                    <h2 className='text-3xl mb-5'>Guia Interativo</h2>
                    <p className='text-[0.9em] mb-7'>Nossa plataforma conta com um assistente que ajuda você a navegar pelo sistema, explicando cada função e recurso disponível.</p>
                    <div className="bg-white p-3 rounded-md border border-gray-300 mx-auto mb-5 text-left max-w-[90%] accessibility-features">
                        <h4 className='text-neutral-800 mb-2 font-bold text-lg'>Recursos de Acessibilidade</h4>
                        <ul className='list-disc pl-5'>
                            <li>Interface simplificada e responsiva, adaptada para celulares</li>
                            <li>Guia interativo para ajudar na navegação passo a passo</li>
                            <li>Textos diretos e linguagem acessível para usuários com pouca familiaridade digital</li>
                            <li>Botões e elementos visuais organizados de forma clara e intuitiva</li>
                        </ul>

                    </div>
                    <Link to="#" className="btn mx-auto bg-[#005c99] text-white border border-[#005c99] hover:bg-[#004471] px-4 py-2 rounded m-7">Ver perguntas frequentes</Link>
                </div>
            </div>
        </section>

        {/* Seção de depoimentos de pacientes */}
        <section className='py-10 px-10'>
            <div className="container">
                <h2 className='text-center'>O que dizem nossos pacientes</h2>
                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                    <div className="testimonial-card">
                        <div className="initials">RS</div>
                        <h4>Roberto Silva</h4>
                        <span>Paciente há 3 anos</span>
                        <p>"O SimplesHC tornou muito mais fácil acessar meus exames e agendar consultas. Não preciso mais ir ao hospital só para buscar resultados."</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="initials">AP</div>
                        <h4>Ana Paula</h4>
                        <span>Paciente há 1 ano</span>
                        <p>"A função de teleconsulta é excelente para minha mãe idosa, que tem dificuldade de locomoção. Agora ela consegue falar com o médico sem sair de casa."</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="initials">JO</div>
                        <h4>João Oliveira</h4>
                        <span>Paciente há 2 anos</span>
                        <p>"O guia interativo me ajudou muito a entender como usar o sistema. Mesmo não tendo muita experiência com tecnologia, consegui aprender rapidamente."</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
}