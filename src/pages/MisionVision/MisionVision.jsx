import { Box, Grid } from '@mui/material'
import React from 'react'
import Vision from '../../components/MisionVision/Vision'
import Mision from '../../components/MisionVision/Mision'
import Objetivos from '../../components/MisionVision/Objetivos'
import Valores from '../../components/MisionVision/Valores'

const MisionVision = () => {
  return (
    <>
      <Box marginTop={15}>
        <Vision />
        <Mision />
        <Grid container marginTop={4} paddingX={4} gap={2} justifyContent='center'>
          <Grid item sm={12} md={5}>
            <Objetivos />
          </Grid>
          <Grid item sm={12} md={5}>
            <Valores />
          </Grid>

        </Grid>
      </Box>
    </>
  )
}

export default MisionVision