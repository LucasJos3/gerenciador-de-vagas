import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./componentes/header";
import Footer from "./componentes/footer";
import Home from "./pages/Home";
import CadastroEvento from "./pages/CadastroEvento";
import ListaEventos from "./pages/listaEventos";
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Cadastro" element={<CadastroEvento />} />
          <Route path="/lista" element={<ListaEventos />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
