import React from 'react'
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
const fotoDirect = "http://127.0.0.1:8000/storage/directorio/"

const DirectorioCard = ({
    directorio
}) => {
    console.log(directorio, "?")
    return (
        <Grid item xs={12} sm={6} md={4}

        >
            <div style={{
                backgroundColor: 'rgba(17, 172, 230, 0.8)',
                backgroundImage: `url(${fotoDirect + directorio?.foto})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: 300,
                borderRadius: '20px',
                overflow: 'hidden', // Para asegurarse de que la imagen no sobresalga del contenedor si tiene un borderRadius
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