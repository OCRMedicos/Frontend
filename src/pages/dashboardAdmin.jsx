import React, { useState } from "react";
import { Container, Table, Button, Modal, Form, Navbar } from "react-bootstrap";
import { FaEdit, FaTrash, FaEnvelope } from "react-icons/fa";
import Login from "./Longin";
import "./styles/dashboardAdmin.css";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Maycon", email: "exemplo@exemplo.com", password: "123456", phone: "99999-9999", address: "Rua A, 123", date: "16 Oct 2025", status: "Ativo" },
    { id: 2, name: "Teste 1", email: "exemplo@exemplo.com", password: "123456", phone: "", address: "", date: "14 Oct 2025", status: "Ativo" },
    { id: 3, name: "Teste 2", email: "exemplo@exemplo.com", password: "123456", phone: "", address: "", date: "13 Oct 2025", status: "Inativo" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", password: "", phone: "", address: "", status: "Ativo" });

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleOpenModal = (user = null) => {
    if (user) {
      setEditingUser(user);
      setForm(user);
    } else {
      setEditingUser(null);
      setForm({ name: "", email: "", password: "", phone: "", address: "", status: "Ativo" });
    }
    setShowModal(true);
  };

  const handleSave = () => {
    if (!form.name || !form.email || !form.password) return alert("Preencha todos os campos obrigatórios!");
    if (editingUser) {
      setUsers(users.map((u) => (u.id === form.id ? form : u)));
    } else {
      const newUser = { ...form, id: Date.now(), date: new Date().toLocaleDateString("en-GB") };
      setUsers([...users, newUser]);
    }
    setShowModal(false);
    setEditingUser(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Deseja realmente excluir este cliente?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Ativo": return "active";
      case "Inativo": return "inactive";
      case "Pendente": return "pending";
      case "Suspendido": return "pending";
      default: return "";
    }
  };

  const handleLogout = () => setShowLogoutModal(true);
  const confirmLogout = () => {
    setShowLogoutModal(false);
    setIsLoggedIn(false);
  };

  // Enviar credenciais por email
  const handleSendCredentials = (user) => {
    // Simular de envio
    alert(`Credenciais enviadas para ${user.email}!\nEmail: ${user.email}\nSenha: ${user.password}`);
    
  };

  if (!isLoggedIn) return <Login onLogin={() => setIsLoggedIn(true)} />;

  return (
    <div className="dashboard-container">
      <Navbar bg="light" className="dashboard-header">
        <Container>
          <Navbar.Brand>Admin Dashboard</Navbar.Brand>
          <Button className="logout-btn" onClick={handleLogout}>
            Logout
          </Button>
        </Container>
      </Navbar>

      <div className="dashboard-content">
        <Container className="dashboard-card">
          <div className="dashboard-title d-flex justify-content-between align-items-center mb-3">
            <h3>Clientes</h3>
            <Button className="new-user-btn" onClick={() => handleOpenModal()}>
              + Novo Cliente
            </Button>
          </div>

          <Table className="user-table align-middle">
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Endereço</th>
                <th>Status</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.phone || "—"}</td>
                  <td>{u.address || "—"}</td>
                  <td>
                    <span className={`status ${getStatusClass(u.status)}`}>{u.status}</span>
                  </td>
                  <td className="actions">
                    <Button className="edit-btn" onClick={() => handleOpenModal(u)}><FaEdit /></Button>
                    <Button className="delete-btn" onClick={() => handleDelete(u.id)}><FaTrash /></Button>
                    <Button className="send-btn" onClick={() => handleSendCredentials(u)}><FaEnvelope /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <footer className="dashboard-footer">© Power Rangers</footer>
        </Container>
      </div>

      {/* Modal de cliente */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editingUser ? "Editar Cliente" : "Novo Cliente"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nome *</Form.Label>
              <Form.Control value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>E-mail *</Form.Label>
              <Form.Control type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Senha *</Form.Label>
              <Form.Control type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefone</Form.Label>
              <Form.Control value={form.phone || ""} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Endereço</Form.Label>
              <Form.Control value={form.address || ""} onChange={(e) => setForm({ ...form, address: e.target.value })} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                <option>Ativo</option>
                <option>Inativo</option>
                <option>Pendente</option>

              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancelar</Button>
          <Button variant="primary" onClick={handleSave}>Salvar</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de Logout */}
      <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Logout realizado com sucesso! Você será redirecionado para a tela de login.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={confirmLogout}>Ok</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
