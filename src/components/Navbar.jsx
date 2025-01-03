import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link, Menu, MenuItem, AppBar, Box, Button, Switch, Toolbar, Typography } from '@mui/material'


import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { FacebookOutlined, Instagram, KeyboardArrowDown } from '@mui/icons-material';
import 'boxicons/css/boxicons.min.css';
const Navbar = ({ setIdioma, idioma, setMenu, menu }) => {

    const navbar = useRef()
    const [institutionAnchorEl, setInstitutionAnchorEl] = useState(null);
    const [documentsAnchorEl, setDocumentsAnchorEl] = useState(null);

    const handleOpenInstitutionMenu = (event) => {
        setInstitutionAnchorEl(event.currentTarget);
    };

    const handleOpenDocumentsMenu = (event) => {
        setDocumentsAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setInstitutionAnchorEl(null);
        setDocumentsAnchorEl(null);
    };

    const portalTransparencia = () => {
        window.open('https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=12004#.ZGUICexBz0s', '_blank');
    };

    const tramiteDocumentario = () => {
        window.open('http://165.22.34.176/login', '_blank');
    }

    // Seleccionar elementos
    const body = document.querySelector('.circuitos__body');

    const handleMenuToggle = () => {
        setMenu(!menu);
    };
    const insta = () => {
        window.open("https://www.instagram.com/municipalidad_pillcomarca/", "_blank")
    }
    const facebookLink = () => {
        window.open("https://www.facebook.com/MunicipalidadDistritaldePillcoMarca", "_blank")
    }
    const tiktokLink = () => {
        window.open("https://www.tiktok.com/@municipalidadpillcomarca", "_blank")
    }
    // useEffect(() => {
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // }, [menu]);

    return (
        <>
            <AppBar>

                <Toolbar sx={{
                    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)'

                }}>
                    <NavLink to='/' >
                        <img
                            src="/logo3.png"
                            alt="logo municipalidad de pillco"
                            width={220}
                            height={50}
                            style={{ marginTop: 20 }}
                        />
                        {/* <Typography variant='h6'>Perú Exploring</Typography> */}
                    </NavLink>
                    <Box flex={1} />
                    {/* <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' } }}>
                        <Button
                            sx={{
                                width: { xl: 155, lg: 130 },
                                fontSize: { xl: 15, lg: 15 },
                                paddingLeft: 0,
                                paddingRight: 0,
                            }}
                        >
                            Institución
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' } }}>
                        <Button
                            sx={{
                                width: { xl: 155, lg: 130 },
                                fontSize: { xl: 15, lg: 15 },
                                paddingLeft: 0,
                                paddingRight: 0,
                            }}
                        >
                            Documentos
                        </Button>
                    </Box> */}
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }}>
                        <Button
                            onClick={handleOpenInstitutionMenu}
                            sx={{
                                width: { xl: 155, lg: 130 },
                                fontSize: { xl: 15, lg: 15 },
                                paddingLeft: 0,
                                paddingRight: 0,

                            }}
                        >
                            Institución
                            <KeyboardArrowDown sx={{ color: 'black', marginLeft: 3, fontSize: 30, cursor: 'pointer' }} />
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }}>
                        <Button
                            onClick={handleOpenDocumentsMenu}
                            sx={{
                                width: { xl: 155, lg: 130 },
                                fontSize: { xl: 15, lg: 15 },
                                paddingLeft: 0,
                                paddingRight: 0,
                            }}
                        >
                            Documentos
                            <KeyboardArrowDown sx={{ color: 'black', marginLeft: 3, fontSize: 30, cursor: 'pointer' }} />
                        </Button>
                        <Menu
                            anchorEl={institutionAnchorEl}
                            open={Boolean(institutionAnchorEl)}
                            onClose={handleCloseMenu}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            {/* Opciones para el menú de Institución */}
                            <NavLink to='/servicios' style={{ color: 'black' }}>
                                <MenuItem onClick={handleCloseMenu}>Servicios</MenuItem>
                            </NavLink>
                            <NavLink to='/seguridad-ciudadana' style={{ color: 'black' }}>
                                <MenuItem onClick={handleCloseMenu}>Seguridad Ciudadana</MenuItem>
                            </NavLink>
                            <NavLink to='/mision-vision' style={{ color: 'black' }}>
                                <MenuItem onClick={handleCloseMenu}>Misión y Visión</MenuItem>
                            </NavLink>
                            <NavLink to='/fut' style={{ color: 'black' }}>
                                <MenuItem onClick={handleCloseMenu}>FUT</MenuItem>
                            </NavLink>
                            <NavLink to='/mesa-partes' style={{ color: 'black' }}>
                                <MenuItem onClick={handleCloseMenu}>Mesa de partes</MenuItem>
                            </NavLink>
                            <NavLink to='/directorio' style={{ color: 'black' }}>
                                <MenuItem onClick={handleCloseMenu}>Directorio</MenuItem>
                            </NavLink>
                            <NavLink to='/historia' style={{ color: 'black' }}>
                                <MenuItem onClick={handleCloseMenu}>Historia de Pillco Marca</MenuItem>
                            </NavLink>
                            {/* <NavLink to='/ubicanos' style={{ color: 'black' }}>
                                <MenuItem onClick={handleCloseMenu}>Ubicanos</MenuItem>
                            </NavLink> */}
                            <NavLink to='/organigrama' style={{ color: 'black' }}>
                                <MenuItem onClick={handleCloseMenu}>Organigrama</MenuItem>
                            </NavLink>
                            <NavLink to='/registro-visitas' style={{ color: 'black' }}>
                                <MenuItem onClick={handleCloseMenu}>Registro de visitas</MenuItem>
                            </NavLink>
                            <NavLink to='/acceso-informacion' style={{ color: 'black' }}>
                                <MenuItem onClick={handleCloseMenu}>Acceso a la información</MenuItem>
                            </NavLink>
                            <NavLink to='/agenda' style={{ color: 'black' }}>
                                <MenuItem onClick={handleCloseMenu}>Agenda Institucional</MenuItem>
                            </NavLink>
                        </Menu>
                        <Menu
                            anchorEl={documentsAnchorEl}
                            open={Boolean(documentsAnchorEl)}
                            onClose={handleCloseMenu}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            {/* Opciones para el menú de Documentos */}
                            <NavLink to='/documentos' style={{ color: 'black' }}>
                                <MenuItem onClick={handleCloseMenu}>
                                    Documentos de Gestión
                                </MenuItem>
                            </NavLink>
                            <NavLink to='/normativa' style={{ color: 'black' }}>
                                <MenuItem onClick={handleCloseMenu}>Normativa</MenuItem>
                            </NavLink>
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' } }}>
                        <NavLink to='/noticias' >
                            <Link>
                                <Button sx={{ width: { xl: 155, lg: 130 }, fontSize: { xl: 15, lg: 15 }, paddingLeft: 0, paddingRight: 0 }}>
                                    Noticias
                                </Button>
                            </Link>
                        </NavLink>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' } }}>
                        <NavLink to='/convocatoria' >
                            <Link>
                                <Button sx={{ width: { xl: 155, lg: 130 }, fontSize: { xl: 15, lg: 15 }, paddingLeft: 0, paddingRight: 0 }}>
                                    Convocatoria
                                </Button>
                            </Link>
                        </NavLink>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' } }}>
                        <NavLink to='/municipio-saludable' >
                            <Link>
                                <Button sx={{ width: { xl: 155, lg: 130 }, fontSize: { xl: 15, lg: 15 }, paddingLeft: 0, paddingRight: 0 }}>
                                    Municipio Saludable
                                </Button>
                            </Link>
                        </NavLink>
                    </Box>
                    <Box flex={1} />
                    <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block', lg: 'block', xl: 'block' }, color: '#024C90', display: 'flex', gap: 1, paddingTop: 2}}>
                        <FacebookOutlined onClick={facebookLink} sx={{ cursor: 'pointer' }} />
                        <Instagram onClick={insta} sx={{ cursor: 'pointer', color: '#F04F0F' }} />
                        <i className='bx bxl-tiktok' style={{ fontSize: 25, cursor: 'pointer', color: 'black' }} onClick={tiktokLink}></i>

                        
                    </Box>

                    <Box sx={{ marginX: 3, display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' } }}>
                        <img
                            src="/portal.png"
                            alt="portal de transparencia"
                            width={100}
                            height={50}
                            style={{ marginTop: 20, cursor: 'pointer' }}
                            onClick={portalTransparencia}
                        />
                    </Box>
                    <Box sx={{ display: { xl: 'none', lg: 'none', md: 'block' } }}>
                        <MenuIcon onClick={handleMenuToggle} sx={{ color: 'black', marginLeft: 3, fontSize: 30, cursor: 'pointer' }} />
                    </Box>



                </Toolbar>


            </AppBar>
        </>
    )
}

export default Navbar