import React from 'react'
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
const fotoDirect = "https://sv-yptplguxwm.cloud.elastika.pe/storage/directorio/"

const DirectorioCard = ({
    directorio
}) => {

    return (
        <Grid item xs={12} sm={6} md={4}

        >
            <div style={{
                // backgroundColor: '#BFB252',
                backgroundImage: `url(${fotoDirect + directorio?.foto})`,
                position: 'relative',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                width: '100%',
                height: 300,
                borderRadius: '20px',
                overflow: 'hidden',
            }}>

                <img
                    src={fotoDirect + directorio?.foto}
                    alt=""
                    // objectFit="contain"
                    style={{
                        width: '100%',
                        height: 300,
                        objectFit: 'contain',
                        borderRadius: '20px'
                    }}
                    loading="lazy"
                />
            </div>
            <div>
                <Typography variant='h5' component='h4'> {directorio?.nombres} {directorio?.apellidos} </Typography>
                <Typography> Telefono: {directorio?.cel} </Typography>
                <Typography> Correo: {directorio?.correo} </Typography>
                <Typography> Cargo: {directorio?.cargo} </Typography>
                <Typography> Dependencia: {directorio?.dependencia} </Typography>
            </div>
        </Grid>
    )
}

export default DirectorioCard