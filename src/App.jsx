import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';
import SummaryCard from './components/SummaryCard.jsx';

const areaClass =
  'min-h-32 rounded-xl border-2 border-dashed border-border bg-surface p-4 text-muted';
function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main
        className="grid flex-1 grid-cols-1 content-start gap-4 p-4
    md:grid-cols-2 md:gap-6 md:p-6
    xl:grid-cols-[15rem_1fr_1fr] xl:p-8"
      >
        <Menu />
        <section id="summary" className={`${areaClass} md:col-span-2`}>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <SummaryCard title="Jogos" value={42} icon="🎮" />
            <SummaryCard title="Horas jogadas" value={318} icon="⏱️" />
            <SummaryCard title="Zerados" value={17} icon="🏆" isHighlighted />
            <SummaryCard title="Nota média" value="8,6" />
          </div>
        </section>
        <section id="list" className={`${areaClass} xl:min-h-80`}>
          Lista
        </section>
        <section id="chart" className={`${areaClass} xl:min-h-80`}>
          Gráfico
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
