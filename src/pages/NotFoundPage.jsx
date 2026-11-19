import { Link } from "react-router-dom";
import Panel from "../components/Panel";

function NotFoundPage() {
  return (
    <Panel
      id="not-found"
      title="Página não encontrada"
      className="md:col-span-2 xl:row-span-3"
    >
      <p className="text-muted">Esse endereço não existe no painel.</p>
      <Link to="/" className="…">
        ← Voltar ao painel
      </Link>
    </Panel>
  );
}

export default NotFoundPage;
