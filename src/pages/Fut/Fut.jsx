import { DocumentScannerRounded } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import pdf from './../../assets/FUT.pdf'
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Fut = () => {
  const navigate = useNavigate()

  const mesaPartes = () => {
    navigate('/mesa-partes')

  }
  return (
    <>
      <Box sx={{
        backgroundColor: '#12B1FA',
        width: '50%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        // marginBottom: 3,
        marginTop: 12
      }}>
        <h1 style={{ color: 'white', paddingLeft: 10 }}>
          <DocumentScannerRounded />
          FUT
        </h1>
      </Box>
      <Box padding={2}>
        <Typography>
          El Formulario Único de Trámite sirve para solicitar los tramites disponibles que ofrece la Municipalidad disitrital de Pillco Marca.
        </Typography>
        <Typography>
          Una vez impreso debe rellenar y escanear el FUT junto a los requisitos que debe presentar a la
            <a onClick={mesaPartes} style={{
              color: 'skyblue',
              cursor: 'pointer'
              }}> mesa de partes virtual </a>
          
           o acercarse a la mesa de partes fisica en la Municipalidad Distrital de Pillco Marca.
        </Typography>
      </Box>
      <Box
        sx={{
          paddingX: {xs: 3, sm: 10 }
        }}
      >
        <iframe
          src={pdf}
          width="100%"
          height="500px"
        />
      </Box>
    </>
  )
}

export default Fut