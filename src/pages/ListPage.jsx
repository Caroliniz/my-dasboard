import { useState } from "react";
import Panel from "../components/Panel";
import StatusBadge from "../components/StatusBadge";
import { animes } from "../data/animes";


const filterOptions = [
  { id: 'all', label: 'Todos' },
  { id: 'attending', label: 'Concluido' },
  { id: 'completed', label: 'Assistindo' },
];

function ListPage() {
  const [statusFilter, setStatusFilter] = useState('all');
    const [search, setSearch] = useState('');

    const visibleAnimes = animes.filter((anime) => {
      const searchTerm = search.trim().toLowerCase();

      const matchesSearch = anime.title.toLowerCase().includes(searchTerm);
      if (statusFilter === 'completed')
        return !anime.isCompleted && matchesSearch;
      if (statusFilter === 'attending')
        return anime.isCompleted && matchesSearch;

      return matchesSearch;
    });

  return (
      <Panel
        id="list"
        title="Meus animes"
        className="md:col-span-2 xl:min-h-80"
      >
        {/*Buscar pelo nome  highlight*/}
        <label htmlFor="game-search" className="text-sm text-muted">
          Buscar pelo nome
        </label>
        <input
          id="game-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Ex.: piece"
          className="mt-1 mb-3 w-full rounded-lg border border-border bg-background
    px-3 py-2 focus:border-primary focus:outline-none"
        />
        <p className="mb-2 text-sm text-muted" aria-live="polite">
          {visibleAnimes.length} de {animes.length} animes encontrados
        </p>
        {/*Filtro de opções*/}
        <div className="mb-4 flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setStatusFilter(option.id)}
              aria-pressed={statusFilter === option.id}
              className={
                statusFilter === option.id
                  ? 'rounded-full border border-primary bg-primary px-3 py-1 text-sm font-bold text-background'
                  : 'rounded-full border border-border px-3 py-1 text-sm font-bold text-muted hover:border-primary'
              }
            >
              {option.label}
            </button>
          ))}
        </div>
        {/*Lista de animes com scroll horizontal*/}
        <div className="md:col-span-2 xl:min-h-80 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory custom-scrollbar">
          {visibleAnimes.map((anime) => (
            <article key={anime.id} className="w-36 shrink-0 snap-start">
              <img
                src={anime.cover}
                alt={anime.title}
                className="aspect-[2/3] w-full rounded-lg object-cover"
              />

              <h3 className="mt-2 font-bold">{anime.title}</h3>

              <p className="text-sm text-muted">Temporadas {anime.temp}</p>

              <p className="text-sm text-muted">Episódios {anime.ep}</p>
              <StatusBadge
                label={anime.isCompleted ? 'Concluído' : 'Assistindo'}
                isActive={!anime.isCompleted}
              />
            </article>
          ))}
        </div>
      </Panel>
  );
}

export default ListPage;
