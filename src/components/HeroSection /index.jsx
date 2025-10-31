
import { Container, Row, Col,Button,} from 'react-bootstrap';
const HeroSection = () => (
  <section className="hero-section">
    <Container>
      <Row className="align-items-center min-vh-100">
        <Col lg={6} className="hero-content">
          <h1 className="hero-title">
            Revolucionando a indústria com Nano Tintas Inteligentes
          </h1>
          <Button className="btn-custom btn-primary-custom mt-4">
            Ver Produtos
          </Button>
        </Col>
        <Col lg={6} className="hero-image">
          <div className="hero-visual">
            {/* Placeholder para imagem */}
            <div className="nano-particle-visual"></div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default HeroSection