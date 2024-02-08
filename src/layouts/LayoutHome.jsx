import { Outlet } from 'react-router-dom'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

const LayoutHome = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>  
    </>
  )
}

export default LayoutHome
