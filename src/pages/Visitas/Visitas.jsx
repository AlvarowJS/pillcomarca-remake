import React from 'react'
import { EditCalendar } from '@mui/icons-material'
import { Box } from '@mui/material'
import TablaVisitas from '../../components/Visitas/TablaVisitas'

const Visitas = () => {
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
            <EditCalendar />
            Visitas
          </h1>
        </Box>
      </Box>
    <TablaVisitas/>
    
    </>
  )
}

export default Visitas