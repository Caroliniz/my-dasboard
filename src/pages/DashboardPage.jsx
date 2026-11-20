import DetailsToggle from "../components/DetailsToggle";
import InfoRow from "../components/InfoRow";
import Panel from "../components/Panel";
import StatusBadge from "../components/StatusBadge";
import SummaryCard from "../components/SummaryCard";
import { useAnime } from '../context/AnimeContext.js';
import { initialAnime } from '../data/animes';
import { Link } from "react-router-dom";

function DashboardPage() {
  const { animes } = useAnime();

  {/*Sumario*/}
  const totalHours = initialAnime.reduce(
    (total, game) => total + game.hours,
    0,
  );
  const completedCount = initialAnime.filter((anime) => anime.isCompleted).length;

  const summaryCards = [
    { id: 'animes', title: 'Favoritados', value: initialAnime.length, icon: '💛' },
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

    const firstAnime = initialAnime.slice(0, 3);
    return (
      <>
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
          <div className="md:col-span-2 xl:min-h-80 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory custom-scrollbar">
            {firstAnime.map((anime) => (
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

          <Link
            to="/lista"
            className="mt-4 inline-block font-bold text-primary …"
          >
            Ver todos os {animes.length} animes →
          </Link>
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
      </>
    );
  }

export default DashboardPage;
