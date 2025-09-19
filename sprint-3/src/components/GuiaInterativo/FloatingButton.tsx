import React from 'react';
import { Link } from 'react-router-dom';

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 ">
      <Link to="#" className="floating-btn accessibility-btn bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-colors w-18 h-18 flex items-center justify-center text-3xl" id="toggleGuideFloatingButton" role="button" aria-label="Guia Interativo"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}>
        ♿
      </Link>
    </div>
  );
};

export default FloatingButton;
