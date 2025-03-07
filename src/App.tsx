import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Home } from './pages/home'
import { Login } from './pages/login'
import { Feed } from "./pages/feed";
import { Cadastro } from "./pages/cadastro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cadastrar" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}
// https://github.com/digitalinnovationone/trilha-react-desafio-4
export default App;
