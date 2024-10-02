import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import bdSaludable from '../../../api/bdSaludable'
import { ArrowBack } from '@mui/icons-material'

const PaginaDetallesSaludable = () => {
    const location = useLocation()
    const [detalles, setDetalles] = useState()

    useEffect(() => {
        const { pathname } = location; // Obtiene la ruta actual
        const pathSegment = pathname.split('/').pop();
        const selectedItem = bdSaludable.find(item => item.link === `/${pathSegment}`);
        setDetalles(selectedItem)
    }, [])

    return (
        <>
            <Link to='/municipio-saludable'>

                <Button sx={{
                    alignItems: 'center',
                    justifyItems: 'center',
                    marginTop: 12,                    

                }}
                >
                    <ArrowBack />
                    Volver
                </Button>
            </Link>
            <Box sx={{ textAlign: 'center', paddingBottom: 5 }}>
                <h1 style={{
                    color: '#2c3e50', // Color oscuro elegante
                    paddingLeft: 10,
                    fontWeight: 'bold',
                    fontSize: '2.5rem',
                }}>
                    {detalles?.title}
                </h1>
                <p style={{
                    color: '#7f8c8d', // Subtitulo o autor en gris claro
                    fontSize: '1.2rem',
                }}>
                    {detalles?.author}
                </p>
            </Box>

            {detalles?.detalles?.map((detalle, index) => (
                <Box
                    key={index}
                    sx={{
                        display: 'flex',
                        // flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                        flexDirection: { xs: 'column', sm: index % 2 === 0 ? 'row' : 'row-reverse' }, // Cambia a columna en pantallas pequeñas
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 4,
                        marginBottom: 6,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)', // Sombra suave
                        borderRadius: 2, // Bordes redondeados
                        backgroundColor: '#f9f9f9', // Fondo claro
                        transition: 'transform 0.3s ease', // Transición
                        '&:hover': {
                            transform: 'scale(1.02)', // Efecto hover
                        }
                    }}
                >
                    <Box
                        sx={{
                            // width: '50%',
                            width: { xs: '100%', sm: '50%' }, // Full width en pantallas pequeñas
                            paddingRight: index % 2 === 0 ? 3 : 0,
                            paddingLeft: index % 2 !== 0 ? 3 : 0,
                            textAlign: 'left',
                        }}
                    >
                        <h2 style={{
                            color: '#34495e',
                            fontSize: '1.8rem',
                            marginBottom: '1rem',
                        }}>
                            {/* {detalle?.item} */}
                            {detalle?.item?.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </h2>
                        <p style={{
                            color: '#7f8c8d',
                            fontSize: '1rem',
                            lineHeight: '1.6',
                        }}>
                            {/* {detalle?.descripcion} */}
                            {detalle?.descripcion?.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                    </Box>

                    {/* <Box sx={{ width: '50%' }}> */}
                    <Box sx={{ width: { xs: '100%', sm: '50%' }, display: 'flex', justifyContent: 'center' }}>

                        <img
                            src={detalle?.fotos}
                            width="100%"
                            alt={detalle?.item}
                            style={{
                                borderRadius: '8px', // Bordes redondeados a las imágenes
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Sombra de imagen
                            }}
                        />
                    </Box>
                </Box>
            ))}
        </>
    )
}


export default PaginaDetallesSaludable