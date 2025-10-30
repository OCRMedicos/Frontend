
import { Routes, Route } from "react-router-dom"
import Login from "../pages/Longin"
import UserPage from '../pages/UserPage';
import DashboardAdmin from "../pages/dashboardAdmin"
import Layout from "../components/layout";


function RoutesNav() {

    return (

        <>
            <Routes>

                <Route path="/" element={<Login />} />

                <Route element={<Layout />}>
                    <Route path="/usuario" element={<UserPage />} />
                    <Route path="/admin" element={<DashboardAdmin />} />
                </Route>
            </Routes>

        </>

    )
}
export default RoutesNav