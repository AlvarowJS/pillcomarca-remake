import { NewReleases, Newspaper } from '@mui/icons-material'
import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NoticiaCard from '../../components/Noticias/NoticiaCard'
import bdNoticias from '../../api/bdNoticias'


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
      <Grid container spacing={4} marginY={5} paddingX={{ xs: 3, md: 10 }}>
        {
          bdNoticias?.map(noticia => (
            <NoticiaCard
              key={noticia.id}
              noticia={noticia}
            />
          ))
        }
      </Grid>
    </>
  )
}

export default Noticias