import { Navbar , Container, Button } from "react-bootstrap";
import ModalLogout from "../Modals/logout";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Header() {


const [showLogoutModal, setShowLogoutModal] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(true);
 
    const handleLogout = () => setShowLogoutModal(true);
    const confirmLogout = () => {
        setShowLogoutModal(false);
        setIsLoggedIn(false);
    };
 if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

    return (
        <>
            <Navbar bg="light" className="dashboard-header">
                <Container>
                    <Navbar.Brand>Admin Dashboard</Navbar.Brand>
                    <Button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </Button>
                </Container>
            </Navbar>

            <ModalLogout setShowLogoutModal={setShowLogoutModal} showLogoutModal={showLogoutModal} confirmLogout={confirmLogout}/>
        </>
    )
}

export default Header