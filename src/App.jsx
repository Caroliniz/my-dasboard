import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';
import ListPage from './pages/ListPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage.jsx';

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
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/lista" element={<ListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
