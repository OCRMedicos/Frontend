
import { Container, Row, Col, Nav, Navbar, Button, Card } from 'react-bootstrap';
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {

    return (
        <>
            <footer bg="light" className="footer-section py-5 bg-light text-dark">
                <Container>
                    <Row className="mb-4">
                        <Col md={4} className="footer-col">
                            <h5 className="footer-title">Sobre Nós</h5>
                            <p className="footer-text">
                                Lideramos a inovação em nano tintas inteligentes, transformando indústrias com tecnologia de ponta.
                            </p>
                        </Col>
                        <Col md={4} className="footer-col">
                            <h5 className="footer-title">Contato</h5>
                            <p className="footer-text">
                                Email: contato@nanoink.com<br />
                                Telefone: +55 (85) 1234-5678<br />
                                Endereço: Fortalea, Ce
                            </p>
                        </Col>
                        <Col md={4} className="footer-col">
                            <h5 className="footer-title">Redes Sociais</h5>
                            <div className="social-icons">
                                  <a href="#" className="social-link"><FaLinkedin size={24} /></a>
                                <a href="#" className="social-link"><FaTwitter size={24} /></a>
                                <a href="#" className="social-link"><FaInstagram size={24} /></a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center border-top pt-4">
                            <p className="footer-copyright">
                                &copy; 2025 CE Nano Ink Technology. Todos os direitos reservados.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>

        </>
    )
}

export default Footer