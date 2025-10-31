import { Container, Row, Col,} from 'react-bootstrap';

const AboutSection = () => (
  <section className="about-section py-3">
    <Container>
      <Row className="align-items-center">
        <Col lg={6} className="about-image">
          <div className="about-visual">
            <div className="molecule-icon"></div>
          </div>
        </Col>
        <Col lg={6} className="about-content">
          <h2 className="section-title">O que são Nano Tintas?</h2>
          <p className="section-text">
            As nano tintas são uma tecnologia revolucionária que combina partículas em escala nanométrica com polímeros avançados. 
            Elas oferecem propriedades únicas como condutividade, flexibilidade e durabilidade superiores, abrindo possibilidades 
            ilimitadas para aplicações em eletrônicos, medicina, energia e muito mais.
          </p>
          <p className="section-text">
            Nossa empresa lidera a inovação neste campo, desenvolvendo soluções personalizadas para os desafios mais complexos da indústria.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default AboutSection