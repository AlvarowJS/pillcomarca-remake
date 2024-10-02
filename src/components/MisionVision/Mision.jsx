import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Mision = () => {
    return (
        <>
            <Box
                sx={{
                    paddingX: { xs: 2, sm: 10, md: 20, lg: 40 },
                    marginTop: 5
                }}

            >
                <Grid
                    container
                    justifyContent='center'
                    sx={{
                        backgroundColor: '#0E9DD5',
                        padding: 5,
                        color: 'white',
                        borderRadius: 5
                    }}
                >

                    <Grid md={8}>
                        <Typography fontSize={25}>
                            Misión Distrital
                        </Typography>
                        <Typography>
                            “Promover el desarrollo inclusivo, integral y sostenible del distrito de Pillco Marca, con capacidad de gestión y servicios públicos de calidad, de una manera eficiente, transparente, integradora y responsable”
                        </Typography>
                    </Grid>
                    <Grid md={4}>
                        <img
                            src='objetivo.png'
                            style={{
                                width: 100,
                                height: 100
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Mision