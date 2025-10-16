
import { Routes, Route } from "react-router-dom"
import Dashboard from "../pages/dashboard"
import Login from "../pages/Longin"

function RoutesNav() {

    return (

        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>

        </>

    )
}
export default RoutesNav