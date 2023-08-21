import React, { useState } from 'react'
import { Box, Button, Card, CardMedia, FormControl, FormGroup, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField, Modal, Typography } from '@mui/material'
import { ArrowBack, ArrowForward, ChevronLeft, ChevronRight } from '@mui/icons-material';
const Carrousel = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const images = ['/propaganda1.png', '/propaganda2.png', '/propaganda3.png', '/propaganda4.png'];
    const handlePrevImage = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <>
            <Grid container sx={{ marginTop: 10 }}>
                <Grid item md={1} xs={2}>
                    <IconButton onClick={handlePrevImage} sx={{ backgroundColor: '#28274D', color: 'white', top: '45%', left: { xs: '15%', sm: '40%', md: '30%', lg: '50%', xl: '85%' } }}>
                        <ChevronLeft sx={{ fontSize: 40 }} />
                    </IconButton>
                </Grid>
                <Grid item md={10} xs={8}>
                    <Box
                        marginY={3}
                        sx={{
                            backgroundImage: `url(${images[currentImage]})`,
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
                            src={images[currentImage]}
                            alt={`anuncio imagen ${currentImage + 1}`}
                            style={{
                                position: 'relative',
                                width: '100%', height: '450px', borderRadius: '50px',
                                objectFit: 'contain',
                            }}
                        />

                    </Box>

                </Grid>
                <Grid item md={1} xs={2}>
                    <IconButton onClick={handleNextImage} sx={{ backgroundColor: '#28274D', color: 'white', top: '45%', left: 10 }}>
                        <ChevronRight sx={{ fontSize: 40 }} />
                    </IconButton>
                </Grid>

                {/* Mostrar anuncios grande */}
                <Modal open={modalOpen} onClose={closeModal}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Box>
                        <img
                            src={images[currentImage]}
                            alt={`anuncio imagen ${currentImage + 1}`}
                            style={{
                                textAlign: 'center',
                                maxWidth: '100%',
                                maxHeight: '90vh'
                            }}
                        />
                    </Box>
                </Modal>
            </Grid>

        </>
    )
}

export default Carrousel