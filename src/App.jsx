import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';

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
          Resumo (cards)
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
