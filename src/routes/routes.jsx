
import { Routes, Route } from "react-router-dom"
import Login from "../pages/Longin"
import UserPage from '../pages/UserPage';
import DashboardAdmin from "../pages/dashboardAdmin"


function RoutesNav() {

    return (

        <>
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/usuario" element={<UserPage />} />

                <Route path="/admin" element={<DashboardAdmin />} />

            </Routes>

        </>

    )
}
export default RoutesNav