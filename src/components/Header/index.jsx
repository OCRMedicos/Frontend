import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="dashboard-header py-4">
        <Container>
          <Navbar.Brand href="#home" className="brand-logo">
            <span className="logo-text fw-bold text-dark">CE NANO INK</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#produtos" className="nav-link-custom">
                Produtos
              </Nav.Link>
              <Nav.Link href="#aplicacoes" className="nav-link-custom">
                Aplicações
              </Nav.Link>
              <Nav.Link href="#cases" className="nav-link-custom">
                Cases de Sucesso
              </Nav.Link>
              <Nav.Link href="#contato" className="nav-link-custom">
                Contato
              </Nav.Link>
              {/* Botão de Login */}
              <div className="d-flex mt-2 mt-lg-0 ms-lg-3">
                <Link className="btn btn-primary" to="/login">
                  Login
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
