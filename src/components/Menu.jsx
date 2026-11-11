import { useState } from 'react';

const linkClass = 'block rounded-lg px-3 py-2 hover:bg-background hover:text-primary';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() { {
    /*!isOpen: se esta fechado abre, se ta abertp fecha. Ele faz o contrario*/
  }
    setIsOpen(!isOpen);
  }

  function closeMenu() { {/*Fecha */}
    setIsOpen(false);
  }

return (
  <nav
    id="menu"
    className="rounded-xl border border-border bg-surface p-3
        md:col-span-2 xl:col-span-1 xl:row-span-2"
  >
    <button
      type="button"
      onClick={toggleMenu}
      aria-label="Menu principal"
      aria-expanded={isOpen}
      aria-controls="menu-links"
      className="flex w-full items-center justify-between rounded-lg border border-border
    px-3 py-2 font-bold hover:border-primary xl:hidden"
    >
      Menu
      <span aria-hidden="true">{isOpen ? '✕' : '☰'}</span>{' '}
      {/*Se tiver aberto aparece o X, se tiver fechado aparece o ☰*/}
    </button>

    <ul
      id="menu-links"
      className={`mt-3 flex-col gap-1 xl:mt-0 xl:flex ${isOpen ? 'flex' : 'hidden'}`}
    >
      <li>
        <a href="#summary" onClick={closeMenu} className={linkClass}>
          Resumo
        </a>
      </li>
      <li>
        <a href="#list" onClick={closeMenu} className={linkClass}>
          Lista
        </a>
      </li>
      <li>
        <a href="#chart" onClick={closeMenu} className={linkClass}>
          Gráfico
        </a>
      </li>
      {/* + Lista (#list) e Gráfico (#chart), iguais */}
    </ul>
  </nav>
);

}

export default Menu;
