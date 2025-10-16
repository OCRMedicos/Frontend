// src/pages/UserPage.jsx

// Importando componentes do react-bootstrap (note que não precisamos mais do Container aqui)
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';

function UserPage() {

  // Dados de exemplo (mock)
  const userData = {
    nome: 'Anderson',
    sobrenome: 'Guimarães',
    email: 'anderson.g@email.com',
    aniversario: '1990-06-15',
    cpf: '123.456.789-00',
    nomeMae: 'Maria da Silva',
    endereco: {
      rua: 'Rua das Flores, 123',
      cidade: 'São Paulo',
      estado: 'SP',
      cep: '01234-567'
    },
    profilePic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  };

  return (
    // Usamos um Fragmento <> pois o container principal agora está no App.jsx
    <>
      {/* A classe py-4 foi movida para a Row para manter o espaçamento vertical */}
      <Row className="py-4">

        {/* --- Coluna da Esquerda: Foto de Perfil --- */}
        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <Card className="shadow-sm">
                <Card.Body className="text-center">
                  <Image src={userData.profilePic} roundedCircle width={120} height={120} className="mb-3" />
                  <h5 className="mb-1">{`${userData.nome} ${userData.sobrenome}`}</h5>
                  <div>{userData.endereco.cidade}</div>
                  
                  <div className="d-grid mt-3">
                    <Button variant="primary">Mudar Foto</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* --- Coluna da Direita: Formulário de Dados --- */}
        <Col xs={12} xl={8}>
          <Card className="shadow-sm">
            <Card.Header>
              <h5 className="mb-0">Configurações da Conta</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                {/* Linha: Nome e Sobrenome */}
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group id="firstName">
                      <Form.Label>Primeiro Nome</Form.Label>
                      <Form.Control type="text" placeholder="Seu nome" defaultValue={userData.nome} required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group id="lastName">
                      <Form.Label>Sobrenome</Form.Label>
                      <Form.Control type="text" placeholder="Seu sobrenome" defaultValue={userData.sobrenome} required />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Linha: Aniversário e Email */}
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group id="birthday">
                      <Form.Label>Aniversário</Form.Label>
                      <Form.Control type="date" defaultValue={userData.aniversario} />
                    </Form.Group>
                  </Col>
                   <Col md={6}>
                    <Form.Group id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="nome@exemplo.com" defaultValue={userData.email} required />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Linha: CPF e Nome da Mãe */}
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group id="cpf">
                      <Form.Label>CPF</Form.Label>
                      <Form.Control type="text" placeholder="000.000.000-00" defaultValue={userData.cpf} />
                    </Form.Group>
                  </Col>
                   <Col md={6}>
                    <Form.Group id="motherName">
                      <Form.Label>Nome da Mãe</Form.Label>
                      <Form.Control type="text" placeholder="Nome completo da sua mãe" defaultValue={userData.nomeMae} />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Linha: Endereço */}
                <h5 className="mt-4">Endereço</h5>
                <Row className="mb-3">
                  <Col sm={12}>
                    <Form.Group id="address">
                      <Form.Label>Rua</Form.Label>
                      <Form.Control type="text" placeholder="Sua rua e número" defaultValue={userData.endereco.rua} required />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <Form.Group id="city">
                      <Form.Label>Cidade</Form.Label>
                      <Form.Control type="text" placeholder="Sua cidade" defaultValue={userData.endereco.cidade} required />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group id="state">
                      <Form.Label>Estado</Form.Label>
                      <Form.Control type="text" placeholder="UF" defaultValue={userData.endereco.estado} required />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group id="cep">
                      <Form.Label>CEP</Form.Label>
                      <Form.Control type="text" placeholder="00000-000" defaultValue={userData.endereco.cep} required />
                    </Form.Group>
                  </Col>
                </Row>
                
                <div className="mt-3">
                  <Button variant="primary" type="submit">Salvar Alterações</Button>
                </div>

              </Form>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </>
  );
}

export default UserPage;