import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function linkClass({ isActive }) {
  return isActive
    ? 'block rounded-lg bg-primary px-3 py-2 font-bold text-background'
    : 'block rounded-lg px-3 py-2 hover:bg-background hover:text-primary';
}

function Menu() { {/*significa que ele recebe uma propriedade q será uma função enviada pelo App. */}
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    {
      /*!isOpen: se esta fechado abre, se ta abertp fecha. Ele faz o contrario*/
    }
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    {
      /*Fecha */
    }
    setIsOpen(false);
  }

  return (
    <nav
      id="menu"
      className="rounded-xl border border-border bg-surface p-3
        md:col-span-2 xl:col-span-1 xl:row-span-3"
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
          <NavLink to="/" end onClick={closeMenu} className={linkClass}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/lista" onClick={closeMenu} className={linkClass}>
            Lista
          </NavLink>
        </li>
        <li>
          <NavLink to="/novo" onClick={closeMenu} className={linkClass}>
            Novo anime
          </NavLink>
        </li>
        {/*<li>
          <NavLink to="#highlight" onClick={closeMenu} className={linkClass}>
            Assisitindo agora
          </NavLink>
        </li>
        <li>
          <NavLink to="#chart" onClick={closeMenu} className={linkClass}>
            Gráfico
          </NavLink>
        </li>
         + Lista (#list) e Gráfico (#chart), iguais */}
      </ul>
    </nav>
  );
}

export default Menu;
