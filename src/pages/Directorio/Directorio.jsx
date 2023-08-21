import React from 'react'
import { Box, Typography } from '@mui/material'
import { RecentActors } from '@mui/icons-material'
import TablaDirectorio from '../../components/Directorio/TablaDirectorio'
const Directorio = () => {
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
          {/* <DocumentScannerRounded /> */}
          <RecentActors />
          Directorio
        </h1>
      </Box>
      <Box>
        <TablaDirectorio
          
        />
      </Box>
    </>
  )
}

export default Directorio