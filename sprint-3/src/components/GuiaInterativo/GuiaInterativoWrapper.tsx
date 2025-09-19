import { useState } from 'react';
import GuiaInterativo from './GuiaInterativo';
import FloatingButton from './FloatingButton';

export default function GuiaInterativoWrapper() {
  const [guiaAtivo, setGuiaAtivo] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false); //Assumindo que Menu é gerenciado aqui... Algo que não é... Precisamos ver o código e tentar implementar


  const iniciarGuia = () => {
    setGuiaAtivo(true);
  };

  const concluirGuia = () => {
    setGuiaAtivo(false);
  };

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  const handleGuideInteraction = () => {
    if (menuAberto) {
      fecharMenu();
    }
  };

  return (
    <>
      <FloatingButton onClick={iniciarGuia} />
      <GuiaInterativo iniciar={guiaAtivo} onConcluir={concluirGuia} onGuideInteraction={handleGuideInteraction} />
    </>
  );
}
