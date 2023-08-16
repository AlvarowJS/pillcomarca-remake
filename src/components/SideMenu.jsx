import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Collapse } from "@mui/material"
import { KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';
const SideMenu = ({ menu, setMenu, idioma }) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [subMenuOpen2, setSubMenuOpen2] = useState(false);

    const handleBackdropClick = () => {
        setMenu(false);
    };

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
                            <NavLink to='/ubicanos' onClick={handleBackdropClick}>
                                <ListItem button sx={{ pl: 4 }}>
                                    <ListItemText primary={'Ubicanos'} />
                                </ListItem>
                            </NavLink>
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
                    <NavLink to='/' onClick={handleBackdropClick}>
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