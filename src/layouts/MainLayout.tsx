import { Outlet, useLocation } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <Navbar />
      <Outlet />
      {isHome && <Footer />}
    </>
  )
}
