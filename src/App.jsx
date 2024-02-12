import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import LayoutHome from './layouts/LayoutHome'
import LandigPage from './pages/landing-page/LandingPage'
import Navegador from './shared/Navegador'
import LayoutNav from './layouts/LayoutNav'
import NuevaEncuesta from './pages/NuevaEncuesta/NuevaEncuesta'
import Perfil from './pages/perfil/Perfil'
import MuestraEncuesta from './pages/muestraencuesta/MuestraEncuesta'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<LayoutHome/>}>
          
          <Route path='/' element={<NuevaEncuesta/>}/>
          <Route path='/pages/MuestraEncuesta' element={<MuestraEncuesta/>}/>
          <Route path='/pages/Login' element={<Login/>}/>
          <Route path='/pages/Register'  element={<Register/>}/>
          <Route path='/*' element={<p>404</p>}/>
        </Route>
        <Route element={<LayoutNav/>}>
          <Route path='/pages/Perfil' element={<Perfil/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
