// src/App.jsx

import RoutesNav from "./routes/routes"
import { HashRouter } from "react-router-dom"

function App() {
  return (
    <HashRouter>
      {}
      <main className="content">
        <RoutesNav />
      </main>
    </HashRouter>
  )
}

export default App