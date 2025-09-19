// src/components/GuiaInterativo/GuiaInterativo.tsx
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import '../../globals.css';

interface GuiaInterativoProps {
  iniciar?: boolean;
  onConcluir?: () => void;
  chaveGuia?: string;
  onGuideInteraction?: () => void;
}

interface PassoGuia {
  elemento: HTMLElement;
  passo: number;
  titulo: string;
  texto: string;
  posicaoSeta: string;
}

const marcarGuiaComoVisto = (chave: string): void => localStorage.setItem(chave, 'true');

export default function GuiaInterativo({ iniciar = false, onConcluir, chaveGuia = 'guiaPrincipal', onGuideInteraction }: GuiaInterativoProps) {
    const [passos, setPassos] = useState<PassoGuia[]>([]);
    const [passoAtualIndex, setPassoAtualIndex] = useState<number>(0);
    const [estaAtivo, setEstaAtivo] = useState<boolean>(false);
    const [posicaoBalao, setPosicaoBalao] = useState<{ top: string; left: string; transform: string }>({
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    });
    const [posicaoSetaFinal, setPosicaoSetaFinal] = useState<string>('down');
    const elementoDestacadoRef = useRef<HTMLElement | null>(null);
    const balaoRef = useRef<HTMLDivElement | null>(null);

    // Remove automatic start effect, rely on iniciar prop only
    useEffect(() => {
        if (iniciar) {
            iniciarGuia();
        }
    }, [iniciar]);

    const iniciarGuia = (forcar = false) => {
        const elementosDoGuia = document.querySelectorAll('[data-guide-step]');
        const passosData: PassoGuia[] = Array.from(elementosDoGuia).map(el => {
            const element = el as HTMLElement;
            return {
                elemento: element,
                passo: parseInt(element.dataset.guideStep || '0', 10),
                titulo: element.dataset.guideTitle || 'Dica Rápida',
                texto: element.dataset.guideText || 'Veja este elemento importante.',
                posicaoSeta: element.dataset.guideArrow || 'down',
            };
        }).sort((a, b) => a.passo - b.passo);

        if (passosData.length > 0) {
            setPassos(passosData);
            setPassoAtualIndex(0);
            setEstaAtivo(true);
            document.body.classList.add('guia-ativo-no-scroll');

            if (forcar) {
                localStorage.removeItem(chaveGuia);
            }
        } else {
            console.warn('Guia Interativo: Nenhum elemento com data-guide-step encontrado.');
        }
    };

    // Efeito para atualizar o destaque e a posição do balão quando o passo muda
    useEffect(() => {
        if (!estaAtivo || passos.length === 0) return;

        console.log('GuiaInterativo: passos detectados:', passos.length);
        console.log('GuiaInterativo: passoAtualIndex:', passoAtualIndex);

        // Limpa o destaque do elemento anterior
        if (elementoDestacadoRef.current) {
            elementoDestacadoRef.current.classList.remove('guia-elemento-destacado');
        }

        const passoAtual = passos[passoAtualIndex];
        const elementoAlvo = passoAtual.elemento;

        console.log('GuiaInterativo: elementoAlvo:', elementoAlvo);
        console.log('GuiaInterativo: boundingClientRect:', elementoAlvo.getBoundingClientRect());

        // Destaca o novo elemento
        elementoAlvo.classList.add('guia-elemento-destacado');
        elementoAlvo.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        elementoDestacadoRef.current = elementoAlvo;

        // Calcula a posição do balão após a rolagem
        setTimeout(() => {
            const rect = elementoAlvo.getBoundingClientRect();
            const balaoEl = balaoRef.current;
            if (!balaoEl) return;
            const balaoRect = balaoEl.getBoundingClientRect();

            console.log('GuiaInterativo: balaoRect:', balaoRect);

            const gap = 15; // Espaço entre o balão e o elemento
            let top = 0, left = 0;
            let posicaoSeta = passoAtual.posicaoSeta;

            // Dynamically flip balloon position if it doesn't fit above the element
            if (posicaoSeta === 'down') {
                const potentialTop = rect.top - balaoRect.height - gap;
                if (potentialTop < 10) {
                    posicaoSeta = 'up';
                }
            } else if (posicaoSeta === 'up') {
                const potentialTop = rect.bottom + balaoRect.height + gap;
                if (potentialTop > window.innerHeight) {
                    posicaoSeta = 'down';
                }
            }

            setPosicaoSetaFinal(posicaoSeta);

            switch (posicaoSeta) {
                case 'up':
                    top = rect.bottom + gap;
                    left = rect.left + (rect.width / 2) - (balaoRect.width / 2);
                    break;
                case 'left':
                    top = rect.top + (rect.height / 2) - (balaoRect.height / 2);
                    left = rect.right + gap;
                    break;
                case 'right':
                    top = rect.top + (rect.height / 2) - (balaoRect.height / 2);
                    left = rect.left - balaoRect.width - gap;
                    break;
                default: // down
                    top = rect.top - balaoRect.height - gap;
                    left = rect.left + (rect.width / 2) - (balaoRect.width / 2);
                    break;
            }

            // Corrige para não sair da tela horizontalmente
            if (left < 10) left = 10;
            if (left + balaoRect.width > window.innerWidth) left = window.innerWidth - balaoRect.width - 10;

            // Corrige para não sair da tela verticalmente
            if (top < 10) top = 10;
            if (top + balaoRect.height > window.innerHeight) top = window.innerHeight - balaoRect.height - 10;

            setPosicaoBalao({ top: `${top}px`, left: `${left}px`, transform: 'none' });
        }, 300); // Espera o scroll suave terminar

    }, [passoAtualIndex, estaAtivo, passos]);

    const handleConcluir = (marcarComoVisto: boolean) => {
        if (marcarComoVisto) {
            marcarGuiaComoVisto(chaveGuia);
        }
        if (elementoDestacadoRef.current) {
            elementoDestacadoRef.current.classList.remove('guia-elemento-destacado');
        }
        document.body.classList.remove('guia-ativo-no-scroll');
        setEstaAtivo(false);
        if (onConcluir) onConcluir(); // Chama a função do componente pai, se houver
    };

    const handleProximo = () => {
        if (passoAtualIndex < passos.length - 1) {
            setPassoAtualIndex(passoAtualIndex + 1);
        } else {
            handleConcluir(true); // Conclui e marca como visto
        }
    };

    const handleAnterior = () => {
        if (passoAtualIndex > 0) {
            setPassoAtualIndex(passoAtualIndex - 1);
        }
    };

if (!estaAtivo || passos.length === 0) {
    return null;
}

    const passoAtual = passos[passoAtualIndex];

    return createPortal(
        <div className="guia-overlay" onClick={() => onGuideInteraction && onGuideInteraction()}>
            <div ref={balaoRef} id="guia-balao" className="guia-balao" style={posicaoBalao} onClick={e => e.stopPropagation()}>
                <div className={`guia-seta guia-seta-${posicaoSetaFinal}`}></div>
                <div className="guia-conteudo">
                    <h3 className="guia-titulo">{passoAtual.titulo}</h3>
                    <p className="guia-texto">{passoAtual.texto}</p>
                </div>
                <div className="guia-navegacao">
                    <button onClick={handleAnterior} className="guia-btn-anterior" disabled={passoAtualIndex === 0}>
                        Anterior
                    </button>
                    <span className="guia-contador">{passoAtualIndex + 1} / {passos.length}</span>
                    <button onClick={handleProximo} className="guia-btn-proximo">
                        {passoAtualIndex === passos.length - 1 ? 'Concluir' : 'Próximo'}
                    </button>
                </div>
                <div className="guia-pular">
                    <button onClick={() => handleConcluir(true)}>Pular Guia / Não mostrar novamente</button>
                </div>
            </div>
        </div>,
        document.body
    );
}
