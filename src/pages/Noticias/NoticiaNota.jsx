import React, { useEffect, useState } from 'react'
import { ArrowBackIos, ArrowBackIosRounded, ArrowLeft, ChevronLeft, ChevronRight, Newspaper } from '@mui/icons-material'
import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import { Link, useParams } from 'react-router-dom';
import bdNoticias from '../../api/bdNoticias';
import bdMuni from '../../api/bdMuni';

const NoticiaNota = () => {
    const id = useParams();
    const [noticia, setNoticia] = useState()

    
    useEffect(() => {
        bdMuni.get(`/v1/noticias/${id.id}`)
          .then(res => {
            setNoticia(res?.data)
          })
          .catch(err => console.log(err))
      }, [])
    
    // const noticiaFiltrada = bdNoticias.find(noticia => noticia.id == id?.id);

    const [currentImage, setCurrentImage] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const handlePrevImage = () => {
        setCurrentImage((prev) => (prev === 0 ? noticia?.noticia_imagenes?.length - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setCurrentImage((prev) => (prev === noticia?.noticia_imagenes.length - 1 ? 0 : prev + 1));
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    const noticiasAll = () => {
        navigate('/noticias')
    }

    return (
        <>
            <Link to='/noticias'>

                <Button sx={{
                    alignItems: 'center',
                    justifyItems: 'center',
                    // backgroundColor: '#12B1FA',
                    // color: 'white',
                    marginTop: 12,
                    // marginBottom:2,
                    // textAlign: 'center'
                }}
                // onClick={noticiasAll}
                >
                    <ArrowBackIosRounded />
                    Volver
                </Button>
            </Link>
            <Box sx={{
                backgroundColor: '#12B1FA',
                width: '50%',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                // marginBottom: 3,
            }}>
                <h1 style={{ color: 'white', paddingLeft: 10 }}>
                    <Newspaper />
                    Noticias
                </h1>
            </Box>

            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={6} padding={2}>
                    <Typography sx={{
                        color: '#12B1FA',
                        fontWeight: 'bold',
                        fontSize: 30
                    }}>
                        {noticia?.titulo}
                    </Typography>

                    {/* Imagenes */}
                    <Grid container>
                        <Grid item md={1} xs={2}>
                            <IconButton onClick={handlePrevImage} sx={{ backgroundColor: '#28274D', color: 'white', top: '45%', left: { xs: '15%', sm: '40%', md: '30%', lg: '10%', xl: '80%' } }}>
                                <ChevronLeft sx={{ fontSize: 20 }} />
                            </IconButton>
                        </Grid>
                        <Grid item md={10} xs={8}>
                            <Box
                                marginY={3}
                                sx={{
                                    backgroundImage: `url(${noticia?.noticia_imagenes[currentImage]?.imagen})`,
                                    position: 'relative',

                                }}

                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        // backgroundColor: 'rgba(255, 255, 255, 0.5)', // Cambia el color de fondo del desenfoque
                                        backdropFilter: 'blur(10px)', // Ajusta el valor del desenfoque según sea necesario
                                    }}
                                ></div>
                                <img
                                    onClick={openModal}
                                    src={noticia?.noticia_imagenes[currentImage]?.imagen}

                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: '450px',
                                        borderRadius: '50px',
                                        objectFit: 'contain',
                                    }}
                                />

                            </Box>

                        </Grid>
                        <Grid item md={1} xs={2}>
                            <IconButton onClick={handleNextImage} sx={{ backgroundColor: '#28274D', color: 'white', top: '45%', left: 10 }}>
                                <ChevronRight sx={{ fontSize: 20 }} />
                            </IconButton>
                        </Grid>

                    </Grid>
                    <Typography sx={{
                        color: 'black',
                        // fontWeight: 'bold',
                        fontSize: 15,
                        whiteSpace: 'pre-line'
                    }}>
                        {noticia?.nota}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Box sx={{
                        width: '100%',
                        overflowX: 'auto'
                    }}>
                        {/* <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMunicipalidadDistritaldePillcoMarca%2Fposts%2Fpfbid02SpauSRTnKoFpC1Te3WrRbHA8BqoNjJAU9KyuaQBr6j34dpPumCWwTQgLc4dhmTXSl&show_text=true&width=500" width="500" height="800"></iframe> */}
                        <div dangerouslySetInnerHTML={{ __html: noticia?.referencia }} />

                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default NoticiaNota