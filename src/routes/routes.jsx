
import { Routes, Route } from "react-router-dom"
import Dashboard from "../pages/dashboard"
import Login from "../pages/Longin"
import DashboardAdmin from "../pages/dashboardAdmin"

function RoutesNav() {

    return (

        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/admin" element={<DashboardAdmin />} />
            </Routes>

        </>

    )
}
export default RoutesNav