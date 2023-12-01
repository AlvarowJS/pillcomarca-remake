import React, { useEffect, useState } from 'react'
import { EditCalendar } from '@mui/icons-material'
import { Box } from '@mui/material'
import TablaVisitas from '../../components/Visitas/TablaVisitas'
import bdMuni from '../../api/bdMuni'

const Visitas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [visitas, setVisitas] = useState()
  const [totalRows, setTotalRows] = useState()

  // useEffect(() => {
  //   bdMuni.get(`/v1/registro-visitas?page=${currentPage}`)
  //     .then(res => {
  //       // setNoticias(res.data)
  //       setVisitas(res.data.data);
  //       setTotalPages(res.data.last_page);
  //       setTotalRows(res.data.total)
  //     })
  //     .catch(err => console.log(err))
  // }, [currentPage])
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
      <TablaVisitas 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        visitas={visitas}
        totalPages={totalPages}
        totalRows={totalRows}
      />

    </>
  )
}

export default Visitas