import React, { useEffect, useState } from 'react'
import bdMuni from '../../api/bdMuni'
import { Box, Grid } from '@mui/material'
import DirectorioCard from '../../components/Directorio/DirectorioCard'
import { Person } from '@mui/icons-material'
import DirectorioPagination from '../../components/Directorio/DirectorioPagination'
import DirectorioRegidorCard from '../../components/Directorio/DirectorioRegidorCard'
const URLREGIDOR = '/v1/directorios-regidor'
const Directorio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [directorios, setDirectorios] = useState();
  const [regidores, setRegidores] = useState()

  useEffect(() => {
    bdMuni.get(`/v1/directorios?page=${currentPage}`)
      .then(res => {
        // setNoticias(res.data)
        setDirectorios(res.data.data);
        setTotalPages(res.data.last_page);
      })
      .catch(err => console.log(err))
  }, [currentPage])
  const handlePageChange = (value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    bdMuni(URLREGIDOR)
      .then(res=> {
        setRegidores(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  

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
          <Person />
          Directorio Municipal
        </h1>
      </Box>
      <Box sx={{
        backgroundColor: '#12B1FA',
        width: '50%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        // marginBottom: 3,
        marginTop: 6,
        justifyContent: 'center'
      }}>
        <h2 style={{ color: 'white', paddingLeft: 10 }}>Regidores</h2>
      </Box>
      <Grid container spacing={4} marginY={5} paddingX={{ xs: 3, md: 10, justifyContent: 'center' }}>
        {
          regidores?.map(regidor => (
            <DirectorioRegidorCard
              key={regidor.id}
              regidor={regidor}
            />
          ))
        }
      </Grid>
      <Box sx={{
        backgroundColor: '#12B1FA',
        width: '50%',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        // marginBottom: 3,
        marginTop: 6
      }}>
        <h2 style={{ color: 'white', paddingLeft: 10 }}>Gerentes y Subgerentes</h2>
      </Box>
      <Grid container spacing={4} marginY={5} paddingX={{ xs: 3, md: 10 }}>
        {
          directorios?.map(directorio => (
            <DirectorioCard
              key={directorio.id}
              directorio={directorio}
            />
          ))
        }
      </Grid>
      <DirectorioPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onChange={handlePageChange}
      />
    </>
  )
}

export default Directorio