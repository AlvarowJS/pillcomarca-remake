import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SideMenu from '../components/SideMenu'
import Home from '../pages/Home/Home'
import Convocatoria from '../pages/Convocatoria/Convocatoria'
import DocumentosGestion from '../pages/Gestion/DocumentosGestion'
import Normativa from '../pages/Normativa/Normativa'
import Servicio from '../pages/Servicios/Servicio'
import MisionVision from '../pages/MisionVision/MisionVision'
import Fut from '../pages/Fut/Fut'
import Directorio from '../pages/Directorio/Directorio'
import Historia from '../pages/Historia/Historia'
import Organigrama from '../pages/Organigrama/Organigrama'
import Seguridad from '../pages/Seguridad/Seguridad'
import MesaPartes from '../pages/MesaPartes/MesaPartes'
import Noticias from '../pages/Noticias/Noticias'
import NoticiaNota from '../pages/Noticias/NoticiaNota'
import Visitas from '../pages/Visitas/Visitas'

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
            <Route path='/documentos' element={<DocumentosGestion />} />
            <Route path='/seguridad-ciudadana' element={<Seguridad />} />
            <Route path='/normativa' element={<Normativa />} />
            <Route path='/servicios' element={<Servicio />} />
            <Route path='/mision-vision' element={<MisionVision />} />
            <Route path='/fut' element={<Fut />} />
            <Route path='/directorio' element={<Directorio />} />
            <Route path='/historia' element={<Historia />} />
            <Route path='/noticias' element={<Noticias />} />
            <Route path='/noticias/:id' element={<NoticiaNota />} />
            <Route path='/mesa-partes' element={<MesaPartes />} />
            {/* <Route path='/ubicanos' element={<Ubicanos />} /> */}
            <Route path='/organigrama' element={<Organigrama />} />
            <Route path='/registro-visitas' element={<Visitas />} />

            
          </Routes>
          <Footer />

        </>

      </BrowserRouter>
    </>
  )
}

export default AppRouter