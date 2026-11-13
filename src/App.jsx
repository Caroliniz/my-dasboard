import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import Panel from './components/Panel.jsx';
import InfoRow from './components/InfoRow.jsx';
import StatusBadge from './components/StatusBadge.jsx';
import DetailsToggle from './components/DetailsToggle.jsx';

const summaryCards = [
  { id: 'favoritados', title: 'Favoritados', value: 14, icon: '💛' },
  { id: 'Assistindo', title: 'Assistindo', value: 8, icon: '⏱️' },
  { id: 'assistidos', title: 'Assistidos', value: 27, icon: '🏆' },
  { id: 'lista', title: 'Lista', value: '53' },
];

const animes = [
  { id: 'gachiakuta', title: 'Gachiakuta', temp: 13, ep: 3, isCompleted: false, cover: '/List/gachiakuta.jpg' },
  { id: 'abotecaria', title: 'A Botecaria', temp: 5, ep: 3, isCompleted: true, cover: '/List/Abotecaria.webp' },
  { id: 'bocchi', title: 'Bocchi the Rock', temp: 8, ep: 3, isCompleted: true, cover: '/List/bocchi.jpg' },
  { id: 'attack-on-titan', title: 'Attack on Titan', temp: 15, ep: 3, isCompleted: false, cover: '/List/ATT.jpg' },
  { id: 'bungo-stray-dogs', title: 'Bungo Stray Dogs', temp: 12, ep: 3, isCompleted: true, cover: '/List/strayDogs.jpg' },
  { id: 'haikyuu', title: 'Haikyuu', temp: 10, ep: 3, isCompleted: true, cover: '/List/haikyu.jpg' },
  { id: 'one-piece', title: 'One Piece', temp: 20, ep: 3, isCompleted: false, cover: '/List/onePiece.jpg' },
];

function App() {
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
                isHighlighted={card.isHighlighted}
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
          <div className="md:col-span-2 xl:min-h-80 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {animes.map((anime) => (
              <article key={anime.id} className="w-36 shrink-0 snap-start">
                <img
                  src={anime.cover}
                  alt={anime.title}
                  className="aspect-[2/3] w-full rounded-lg object-cover"
                />

                <h3 className="mt-2 font-bold">{anime.title}</h3>

                <p className="text-sm text-muted">Temporadas {anime.temp}</p>

                <p className="text-sm text-muted">Episódios {anime.ep}</p>
              </article>
            ))}
          </div>
        </Panel>

        {/*ASSISTINDO AGORA */}
        <Panel id="highlight" title="Assistindo agora">
          <div>
            <img
              src="/List/gachiakuta.jpg"
              alt="Pôster do anime Gachiakuta"
              className="w-32 rounded-lg object-cover"
            />
            <h3 className="font-heading text-xl font-bold">Gachiakuta</h3>
            <StatusBadge label="Assistindo" isActive />
            <StatusBadge label="♡" />
          </div>
          <DetailsToggle>
            <p className="mt-1 text-muted">
              Em uma cidade flutuante onde os ricos descartam seu lixo (e
              pessoas), Rudo é acusado falsamente de homicídio e jogado no
              Abismo, um lugar infernal onde vivem monstros de lixo mutantes.
              Para sobreviver, ele precisa conquistar um novo poder e se unir
              aos errantes Zeladores. Rudo não quer apenas lutar com os
              monstros, mas também contra os corruptos que o jogaram no Inferno.
            </p>
          </DetailsToggle>
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
