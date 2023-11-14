import { NewReleases, Newspaper } from '@mui/icons-material'
import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NoticiaCard from '../../components/Noticias/NoticiaCard'
import bdNoticias from '../../api/bdNoticias'
import bdMuni from '../../api/bdMuni'
import NoticiaPaginacion from '../../components/Noticias/NoticiaPaginacion'


const Noticias = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [noticias, setNoticias] = useState()

  console.log(currentPage)
  useEffect(() => {
    console.log("cambio")
    bdMuni.get(`/v1/noticia?page=${currentPage}`)
      .then(res => {
        // setNoticias(res.data)
        console.log(res.data.data)
        setNoticias(res.data.data);
        setTotalPages(res.data.last_page);
      })
      .catch(err => console.log(err))
  }, [currentPage])

  const handlePageChange = (value) => {
    setCurrentPage(value);
  };

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
          noticias?.map(noticia => (
            <NoticiaCard
              key={noticia.id}
              noticia={noticia}
            />
          ))
        }
      </Grid>
      <NoticiaPaginacion
        totalPages={totalPages}
        currentPage={currentPage}
        onChange={handlePageChange}
      />
    </>
  )
}

export default Noticias