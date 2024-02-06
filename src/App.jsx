import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Saludo from './Saludo'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './pages/Header'
import Footer from './pages/Footer'
import LayoutHome from './layouts/LayoutHome'
import LandigPage from './pages/landing-page/LandingPage'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutHome/>}>
          <Route path='/' element={<LandigPage/>}/>
          <Route path='/pages/Login' element={<Login/>}/>
          <Route path='/pages/Register'  element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
