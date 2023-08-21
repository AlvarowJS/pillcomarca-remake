import { DesktopMac, LocalPolice, Mail, MenuBook, Search } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Servicios = () => {
  const navigate = useNavigate()
  const seguimientoTramite = () => {
    window.open('http://165.22.34.176/tramite/seguimiento', '_blank');
  }
  const seguridadCiudadana = () => {
    navigate('/seguridad-ciudadana')
  }
  const mesaPartes = () => {
    navigate('/mesa-partes')
  }
  const correoInstitucional = () => {
    window.open('https://cinco.serverpe.com:2096', '_blank');
  }

  return (
    <>
      <Grid container
        justifyContent="center"
        paddingX={2}
        gap={2}

      >
        <Grid item xs={12} sm={12} md={4} lg={3}
          sx={{
            backgroundColor: '#12B1FA',
            color: 'white',
            width: '200px',
            height: '200px',
            textAlign: 'center',
            cursor: 'pointer'
          }}
          onClick={seguimientoTramite}
        >
          <Search sx={{ fontSize: 100 }} />
          <Typography fontSize={25}>
            Seguimiento de Trámite
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}
          sx={{
            backgroundColor: '#106CB2',
            color: 'white',
            width: '200px',
            height: '200px',
            textAlign: 'center',
            cursor: 'pointer'
          }}
          onClick={mesaPartes}

        >
          <DesktopMac sx={{ fontSize: 100 }} />
          <Typography fontSize={25}>
            Mesa de Partes Virtual
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}
          sx={{
            backgroundColor: '#12B1FA',
            color: 'white',
            width: '200px',
            height: '200px',
            textAlign: 'center',
            cursor: 'pointer'
          }}
          onClick={seguridadCiudadana}
        >
          <LocalPolice sx={{ fontSize: 100 }} />
          <Typography fontSize={25}>
            Seguridad Ciudadana
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}
          sx={{
            backgroundColor: '#FE6C2C',
            color: 'white',
            width: '200px',
            height: '200px',
            textAlign: 'center',
            cursor: 'pointer'
          }}
          onClick={correoInstitucional}

        >
          <Mail sx={{ fontSize: 100 }} />
          <Typography fontSize={25}>
            Correo Institucional
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}
          sx={{
            backgroundColor: 'black',
            color: 'white',
            width: '200px',
            height: '200px',
            textAlign: 'center',
            cursor: 'pointer'
          }}
        >
          <MenuBook sx={{ fontSize: 100 }} />
          <Typography fontSize={25}>
            Libro de Reclamaciones
          </Typography>
        </Grid>

      </Grid>
    </>
  )
}

export default Servicios