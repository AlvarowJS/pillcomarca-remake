import React, { useEffect, useState } from 'react'
import SeguridadTabla from '../../components/Seguridad/SeguridadTabla'
import { Download, LocalPolice, People, WhatsApp } from '@mui/icons-material'
import { Box, CardMedia, Grid, Hidden, Typography } from '@mui/material'
import bdPresupuesto from '../../api/bdPresupuesto'

const PresuPart = () => {

  return (
    <>
      <Box position="relative" width="100%">
        <CardMedia
          component="img"
          height="370"
          image="https://sv-yptplguxwm.cloud.elastika.pe/storage/fotosPortada/65f064ee7ae82.presupuesto_paticipativo.png"
          alt="portada serenazgo"

        />

      </Box>
      <Grid container marginTop={2}>
        <Grid item xs={12} sm={8}>
          <Box sx={{
            backgroundColor: '#12B1FA',
            width: '80%',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            marginBottom: 3
          }}>
            <h1 style={{ color: 'white', paddingLeft: 10 }}>
              <People sx={{ marginRight: 1 }} />
              Presupuesto Participativo 2025
            </h1>

          </Box>
        </Grid>

      </Grid >

      <Grid container padding={2}>
        <Box>

          <h1 style={{ color: '#12B1FA' }}> Anexos:</h1>
          {
            bdPresupuesto?.map(presupuesto => (
              <>
                <Typography>
                  {presupuesto?.nombre}
                  <Download style={{ marginLeft: 10, color: '#12B1FA', cursor: 'pointer' }}
                    onClick={() => window.open(presupuesto?.archivo)}
                  />

                </Typography>
                <br />
                <Typography>
                  {/* {presupuesto?.archivo} */}
                </Typography>
                <hr />
              </>
            ))
          }
          <br />
          <br />
          <h1 style={{ color: '#12B1FA' }}> Informe Final:</h1>

          <Typography>
            Informe Final - Presupuesto Participativo 2025
            <Download style={{ marginLeft: 10, color: '#12B1FA', cursor: 'pointer' }}
              onClick={() => window.open('https://cdn.www.gob.pe/uploads/document/file/6137099/5421000-informe-final-de-proceso-del-presupuesto-participativo-basado-en-resultados-2025.pdf?v=1712157747')}
            />

          </Typography>
          <br />
          <Typography>
            {/* {presupuesto?.archivo} */}
          </Typography>
          <hr />

        </Box>
      </Grid>
      {/* <SeguridadTabla /> */}
    </>
  )
}

export default PresuPart