import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import BgImage from "../assets/Img/signin.svg";


function Login() {
  return (
    <main>
      <section className="pt-5">
        <Container
          className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-center bg-cover "
          style={{
            backgroundImage: `url(${BgImage})`,
            backgroundRepeat: "no-repeat",
          }}
        >

          <Row className="" >
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Acesse nossa plataforma</h3>
                </div>
                <Form className="p-5 m-5 ">
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Seu e-mail</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="email" placeholder="exemplo@empresa.com" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Sua senha</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control required type="password" placeholder="Senha" />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check type="checkbox">
                        <FormCheck.Input id="defaultCheck5" className="me-2" />
                        <FormCheck.Label htmlFor="defaultCheck5" className="mb-0">Lembrar-me</FormCheck.Label>
                      </Form.Check>
                      <Card.Link className="small text-end">Esqueceu a senha?</Card.Link>
                    </div>
                  </Form.Group>
                
                  <Link
                    to="/admin"
                    className="btn btn-primary w-100"
                  >
                    Entrar
                  </Link>

                </Form>


              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>

  );
};
export default Login