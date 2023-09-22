import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Button, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Collapse } from "@mui/material"
import { KeyboardArrowDown, KeyboardArrowRight, Mail } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
const SideMenu = ({ menu, setMenu, idioma }) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [subMenuOpen2, setSubMenuOpen2] = useState(false);
    const portalTransparencia = () => {
        window.open('https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=12004#.ZGUICexBz0s', '_blank');
    };

    const handleBackdropClick = () => {
        setMenu(false);
    };
    const tramiteDocumentario = () => {
        window.open('http://165.22.34.176/login', '_blank');
    }
    const correoInstitucional = () => {
        window.open('https://cinco.serverpe.com:2096/', '_blank')
    }
    const handleSubMenuToggle = () => {
        setSubMenuOpen(!subMenuOpen);
    };
    const handleSubMenuToggle2 = () => {
        setSubMenuOpen2(!subMenuOpen2);
    };
    return (
        <Drawer
            open={menu}
            anchor='right'
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
            ModalProps={{
                onBackdropClick: handleBackdropClick,
            }}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>

                <List>
                    <NavLink>
                        <img
                            src="/portal.png"
                            alt="portal de transparencia"
                            width={100}
                            height={50}
                            style={{ marginLeft: 20, cursor: 'pointer' }}
                            onClick={portalTransparencia}
                        />
                    </NavLink>
                    <br />
                    <NavLink>
                        <Button onClick={tramiteDocumentario} sx={{ color: '#20A9D8', fontWeight: 'bold', width: { xl: 155, lg: 130 }, fontSize: { xl: 15, lg: 15 }, paddingLeft: 0, paddingRight: 0 }}>
                            <PersonIcon />
                            SysDoc
                        </Button>
                    </NavLink>
                    <NavLink>
                        <Button onClick={correoInstitucional} sx={{ color: '#FE6C2C', fontWeight: 'bold', width: { xl: 155, lg: 130 }, fontSize: { xl: 15, lg: 15 }, paddingLeft: 0, paddingRight: 0 }}>
                            <Mail />
                            Correo Institucional
                        </Button>
                    </NavLink>
                    <NavLink to='/' onClick={handleBackdropClick}>
                        <ListItem button>
                            <ListItemText primary={'Inicio'} />
                        </ListItem>
                    </NavLink>
                    <ListItem button onClick={handleSubMenuToggle}>
                        <ListItemText primary={'Institución'} />
                        {
                            subMenuOpen ?
                                (<KeyboardArrowRight sx={{ color: 'black', marginLeft: 3, fontSize: 30, cursor: 'pointer' }} />)
                                :
                                (<KeyboardArrowDown sx={{ color: 'black', marginLeft: 3, fontSize: 30, cursor: 'pointer' }} />)
                        }

                    </ListItem>
                    <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <NavLink to='/' onClick={handleBackdropClick}>
                                <ListItem button sx={{ pl: 4 }}>
                                    <ListItemText primary={'Servicios'} />
                                </ListItem>
                            </NavLink>
                            <NavLink to='/mesa-partes' onClick={handleBackdropClick}>
                                <ListItem button sx={{ pl: 4 }}>
                                    <ListItemText primary={'Mesa de Partes'} />
                                </ListItem>
                            </NavLink>
                            <NavLink to='/seguridad-ciudadana' onClick={handleBackdropClick}>
                                <ListItem button sx={{ pl: 4 }}>
                                    <ListItemText primary={'Seguridad Ciudadana'} />
                                </ListItem>
                            </NavLink>
                            <NavLink to='/mision-vision' onClick={handleBackdropClick}>
                                <ListItem button sx={{ pl: 4 }}>
                                    <ListItemText primary={'Misión y Visión'} />
                                </ListItem>
                            </NavLink>
                            <NavLink to='/fut' onClick={handleBackdropClick}>
                                <ListItem button sx={{ pl: 4 }}>
                                    <ListItemText primary={'FUT'} />
                                </ListItem>
                            </NavLink>
                            <NavLink to='/directorio' onClick={handleBackdropClick}>
                                <ListItem button sx={{ pl: 4 }}>
                                    <ListItemText primary={'Directorio'} />
                                </ListItem>
                            </NavLink>
                            <NavLink to='/historia' onClick={handleBackdropClick}>
                                <ListItem button sx={{ pl: 4 }}>
                                    <ListItemText primary={'Historia de Pillco Marca'} />
                                </ListItem>
                            </NavLink>
                            {/* <NavLink to='/ubicanos' onClick={handleBackdropClick}>
                                <ListItem button sx={{ pl: 4 }}>
                                    <ListItemText primary={'Ubicanos'} />
                                </ListItem>
                            </NavLink> */}
                            <NavLink to='/organigrama' onClick={handleBackdropClick}>
                                <ListItem button sx={{ pl: 4 }}>
                                    <ListItemText primary={'Organigrama'} />
                                </ListItem>
                            </NavLink>

                        </List>
                    </Collapse>
                    <ListItem button onClick={handleSubMenuToggle2}>
                        <ListItemText primary={'Documentos'} />
                        {
                            subMenuOpen2 ?
                                (<KeyboardArrowRight sx={{ color: 'black', marginLeft: 3, fontSize: 30, cursor: 'pointer' }} />)
                                :
                                (<KeyboardArrowDown sx={{ color: 'black', marginLeft: 3, fontSize: 30, cursor: 'pointer' }} />)
                        }

                    </ListItem>
                    <Collapse in={subMenuOpen2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <NavLink to='/documentos' onClick={handleBackdropClick}>
                                <ListItem button sx={{ pl: 4 }}>
                                    <ListItemText primary={'Documentos de Gestión'} />
                                </ListItem>
                            </NavLink>
                            <NavLink to='/normativa' onClick={handleBackdropClick}>
                                <ListItem button sx={{ pl: 4 }}>
                                    <ListItemText primary={'Documentos normativos'} />
                                </ListItem>
                            </NavLink>
                        </List>
                    </Collapse>
                    <NavLink to='/noticias' onClick={handleBackdropClick}>
                        <ListItem button>
                            <ListItemText primary={'Noticias'} />
                        </ListItem>
                    </NavLink>
                    <NavLink to='/convocatoria' onClick={handleBackdropClick}>
                        <ListItem button>
                            <ListItemText primary={'Convocatoria'} />
                        </ListItem>
                    </NavLink>
                </List>

            </Box>
        </Drawer>

    )
}

export default SideMenu