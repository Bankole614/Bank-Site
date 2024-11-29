import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import Footer from "../Footer"

const Layout = () => {
  return (
    <>
      <div className="bg-[#1A1A1A]">
        <Navbar />
        <Outlet />
      </div>
      <div className="bg-[#202020]">
        <Footer />
      </div>
      
    </>
    
  )
}

export default Layout