import React, { useEffect, useState } from 'react';
import NegocioCard from '../../components/Negocios/NegocioCard';
import bdNegocio from '../../api/bdNegocio';
import { Box, TextField, Button, Select, InputLabel, MenuItem, FormControl, Grid } from '@mui/material';
import { HouseOutlined } from '@mui/icons-material';

const URL = '/v1/buscar-negocio';

const Negocio = () => {
    const [negocios, setNegocios] = useState([]);
    const [nombrenegocio, setNombrenegocio] = useState('');
    const [subcategoriaId, setSubcategoriaId] = useState('');
    const [subcategorias, setSubcategorias] = useState([]);

    useEffect(() => {
        bdNegocio.get('/v1/ver-subcategorias')
            .then(res => setSubcategorias(res.data))
            .catch(err => console.log(err));
    }, []);

    const fetchNegocios = () => {
        const params = { nombrenegocio, subcategoria_id: subcategoriaId };
        bdNegocio.get(URL, { params })
            .then(res => setNegocios(res?.data?.data))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchNegocios();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchNegocios();
    };

    return (
        <Box sx={{ marginTop: 12 }}>
            
            <Box sx={{
                backgroundColor: '#12B1FA',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                marginBottom: 3,
                padding: '1rem',
                width: { xs: '100%', md: '50%' }
            }}>
                <h1 style={{ color: 'white', paddingLeft: 10 }}>
                    <HouseOutlined />
                    Negocios de Pillcomarca
                </h1>
            </Box>

            
            <Grid container spacing={2} sx={{ padding: '1rem',}}>
                
                <Grid item xs={12} md={3} >
                    <Box 
                        component="form" 
                        onSubmit={handleSearch} 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            padding: '1rem',
                            backgroundColor: '#f9f9f9',
                            border: { md: '2px solid #e0e0e0' },
                            height: '100%',
                            boxSizing: 'border-box'
                        }}
                    >
                        <TextField  
                            label="Buscar Negocio"
                            variant="outlined"
                            value={nombrenegocio}
                            onChange={(e) => setNombrenegocio(e.target.value)}
                        />

                        <FormControl variant="outlined">
                            <InputLabel id="subcategoria-label">Tipos</InputLabel>
                            <Select
                                labelId="subcategoria-label"
                                value={subcategoriaId}
                                onChange={(e) => setSubcategoriaId(e.target.value)}
                                label="Tipos"
                            >
                                {subcategorias?.map((subcategoria) => (
                                    <MenuItem key={subcategoria.id} value={subcategoria.id}>
                                        {subcategoria.rubro}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Button type="submit" sx={{
                            backgroundColor: '#12B1FA',
                            color: 'white',
                            border: 'none',
                            padding: '0.8rem',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            '&:hover': { backgroundColor: '#0a90d2' }
                        }}>
                            Buscar
                        </Button>
                    </Box>
                </Grid>

               
                <Grid item xs={12} md={9}>
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '2rem',
                        justifyContent: 'flex-start'
                    }}>
                        {negocios?.map(negocio => (
                            negocio.id && (
                                <Box key={negocio.id} sx={{
                                    width: { xs: '100%', sm: '340px' },
                                    border: '2px solid #e0e0e0',
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                                    backgroundColor: '#f9f9f9',
                                    marginBottom: '1rem',
                                    transition: 'transform 0.3s',
                                    '&:hover': { transform: 'scale(1.05)' }
                                }}>
                                    <NegocioCard negocio={negocio} />
                                </Box>
                            )
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Negocio;
