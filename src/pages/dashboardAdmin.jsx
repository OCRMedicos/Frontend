import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { FaEdit, FaTrash, FaEnvelope } from "react-icons/fa";
import UserModal from "../components/Modals/UserModal.jsx";
import usersData from "../data/index.jsx";


function App() {
  const [users, setUsers] = useState(usersData);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    status: "Ativo",
  });

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
      case "Ativo":
        return "active";
      case "Inativo":
        return "inactive";
      case "Pendente":
      case "Suspendido":
        return "pending";
      default:
        return "";
    }
  };

  const handleSendCredentials = (user) => {
    alert(`Credenciais enviadas para ${user.email}!\nEmail: ${user.email}\nSenha: ${user.password}`);
  };

  return (
    <div className="dashboard-container">
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
                    <Button className="edit-btn" onClick={() => handleOpenModal(u)}>
                      <FaEdit />
                    </Button>
                    <Button className="delete-btn" onClick={() => handleDelete(u.id)}>
                      <FaTrash />
                    </Button>
                    <Button className="send-btn" onClick={() => handleSendCredentials(u)}>
                      <FaEnvelope />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <footer className="dashboard-footer">© Power Rangers</footer>
        </Container>
      </div>

      {/* Modal separado */}
      <UserModal
        show={showModal}
        onHide={() => setShowModal(false)}
        form={form}
        setForm={setForm}
        onSave={handleSave}
        editingUser={editingUser}
      />
    </div>
  );
}

export default App;
