import { DocumentScannerRounded } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import pdf from './../../assets/organigrama.pdf'
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Organigrama = () => {
  const navigate = useNavigate()

  const rof = () => {
    navigate('/documentos')

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
          ORGANIGRAMA VIGENTE
        </h1>
      </Box>
      <Box padding={2}>
        <Typography>
        El organigrama vigente es de 2013, el cual se encuentra en el ROF y lo puede encontrar en los 
          <a onClick={rof} style={{
            color: 'skyblue',
            cursor: 'pointer'
          }}> documentos de gestión </a>
          de la página.
        </Typography>

      </Box>
      <Box
        sx={{
          paddingX: 10
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

export default Organigrama