import React from 'react'
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
const fotoDirect = "https://sv-yptplguxwm.cloud.elastika.pe/storage/directorio/"

const DirectorioRegidorCard = ({regidor}) => {
    console.log(regidor)
  return (
    <Grid item xs={12} sm={6} md={4}

        >
            <div style={{
                // backgroundColor: '#BFB252',
                backgroundImage: `url(${fotoDirect + regidor?.foto})`,
                position: 'relative',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                width: '100%',
                height: 300,
                borderRadius: '20px',
                overflow: 'hidden',
            }}>

                <img
                    src={fotoDirect + regidor?.foto}
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
                <Typography variant='h5' component='h4'> {regidor?.nombres} {regidor?.apellidos} </Typography>
                <Typography> Telefono: {regidor?.cel} </Typography>
                <Typography> Correo: {regidor?.correo} </Typography>
                <Typography> Cargo: {regidor?.cargo} </Typography>
                <Typography> Dependencia: {regidor?.dependencia} </Typography>
            </div>
        </Grid>
  )
}

export default DirectorioRegidorCard