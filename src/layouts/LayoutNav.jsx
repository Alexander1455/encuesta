import { Outlet } from 'react-router-dom'
import Navegador from '../shared/Navegador'

const LayoutNav = () => {
  return (
    <div>
        <Navegador/>
        <Outlet/>
    </div>
  )
}

export default LayoutNav
