import { Box, CardMedia, Grid, Typography } from '@mui/material'
import abuelita from '../../assets/recreos/abuelita.png'
import abuelita1 from '../../assets/recreos/abuelita1.png'
import bosque from '../../assets/recreos/bosque.png'
import recreoBreak from '../../assets/recreos/break.png'
import chaulan from '../../assets/recreos/chaulan.png'
import granjita from '../../assets/recreos/granjita.png'
import mellizos from '../../assets/recreos/mellizos.png'
import matambre from '../../assets/recreos/matambre.png'
import orillaverde from '../../assets/recreos/orillaverde.png'
import otorongo from '../../assets/recreos/otorongo.png'
import picorico from '../../assets/recreos/picorico.png'
import pillcohuasi from '../../assets/recreos/pillcohuasi.png'
import teo from '../../assets/recreos/teo.png'
import vilma from '../../assets/recreos/vilma.png'
import villa from '../../assets/recreos/villa.png'
import timpa from '../../assets/recreos/timpa.png'
import React from 'react'
import { LocationOn, QueryBuilder } from '@mui/icons-material'

const Pachamanca = () => {

    const recreosArray = [
        {
            "id": 1,
            "titulo": "Choza de la Abuelita 2",
            "img": abuelita,
            "referencia": 'https://www.facebook.com/MunicipalidadDistritaldePillcoMarca/videos/1405911306622503'
        },
        {
            "id": 2,
            "titulo": "El bosque",
            "img": bosque,
            "referencia": 'https://www.facebook.com/MunicipalidadDistritaldePillcoMarca/videos/1966318947085951'
        },
        {
            "id": 3,
            "titulo": "Choza de la Abuelita 1",
            "img": abuelita1,
            "referencia": 'https://www.facebook.com/MunicipalidadDistritaldePillcoMarca/videos/832646741813189'
        },
        {
            "id": 4,
            "titulo": "Recreo Campestre Chaulan",
            "img": chaulan,
            "referencia": 'https://www.facebook.com/MunicipalidadDistritaldePillcoMarca/videos/1701032913693979'
        },
        {
            "id": 5,
            "titulo": "Granjita de McYeston",
            "img": granjita,
            "referencia": 'https://www.facebook.com/MunicipalidadDistritaldePillcoMarca/videos/1405911306622503'
        },
        {
            "id": 6,
            "titulo": "Recreo la Casa Brake ",
            "img": recreoBreak,
            "referencia": 'https://fb.watch/mJHiQgGFNX/'
        },
        {
            "id": 7,
            "titulo": "Recreo de los mellizos",
            "img": mellizos,
            "referencia": 'https://fb.watch/mJHAdywofs/'
        },
        {
            "id": 8,
            "titulo": "Recreo Matambre",
            "img": matambre,
            "referencia": 'https://fb.watch/mJI1jcoK1j/'
        },
        {
            "id": 9,
            "titulo": "Recreo Orilla Verde",
            "img": orillaverde,
            "referencia": 'https://fb.watch/mJHFZystOQ/'
        },
        {
            "id": 10,
            "titulo": "Recreo el Otorongo",
            "img": otorongo,
            "referencia": 'https://fb.watch/mJHLZXqEEE/'
        },
        {
            "id": 11,
            "titulo": "Recreo el Pico Rico",
            "img": picorico,
            "referencia": 'https://fb.watch/mJHT6FR1XW/'
        },
        {
            "id": 12,
            "titulo": "Recreo PillcoHuasi",
            "img": pillcohuasi,
            "referencia": 'https://fb.watch/mJHH-YDvIj/'
        },
        {
            "id": 13,
            "titulo": "Recreo Don Teo",
            "img": teo,
            "referencia": 'https://fb.watch/mJHRumJ_FQ/'
        },
        {
            "id": 14,
            "titulo": "Recreo Timpa",
            "img": timpa,
            "referencia": 'https://fb.watch/mJHWN5sz8G'
        },
        {
            "id": 15,
            "titulo": "Recreo Vilma",
            "img": vilma,
            "referencia": 'https://fb.watch/mJHJMtYYZe/'
        }
        ,
        {
            "id": 16,
            "titulo": "Recreo Villa",
            "img": villa,
            "referencia": 'https://fb.watch/mJHYXKAs43/'
        }
    ]
    const irFacebook = (referencia) => {
        window.open(referencia, '_blank');
    }
    return (
        <>
            <Box position="relative" width="100%">
                <CardMedia
                    component="img"
                    height="350"
                    image="/propaganda5.png"
                    alt="portada mice"

                />
                {/* <Box position="absolute" top="25%" left="40%" textAlign="center" color="white"> */}
                <Box
                    textAlign="center"
                    position="absolute"
                    top="40%"
                    sx={{ left: { sm: '10%', md: '10%', lg: '20%' } }}

                    color="white" >

                </Box>
            </Box>
            <Box sx={{
                marginTop: 10
            }}>
                <Typography fontSize={40}
                    sx={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: 'green'

                    }}>
                    XVIII FESTIVAL DE LA PACHAMANCA PILLCO MARCA 2023
                </Typography>
                <Typography fontSize={20}
                    sx={{
                        fontWeight: 'weigth',
                        textAlign: 'center',
                        color: '#106CB2'
                    }}>
                    VUELVE EL FESTIVAL MAS ESPERADO
                </Typography>


                <Grid container gap={4} justifyContent='center' paddingX={2}>
                    <Grid item xs={12}>
                        <Typography fontSize={20}
                            sx={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#106CB2',
                                backgroundColor: '#fff'
                            }}>
                            <LocationOn />
                            Hora: 8:00 am
                        </Typography>
                        <Typography fontSize={20}
                            sx={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#106CB2',
                                backgroundColor: '#ffff'
                            }}>
                            <QueryBuilder />
                            Lugar: Aprovica "Losa de la ex comisaria"</Typography>
                    </Grid>

                </Grid>
                <Typography fontSize={35}
                    sx={{
                        fontWeight: 'weigth',
                        textAlign: 'center',
                        color: '#106CB2',
                        marginY: 2
                    }}>
                    Con la participación de los recreos de nuestro distrito  en este gran evento
                </Typography>

                <Grid container gap={4} justifyContent='center' paddingX={2}>
                    {recreosArray.map((recreo, index) => (
                        <Grid key={index} item xs={12} sm={6} lg={3}>
                            <Typography fontSize={20}
                                sx={{
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    color: '#ffff',
                                    backgroundColor: '#106CB2'
                                }}>
                                {recreo.titulo}
                            </Typography>
                            <img
                                src={recreo.img}
                                alt={recreo.titulo}
                                style={{
                                    width: '100%',
                                    height: 300,
                                    objectFit: 'contain',
                                    cursor: 'pointer'
                                }}
                                onClick={() => irFacebook(recreo?.referencia)}
                            />

                        </Grid>
                    ))}
                </Grid>


                {/* <Grid container gap={4} justifyContent='center' paddingX={2}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography fontSize={20}
                            sx={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#ffff',
                                backgroundColor: '#106CB2'
                            }}>
                            Choza de la Abuelita 2
                        </Typography>
                        <img
                            src={abuelita}
                            alt="Choza de la abuelita"
                            style={{
                                width: '100%',
                                height: 300,
                                objectFit: 'contain'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography fontSize={20}
                            sx={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#ffff',
                                backgroundColor: '#106CB2'
                            }}>
                            El bosque
                        </Typography>
                        <img
                            src={bosque}
                            alt="El bosque"
                            style={{
                                width: '100%',
                                height: 300,
                                objectFit: 'contain'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography fontSize={20}
                            sx={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#ffff',
                                backgroundColor: '#106CB2'
                            }}>
                            Recreo Campestre: Chaulan
                        </Typography>
                        <img
                            src={chaulan}
                            alt="Chaulan"
                            style={{
                                width: '100%',
                                height: 300,
                                objectFit: 'contain'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography fontSize={20}
                            sx={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#ffff',
                                backgroundColor: '#106CB2'
                            }}>
                            Orilla Verde
                        </Typography>
                        <img
                            src={orillaverde}
                            alt="Orilla Verde"
                            style={{
                                width: '100%',
                                height: 300,
                                objectFit: 'contain'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography fontSize={20}
                            sx={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#ffff',
                                backgroundColor: '#106CB2'
                            }}>
                            Recreo Otorongo
                        </Typography>
                        <img
                            src={otorongo}
                            alt="Recreo otorongo"
                            style={{
                                width: '100%',
                                height: 300,
                                objectFit: 'contain'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography fontSize={20}
                            sx={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#ffff',
                                backgroundColor: '#106CB2'
                            }}>
                            Recreo Picorico
                        </Typography>
                        <img
                            src={picorico}
                            alt="Recreo Picorico"
                            style={{
                                width: '100%',
                                height: 300,
                                objectFit: 'contain'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography fontSize={20}
                            sx={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#ffff',
                                backgroundColor: '#106CB2'
                            }}>
                            Pillco Huasi
                        </Typography>
                        <img
                            src={pillcohuasi}
                            alt="Recreo Pillco Huasi"
                            style={{
                                width: '100%',
                                height: 300,
                                objectFit: 'contain'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography fontSize={20}
                            sx={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#ffff',
                                backgroundColor: '#106CB2'
                            }}>
                            Don Teo
                        </Typography>
                        <img
                            src={teo}
                            alt="Don teo"
                            style={{
                                width: '100%',
                                height: 300,
                                objectFit: 'contain'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Typography fontSize={20}
                            sx={{
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#ffff',
                                backgroundColor: '#106CB2'
                            }}>
                            Recreo Campestre Vilma
                        </Typography>
                        <img
                            src={vilma}
                            alt="Recreo campestre vilma"
                            style={{
                                width: '100%',
                                height: 300,
                                objectFit: 'contain'
                            }}
                        />
                    </Grid>

                </Grid> */}
            </Box>
        </>
    )
}

export default Pachamanca