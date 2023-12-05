import { AppBar, Box, Container, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';




const Footer = () => {
    const insta = () => {
        window.open("https://www.instagram.com/peru.exploring/", "_blank")
    }

    const wssp = () => {
        window.open("https://api.whatsapp.com/send?phone=51922058965&text=Hola%20tengo%20una%20consulta%20%F0%9F%98%80", "_blank")

    }
    return (
        <footer>
            <Box sx={{
                backgroundColor: '#27292E', color: 'white', marginTop: 10, boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                paddingBottom: 5,
                paddingTop: 5
            }}>

                <Grid container spacing={1}>
                    <Grid item sm={3}>
                        <Box>
                            <img
                                src="/logo2.png"
                                alt="logo municipalidad de pillco"
                                width={320}
                                height={320}
                                style={{ marginTop: 20 }}
                            />
                        </Box>
                    </Grid>
                    <Grid item sm={3}>
                        <Box>
                            <Typography color={'#ffff'} sx={{ fontWeight: 'bold' }}>Enlaces Importantes</Typography>
                            <Typography color={'#ffff'} >
                                <NavLink to='/historia'>
                                    Historia
                                </NavLink>
                            </Typography>
                            <Typography color={'#ffff'} >
                                <NavLink to='/mision-vision'>
                                    Misión y Visión
                                </NavLink>
                            </Typography>
                            <Typography color={'#ffff'} >
                                <NavLink to='/noticias'>
                                    Noticias
                                </NavLink>
                            </Typography>
                            <Typography color={'#ffff'} >
                                <NavLink to='/seguridad-ciudadana'>
                                    Seguridad Ciudadana
                                </NavLink>
                            </Typography>
                            <Typography color={'#ffff'} >
                                <NavLink to='/documentos'>
                                    Documentos de gestión
                                </NavLink>
                            </Typography>
                            <Typography color={'#ffff'} >
                                <NavLink to='/normativa'>
                                    Documentos de Normativa
                                </NavLink>
                            </Typography>
                            <Typography color={'#ffff'} >
                                <NavLink to='/convocatoria'>
                                    Convocatoria
                                </NavLink>
                            </Typography>
                            <Typography color={'#ffff'} >
                                {/* <NavLink to='/tramite'> */}
                                Trámite documentario
                                {/* </NavLink> */}
                            </Typography>
                            <Typography color={'#ffff'} >
                                Seguimiento de tramite
                            </Typography>
                            <Typography color={'#ffff'} >
                                <NavLink to='/convocatoria'>
                                    Mesa de partes virtual
                                </NavLink>
                            </Typography>
                            <Typography color={'#ffff'} sx={{ fontWeight: 'bold' }}>Enlaces Importantes</Typography>
                            {/* ... (otros enlaces) */}
                            <Typography color={'#ffff'} >
                                <NavLink to='/convocatoria'>
                                    Mesa de partes virtual
                                </NavLink>
                            </Typography>
                            <Typography color={'#ffff'} >
                                <a href='https://www.facebook.com/MunicipalidadDistritaldePillcoMarca' target='_blank' rel='noopener noreferrer'>
                                    <FacebookIcon /> {/* Agrega el icono de Facebook */}
                                </a>
                            </Typography>                            

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box sx={{ paddingX: 5 }}>
                            <h2 style={{ fontWeight: 'bold', color: '#ffff' }}>Ubicación</h2>
                            <iframe style={{
                                width: '100%',
                                border: 'none',
                                borderRadius: 20,
                                marginInline: 10,
                                // paddingRight: 20,
                                // paddingLeft: 20,
                                height: 300
                            }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31437.35420819479!2d-76.2697975436559!3d-9.961449911342953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2bd3379c973%3A0x5007077161b51cfa!2sMunicipalidad%20Distrital%20de%20Pillco%20Marca!5e0!3m2!1ses-419!2spe!4v1692040274064!5m2!1ses-419!2spe">

                            </iframe>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </footer>
    )
}

export default Footer