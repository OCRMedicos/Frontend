import { Container, Row, Col, Button} from 'react-bootstrap';
const CaseStudySection = () => (
  <section id="cases" className="case-study-section py-5">
    <Container>
      <Row className="align-items-center">
        <Col lg={6} className="case-image">
          <div className="case-visual">
            <div className="flex-display-visual"></div>
          </div>
        </Col>
        <Col lg={6} className="case-content">
          <h2 className="section-title">Case de Sucesso</h2>
          <h3 className="case-subtitle">Display Flexível de Próxima Geração</h3>
          <p className="section-text">
            Desenvolvemos uma nano tinta condutiva que permitiu a criação de displays flexíveis com resolução 4K. 
            O projeto resultou em um aumento de 40% na eficiência energética e uma redução de 30% nos custos de produção.
          </p>
          <Button className="btn-custom btn-secondary-custom mt-4">
            Leia Mais
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default CaseStudySection