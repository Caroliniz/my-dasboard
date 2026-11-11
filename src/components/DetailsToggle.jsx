import { useState } from 'react';

function DetailsToggle({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDetails() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="mt-4">
      <div className={isOpen ? '' : 'line-clamp-2'}>{children}</div>
      {/*line-clamp-2: Limita o texto a 2 linhas quando fechado. */}

      <button
        type="button"
        onClick={toggleDetails}
        aria-expanded={isOpen}
        className="mt-2 text-sm font-bold text-primary hover:underline"
      >
        {isOpen ? 'Ocultar' : 'Ver mais detalhes'}
      </button>
    </div>
  );
}

export default DetailsToggle;
