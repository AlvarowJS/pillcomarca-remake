import { AccountCircle, DesktopMac, FileCopy, LocalPolice, Mail, MenuBook, People, Search } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Servicios = () => {
  const navigate = useNavigate()
  const seguimientoTramite = () => {
    window.open('http://165.22.34.176/tramite/seguimiento', '_blank');
  }
  const tramiteDocumentario = () => {
    window.open('http://165.22.34.176/', '_blank');
  }
  const seguridadCiudadana = () => {
    navigate('/seguridad-ciudadana')
  }
  const presupuestoParticipativo = () => {
    navigate('/presupuesto-participativo')
  }

  const mesaPartes = () => {
    navigate('/mesa-partes')
  }
  const correoInstitucional = () => {
    window.open('https://munipillcomarca.gob.pe:2096/', '_blank');
  }

  const libroReclamaciones = () => {
    window.open('https://reclamos.servicios.gob.pe/?institution_id=3654', '_blank');
  }

  const intranet = () => {
    window.open('https://intranet.munipillcomarca.gob.pe/', '_blank');
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
            cursor: 'pointer',
            borderRadius: 2
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
            cursor: 'pointer',
            borderRadius: 2
          }}
          onClick={tramiteDocumentario}
        >
          <FileCopy sx={{ fontSize: 100 }} />
          <Typography fontSize={25}>
            Trámite de Documentario
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}
          sx={{
            backgroundColor: '#12B1FA',
            color: 'white',
            width: '200px',
            height: '200px',
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: 2
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
            backgroundColor: '#106CB2',
            color: 'white',
            width: '200px',
            height: '200px',
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: 2
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
            cursor: 'pointer',
            borderRadius: 2
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
            backgroundColor: 'white',
            color: 'black',
            width: '200px',
            height: '200px',
            textAlign: 'center',
            cursor: 'pointer',
            border: '1px solid',
            paddingTop: 1,
            borderRadius: 2
          }}
          onClick={libroReclamaciones}
        >
          {/* <MenuBook sx={{ fontSize: 100 }} /> */}
          <svg width="95" height="95" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
            <path d="M10.9516 11.6782L10.5985 11.2335L11.0573 10.899L11.8737 10.3039C11.9253 10.2662 11.9344 10.2163 11.933 10.181C11.9315 10.1458 11.9183 10.0968 11.8637 10.0636L8.06939 7.75314C8.04459 7.73805 8.02039 7.73067 7.9955 7.73067C7.95605 7.73067 7.91389 7.74982 7.88538 7.78056C7.85836 7.80976 7.84678 7.8448 7.85009 7.88766L8.2185 12.6968C8.22597 12.7948 8.31233 12.8313 8.36504 12.8313C8.39424 12.8313 8.42136 12.8219 8.44784 12.8025L9.28913 12.1886L9.79922 11.8164L10.0928 12.3754L11.4363 14.9342C11.4741 15.0061 11.5446 15.0117 11.5653 15.0117C11.5952 15.0117 11.6231 15.0026 11.6482 14.9847L12.7557 14.1949C12.7975 14.1651 12.8109 14.1254 12.8149 14.0974C12.8188 14.0694 12.8168 14.0275 12.7849 13.9873L10.9516 11.6782ZM13.658 12.7153C13.661 12.8265 13.5874 12.9252 13.48 12.9541C13.3316 12.9939 13.0985 13.0566 12.8045 13.1356L13.2117 13.6485C13.4572 13.9576 13.3935 14.4093 13.0721 14.6385L11.9646 15.4284C11.8426 15.5154 11.703 15.5566 11.5653 15.5566C11.319 15.5566 11.0785 15.4248 10.9539 15.1875L10.2388 13.8258C8.17901 14.3804 5.8735 15.0022 5.43922 15.1244C4.62411 15.3538 3.63074 14.8001 3.53087 14.3581C3.36211 13.8042 2.97707 5.60075 3.00107 4.87082C3.02508 4.14089 3.3529 3.90615 4.65791 2.91377C6.46614 1.53878 7.7333 0.528284 8.32114 0.0537202C8.47476 -0.0703028 8.704 0.0335776 8.71231 0.230846L8.72607 0.557434C8.72964 0.64127 8.6896 0.720653 8.61977 0.767273C7.97976 1.19487 4.7997 3.32667 4.38235 3.75263C3.91798 4.2266 4.49717 4.63732 4.98628 4.54131C5.3045 4.47881 11.6274 2.7364 13.0806 2.33552C13.2312 2.294 13.3807 2.40481 13.3849 2.56095L13.658 12.7153ZM5.06462 3.94055L11.3232 0.910053C11.4994 0.824682 11.6983 0.974489 11.665 1.1674L11.5894 1.60559L5.13881 4.11089C5.11332 4.12079 5.08477 4.11896 5.06076 4.1059C4.99425 4.06977 4.99653 3.97351 5.06462 3.94055" fill="black"></path>
          </svg>
          <Typography fontSize={25}>
            Libro de Reclamaciones
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}
          sx={{
            backgroundColor: '#12B1FA',
            color: 'white',
            width: '200px',
            height: '200px',
            textAlign: 'center',
            cursor: 'pointer',
            border: '1px solid',
            paddingTop: 1,
            borderRadius: 2
          }}
          onClick={intranet}
        >
          <AccountCircle sx={{ fontSize: 100, color: 'white' }} />
          <Typography fontSize={25}>
            INTRANET
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3}
          sx={{
            backgroundColor: '#106CB2',
            color: 'white',
            width: '200px',
            height: '200px',
            textAlign: 'center',
            cursor: 'pointer',
            border: '1px solid',
            paddingTop: 1,
            borderRadius: 2
          }}
          onClick={presupuestoParticipativo}
        >
          <People sx={{ fontSize: 100, color: 'white' }} />
          <Typography fontSize={25}>
            PRESUPUESTO PARTICIPATIVO
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Servicios