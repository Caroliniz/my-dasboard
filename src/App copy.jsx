import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import Panel from './components/Panel.jsx';
import InfoRow from './components/InfoRow.jsx';
import StatusBadge from './components/StatusBadge.jsx';
import DetailsToggle from './components/DetailsToggle.jsx';
import { animes } from './data/animes.js';
import { StrictMode, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

const filterOptions = [
  { id: 'all', label: 'Todos' },
  { id: 'attending', label: 'Concluido' },
  { id: 'completed', label: 'Assistindo' },
];

function App() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');

  const searchTerm = search.trim().toLowerCase();

  {/*Sumario*/}
  const totalHours = animes.reduce((total, game) => total + game.hours, 0);
  const completedCount = animes.filter((game) => game.isCompleted).length;

  const summaryCards = [
    { id: 'games', title: 'Favoritados', value: animes.length, icon: '💛' },
    { id: 'hours', title: 'Li', value: totalHours, icon: '⏱️' },
    {
      id: 'completed',
      title: 'Concluidos',
      value: completedCount,
      icon: '🏆',
      isHighlighted: true,
    },
    {
      id: 'playing',
      title: 'Assistindo',
      value: animes.length - completedCount,
      icon: '⏱️',
    },
  ];

  const visibleAnimes = animes.filter((anime) => {
    const matchesSearch = anime.title.toLowerCase().includes(searchTerm);
    if (statusFilter === 'completed') return !anime.isCompleted && matchesSearch;
    if (statusFilter === 'attending') return anime.isCompleted && matchesSearch;

    return matchesSearch;
  });

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main
        className="grid flex-1 grid-cols-1 content-start gap-4 p-4
  md:grid-cols-2 md:gap-6 md:p-6
  xl:grid-cols-[15rem_minmax(0,1fr)_minmax(0,1fr)] xl:p-8"
      >
        <Menu />
        {/*SUMARIO */}
        <Panel id="summary" title="Resumo" className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
            {summaryCards.map((card) => (
              <SummaryCard
                key={card.id}
                title={card.title}
                value={card.value}
                icon={card.icon}
                isHighlighted={card.isCompleted}
              />
            ))}
          </div>
        </Panel>

        {/*LISTA DE ANIMES */}
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

        {/*ASSISTINDO AGORA */}
        <Panel id="highlight" title="Assistindo agora">
          <div className="flex flex-col gap-4 md:flex-row">
            {/* IMAGEM */}
            <img
              src="/List/gachiakuta.jpg"
              alt="Pôster do anime Gachiakuta"
              className="w-32 rounded-lg object-cover"
            />

            {/* INFORMAÇÕES AO LADO DA IMAGEM */}
            <div className="min-w-0 flex-1">
              <h3 className="font-heading text-xl font-bold">Gachiakuta</h3>

              <div className="flex flex-wrap items-center gap-2">
                <StatusBadge label="Assistindo" isActive />
                <StatusBadge label="★★★⯪☆" />
              </div>

              <DetailsToggle>
                <p className="mt-4 text-muted">
                  Em uma cidade flutuante onde os ricos descartam seu lixo (e
                  pessoas), Rudo é acusado falsamente de homicídio e jogado no
                  Abismo, um lugar infernal onde vivem monstros de lixo
                  mutantes. Para sobreviver, ele precisa conquistar um novo
                  poder e se unir aos errantes Zeladores. Rudo não quer apenas
                  lutar com os monstros, mas também contra os corruptos que o
                  jogaram no Inferno.
                </p>
              </DetailsToggle>
            </div>
          </div>
          <div className="mt-4 grid gap-x-6 md:grid-cols-2">
            <InfoRow label="Plataforma" value="Crunchroll" />
            <InfoRow label="Classificação" value="16" />
            <InfoRow label="Duração" value="T1 E24" />
            <InfoRow label="Progresso" value="E12" />
          </div>
        </Panel>

        {/*GRAFICOS */}
        <Panel id="chart" title="Grafico" className="xl:min-h-80">
          <p className="text-muted">Em construção.</p>
        </Panel>
      </main>
      <Footer />
    </div>
  );
}

export default App;
