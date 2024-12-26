import React, { useEffect, useState } from 'react'
import bdMuni from '../../api/bdMuni'
import { Link, useParams } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { ArrowBack, FileDownload } from '@mui/icons-material';
const NormativaPagina = () => {
    const id = useParams();
    const [normativas, setNormativas] = useState()
    useEffect(() => {
        bdMuni.get(`/v1/documentonormativa/${id.id}`)
            .then(res => {
                setNormativas(res?.data)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <Box sx={{
            marginTop: 12,
            marginX: {
                xs: 2, sm: 5, md: 10
            },
            display: 'flex',
            flexDirection: 'column',
            gap: 2
        }}>
            <Link to='/normativa'>
                <Box sx={{
                    display: 'flex',
                    color: '#04AFF1'
                }}>

                    <ArrowBack />
                    <Typography>
                        Volver al listado
                    </Typography>
                </Box>
            </Link>
            <h1>{normativas?.data?.attributes?.nombre}</h1>
            <h4 style={{ fontFamily: 'sans-serif' }}>
                Tipo: {normativas?.data?.attributes?.Tipodedocumento?.nombre}
            </h4>
            <h4
                style={{
                    fontFamily: 'sans-serif'
                }}
            >Fecha: {normativas?.data?.attributes?.fecha}</h4>
            <Box sx={{
                marginRight: {
                    xs: 0,
                    sm: 30,
                    md: 50,
                    lg: 80,
                    xl: 100
                }
            }}>
                <Typography sx={{
                    fontStyle: 'italic'
                }}>
                    {normativas?.data?.attributes?.descripcion}
                </Typography>

                <Button
                    onClick={() => window.open(normativas?.data?.attributes?.archivo)}
                    sx={{
                        color: '#12B3F3'
                    }}
                >
                    <FileDownload />
                    Descargar
                </Button>
            </Box>
            <Box sx={{
                marginRight: {
                    xs: 0,
                    sm: 10,
                    md: 50,
                    lg: 40,
                    xl: 20
                }
            }}>
                <iframe
                    width="100%"
                    height="500px"
                    src={normativas?.data?.attributes?.archivo}
                />
            </Box>
        </Box>
    )
}

export default NormativaPagina