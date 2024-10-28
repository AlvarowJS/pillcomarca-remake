import React, { useEffect, useState } from 'react';
import NegocioCard from '../../components/Negocios/NegocioCard';
import bdNegocio from '../../api/bdNegocio';
import { Box, TextField, Button, Select, InputLabel, MenuItem, FormControl } from '@mui/material';
import { HouseOutlined } from '@mui/icons-material';

const URL = '/v1/buscar-negocio';

const Negocio = () => {
    const [negocios, setNegocios] = useState([]);
    const [nombrenegocio, setNombrenegocio] = useState('');
    const [subcategoriaId, setSubcategoriaId] = useState('');
    const [subcategorias, setSubcategorias] = useState([]);

    // Fetch subcategorías
    useEffect(() => {
        bdNegocio.get('/v1/ver-subcategorias') // Asegúrate de que la ruta sea correcta
            .then(res => {
                setSubcategorias(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const fetchNegocios = () => {
        const params = {
            nombrenegocio: nombrenegocio,
            subcategoria_id: subcategoriaId,
        };

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
        <div>
            <Box sx={{ marginTop: 12 }}>
                <Box sx={{
                    backgroundColor: '#12B1FA',
                    width: '50%',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginBottom: 3
                }}>
                    <h1 style={{ color: 'white', paddingLeft: 10 }}>
                        <HouseOutlined />
                        Negocios de Pillcomarca
                    </h1>
                </Box>
            </Box>

            <Box>
                <Box component="form" onSubmit={handleSearch}>
                    <TextField
                        label="Buscar Negocio"
                        variant="outlined"
                        value={nombrenegocio}
                        onChange={(e) => setNombrenegocio(e.target.value)}
                        sx={{ marginRight: 2 }}
                    />
                    
                    <FormControl variant="outlined" sx={{ marginRight: 2, minWidth: 120 }}>
                        <InputLabel id="subcategoria-label">Subcategoría</InputLabel>
                        <Select
                            labelId="subcategoria-label"
                            value={subcategoriaId}
                            onChange={(e) => setSubcategoriaId(e.target.value)}
                            label="Subcategoría"
                        >
                            {subcategorias?.map((subcategoria) => (
                                <MenuItem key={subcategoria.id} value={subcategoria.id}>
                                    {subcategoria.rubro}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Button type="submit" sx={{
                        backgroundColor: "#12B1FA",
                        color: 'white'
                    }}>
                        Buscar
                    </Button>
                </Box>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', marginTop: 2 }}>
                    {
                        negocios?.map(negocio => (
                            negocio.id ? (
                                <Box key={negocio.id} sx={{ width: { xs: '200%', sm: 'calc(10% - 9px)', md: 'calc(20% - 10px)' }, marginBottom: 2 }}>
                                    <NegocioCard negocio={negocio} />
                                </Box>
                            ) : null
                        ))
                    }
                </Box>
            </Box>
        </div>
    );
};

export default Negocio;
