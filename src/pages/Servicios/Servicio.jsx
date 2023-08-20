import { Handshake } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import Servicios from '../../components/Servicios'

const Servicio = () => {
  return (
    <>
      <Box sx={{ marginTop: 15 }}>
        <Box sx={{
          backgroundColor: '#12B1FA',
          width: '50%',
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          marginBottom: 3
        }}>
          <h1 style={{ color: 'white', paddingLeft: 10 }}>
            <Handshake />
            Servicios
          </h1>
        </Box>
      </Box>
      <Servicios />
    </>
  )
}

export default Servicio