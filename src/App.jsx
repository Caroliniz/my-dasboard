import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 p-4">
        <p>Painel em construção</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
