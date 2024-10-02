import React, { useEffect, useState } from 'react'
import SeguridadTabla from '../../components/Seguridad/SeguridadTabla'
import { LocalPolice, WhatsApp } from '@mui/icons-material'
import { Box, CardMedia, Grid, Hidden } from '@mui/material'
import SeguridadArbol from '../../components/Seguridad/SeguridadArbol'
import bdSeguridad from '../../api/bdSeguridad'
import SeguridadContenido from '../../components/Seguridad/SeguridadContenido'
import bdMuni from '../../api/bdMuni'

const Seguridad = () => {
    const [seleccion, setSeleccion] = useState()
    const [seguridads, setSeguridads] = useState()

    useEffect(() => {
        bdMuni.get(`/v1/seguridad`)
        .then(res => {
          setSeguridads(res?.data)
        })
        .catch(err => console.log(err))
    }, [])
    
    return (
        <>
            <Box position="relative" width="100%">
                <CardMedia
                    component="img"
                    height="370"
                    image="/portadasereno.png"
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
                            <LocalPolice sx={{marginRight: 1}}/>
                            Seguridad Ciudadana
                        </h1>
                        <h1 style={{ color: 'white', paddingLeft: 10 }}>
                            <WhatsApp sx={{marginRight: 1}}/>
                            Alerta Vecino 900659235
                        </h1>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <Box sx={{
                        textAlign: 'center'
                    }}>
                        <img src="/codisec.png" width={100} height={100} alt="" />
                    </Box>
                </Grid>
                <Grid item xs={6} sm={2}>
                    <Box>
                        <img src="/logosereno.png" width={120} height={100} alt="" />
                    </Box>
                </Grid>
            </Grid >
            
            <Grid container padding={2}
                spacing={5}>
                <Grid item xs={12} sm={12} md={12} lg={6}>

                    <SeguridadArbol seguridads={seguridads} setSeleccion={setSeleccion} />

                </Grid>

                <Grid item  lg={6} sx={{ display: {xs: 'none', sm: 'none', md: 'none', lg: 'block'} }}>
                    <SeguridadContenido
                        seguridads={seguridads}
                        seleccion={seleccion} />
                </Grid>
            </Grid>
            {/* <SeguridadTabla /> */}
        </>
    )
}

export default Seguridad