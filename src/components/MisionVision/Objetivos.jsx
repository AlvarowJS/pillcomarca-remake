import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Objetivos = () => {
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
                            Objetivos
                        </Typography>
                        <img
                            src='mision.png'
                            style={{
                                width: 100,
                                height: 100
                            }}
                        />
                    </Grid>
                    <Grid item>

                        <Typography>OEI. 01 Fortalecer la gestión institucional</Typography>
                        <Typography>OEI. 02 Promover el desarrollo humano y hábitos saludables en el distrito.</Typography>
                        <Typography>OEI. 03 Ampliar los servicios básicos de calidad en la zona urbana y rural.</Typography>
                        <Typography>OEI. 04 Reducir los índices de inseguridad ciudadana en el distrito.</Typography>
                        <Typography>OEI. 05 Disminuir la vulnerabilidad ante peligros de origen natural y antrópicos.</Typography>
                        <Typography>OEI. 06 Fortalecer el cuidado del medio ambiente de forma integral y sostenible en el distrito.</Typography>
                        <Typography>OEI. 07 Promover desarrollo territorial planificado, ordenado y sostenible en el distrito.</Typography>
                        <Typography>OEI. 08 Promover el desarrollo económico local en el distrito.</Typography>
                        <Typography>OEI. 09 Promover el ordenamiento en el servicio de transporte y tránsito en el distrito.</Typography>

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Objetivos