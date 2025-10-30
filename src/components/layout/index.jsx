import Footer from "../footer";
import Header from "../Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet /> {/* Onde as rotas filhas serão renderizadas */}
      <Footer />
    </>
  );
}

export default Layout;
