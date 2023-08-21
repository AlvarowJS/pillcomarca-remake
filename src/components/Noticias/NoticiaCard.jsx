import React from 'react'
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

const NoticiaCard = ({ noticia }) => {

    const navigate = useNavigate()

    const verNoticiaId = (id) => {
        navigate(`/noticias/${id}`)
    }
    return (
        <Grid item xs={12} sm={6} md={4}>
            <div style={{ cursor: 'pointer', width: '100%', height: '300px', borderRadius: '10px' }}>
                <img
                    src={noticia.fotos[0].foto}
                    alt={noticia.titulo}
                    objectFit="contain"
                    style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: '20px' }}
                />
            </div>
            <Box paddingX={1}>
                <Typography variant='h4' component='h4' sx={{ color: '#12B1FA', fontSize: 30 }}>{noticia.titulo}</Typography>
                <Typography sx={{ color: '#12B1FA', textAlign: 'right'}}>{noticia.fecha}</Typography>
                <Typography style={{ whiteSpace: 'pre-line' }}>
                    {/* {noticia.nota} */}
                    {noticia.nota.split(' ').slice(0, 20).join(' ')} {noticia.nota.split(' ').length > 100 ? '...' : ''}
                    ...

                </Typography>
                <Button style={{ color: 'white', backgroundColor: '#12B1FA' }}
                    onClick={() => { verNoticiaId(noticia.id) }}
                >
                    Ver noticia
                </Button>
            </Box>

        </Grid>
    )
}

export default NoticiaCard