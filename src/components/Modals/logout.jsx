import { Button, Modal} from "react-bootstrap";
function ModalLogout({setShowLogoutModal, showLogoutModal, confirmLogout}){
    return(
        <>
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
        </>
    )
}

export default ModalLogout