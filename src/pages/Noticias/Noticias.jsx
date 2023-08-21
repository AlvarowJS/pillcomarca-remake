import { NewReleases, Newspaper } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'

const Noticias = () => {
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
          <Newspaper />
          Noticias
        </h1>
      </Box>
    </>
  )
}

export default Noticias