import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import Panel from './components/Panel.jsx';

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
        <Panel id="summary" title="Resumo" className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <SummaryCard title="Favoritados" value={42} icon="💛" isHighlighted />
            <SummaryCard title="Em andamento" value={318} icon="⏱️" />
            <SummaryCard title="Assistidos" value={17} icon="🏆" />
            <SummaryCard title="Lista" value="8,6" />
          </div>
        </Panel>
        <Panel id="list" title="Lista" className="xl:min-h-80">
          <p className="text-muted">Em construção.</p>
        </Panel>
        <Panel id="chart" title="Grafico" className="xl:min-h-80">
          <p className="text-muted">Em construção.</p>
        </Panel>
      </main>
      <Footer />
    </div>
  );
}

export default App;
