// src/App.jsx

import RoutesNav from "./routes/routes"
import { HashRouter } from "react-router-dom"

function App() {
  return (
    <HashRouter>
      {/* O Volt espera que o conteúdo esteja dentro de uma tag <main> com a classe "content" */}
      <main className="content">
        <RoutesNav />
      </main>
    </HashRouter>
  )
}

export default App