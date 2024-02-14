import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import LayoutHome from "./layouts/LayoutHome";
import LandigPage from "./pages/landing-page/LandingPage";
import LayoutNav from "./layouts/LayoutNav";
import NuevaEncuesta from "./pages/NuevaEncuesta/NuevaEncuesta";
import Perfil from "./pages/perfil/Perfil";
import MuestraEncuesta from "./pages/muestraencuesta/MuestraEncuesta";
import LayoutScurity from "./layouts/LayoutScurity";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutHome />}>
          <Route path="/" element={<LandigPage />} />
          <Route path="/pages/Login" element={<Login />} />
          <Route path="/pages/Register" element={<Register />} />
          <Route path="/*" element={<p>404</p>} />

          <Route element={<LayoutScurity />}>
            <Route element={<LayoutNav />}>
              <Route path="/pages/Perfil" element={<Perfil />} />
              <Route path="/pages/MuestraEncuesta" element={<MuestraEncuesta />}/>
            </Route>
            <Route path="/pages/MuestraEncuesta" element={<MuestraEncuesta />}/>
            <Route path="/crearEncuesta" element={<NuevaEncuesta />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
