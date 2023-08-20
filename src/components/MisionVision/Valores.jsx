import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Valores = () => {
    return (
        <>
            <Box>
                <Grid container
                    justifyContent='center'
                    sx={{
                        backgroundColor: '#0E9DD5',
                        padding: 5,
                        color: 'white',
                        borderRadius: 5
                    }}
                >
                    <Grid item >
                        <Typography fontSize={25} fontWeight='bold'>
                            Valores 
                        </Typography>
                        <img
                            src='valores.png'
                            style={{
                                width: 100,
                                height: 100
                            }}
                        />
                    </Grid>
                    <Grid item>

                        <Typography>
                            Nuestros valores que constituyen la riqueza intangible que guiarán nuestros esfuerzos para fomentar y consolidar el desarrollo sostenible del Distrito de Pillco Marca. Valores Personales: Valores inherentes a las personas.
                        </Typography>
                        <Typography>Respeto.</Typography>
                        <Typography>Empatía.</Typography>
                        <Typography>Responsabilidad.</Typography>
                        <Typography>Honestidad.</Typography>
                        <Typography>Vocación de servicio.</Typography>
                        <Typography>Compromiso Social.</Typography>
                        <Typography>Transparencia.</Typography>
                        <Typography>Trabajo en Equipo.</Typography>
                        <Typography>Predisposición al cambio.</Typography>


                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Valores