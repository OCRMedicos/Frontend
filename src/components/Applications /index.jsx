import { Container, Row, Col, Card} from 'react-bootstrap';
const ApplicationsSection = () => {
  const applications = [
    { id: 1, title: 'Eletrônicos Flexíveis', icon: '📱' },
    { id: 2, title: 'Medicina', icon: '⚕️' },
    { id: 3, title: 'Energia Solar', icon: '☀️' },
    { id: 4, title: 'Têxteis Inteligentes', icon: '👕' },
    { id: 5, title: 'Displays Avançados', icon: '🖥️' },
    { id: 6, title: 'Sensores IoT', icon: '📡' },
  ];

  return (
    <section id="aplicacoes" className="applications-section py-5">
      <Container>
        <h2 className="section-title text-center mb-5">Aplicações</h2>
        <Row className="g-4">
          {applications.map((app) => (
            <Col key={app.id} md={6} lg={4}>
              <Card className="app-card">
                <Card.Body className="text-center">
                  <div className="app-icon">{app.icon}</div>
                  <Card.Title className="app-title">{app.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ApplicationsSection