import React, { useState } from 'react';
import GuiaInterativo from './GuiaInterativo';
import FloatingButton from './FloatingButton';

const GuiaInterativoWrapper: React.FC = () => {
  const [guiaAtivo, setGuiaAtivo] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false); // Assuming menu state is managed here

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
};

export default GuiaInterativoWrapper;
