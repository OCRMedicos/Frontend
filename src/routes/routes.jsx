
import { Routes, Route } from "react-router-dom"
import Login from "../pages/Longin"
import UserPage from '../pages/UserPage';
import DashboardAdmin from "../pages/dashboardAdmin"
import Layout from "../components/layout";
import Home from "../pages/Home";

function RoutesNav() {

    return (

        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<Layout />}>
                 <Route path="/" element={<Home/>} />
                    <Route path="/usuario" element={<UserPage />} />
                    <Route path="/admin" element={<DashboardAdmin />} />
                </Route>
            </Routes>

        </>

    )
}
export default RoutesNav