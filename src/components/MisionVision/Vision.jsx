import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Vision = () => {
    return (
        <>
            <Box
                sx={{
                    paddingX: { xs: 10, sm: 10, md: 20, lg: 40 }
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
                    <Grid md={4}>
                        <img
                            src='vision.png'
                            style={{
                                width: 100,
                                height: 100
                            }}
                        />
                    </Grid>
                    <Grid md={8}>
                        <Typography fontSize={25}>
                            Visión Distrital
                        </Typography>
                        <Typography>
                            “Pillco Marca distrito competitivo, promotor, ordenado, ecológico, turístico, moderno, seguro y solidario con calidad de vida, donde se conserva, respeta y se fomenta la cultura, los valores, la transparencia y la participación ciudadana”
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Vision