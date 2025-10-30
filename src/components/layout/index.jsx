import Footer from "../footer";
import Header from "../Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    // 1. Container principal com flexbox vertical
    <div className="d-flex flex-column min-vh-100">
      <Header />

      {/* 2. Conteúdo principal que "cresce" */}
      <main className="flex-grow-1">
        <Outlet /> {/* Onde as rotas filhas serão renderizadas */}
      </main>
      
      <Footer />
    </div>
  );
}

export default Layout;