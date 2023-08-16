import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SideMenu from '../components/SideMenu'
import Home from '../pages/Home/Home'
import Convocatoria from '../pages/Convocatoria/Convocatoria'

const AppRouter = () => {

  const [menu, setMenu] = useState(false)


  return (
    <>
      <BrowserRouter>
        <>
          <Navbar
            menu={menu}
            setMenu={setMenu}
          />
          <SideMenu
            menu={menu}
            setMenu={setMenu}
          />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/convocatoria' element={<Convocatoria />} />

          </Routes>
          <Footer />

        </>

      </BrowserRouter>
    </>
  )
}

export default AppRouter