import React, { useEffect, useState } from 'react';
import NegocioCard from '../../components/Negocios/NegocioCard';
import bdNegocio from '../../api/bdNegocio';
import { Box, TextField, Button, Select, InputLabel, MenuItem, FormControl, Grid, Typography, CircularProgress } from '@mui/material'
import { HouseOutlined, SearchOff, Lightbulb } from '@mui/icons-material'
import NegocioPaginacion from '../../components/Negocios/NegocioPaginacion';

const URL = '/v1/buscar-negocio';

const Negocio = () => {
    const [negocios, setNegocios] = useState([]);
    const [allNegocios, setAllNegocios] = useState([])
    const [nombrenegocio, setNombrenegocio] = useState('');
    const [subcategoriaId, setSubcategoriaId] = useState('');
    const [subcategorias, setSubcategorias] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalNegocios, setTotalNegocios] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [loadingTimeout, setLoadingTimeout] = useState(null)

    useEffect(() => {
        bdNegocio.get('/v1/ver-subcategorias')
            .then(res => setSubcategorias(res.data))
            .catch(err => console.log(err))
    }, []);

    const handlePageChange = (event, value) => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setCurrentPage(value)
    };

    const fetchNegocios = () => {
        setIsLoading(true)
        const params = { nombrenegocio, subcategoria_id: subcategoriaId, page: currentPage }
        bdNegocio.get(URL, { params })
            .then(res => {
                setNegocios(res?.data?.data)
                setTotalPages(res.data.last_page)
                setTotalNegocios(res.data.total)
            })
            .catch(err => console.log(err))
            .finally(() => {
                // Configuramos un timeout para ocultar el CircularProgress después de 4 segundos
                setLoadingTimeout(setTimeout(() => setIsLoading(false), 4000))
            })
    };

    useEffect(() => {
        fetchNegocios();
    }, [currentPage]);

    const handleSearch = (e) => {
        e.preventDefault();
        fetchNegocios();
    };

    const mostrarTodo = () => {
        setNegocios(allNegocios)
        setNombrenegocio('')
        setSubcategoriaId('')
    };

    const selectedSubcategoria = subcategorias.find(sub => sub.id === subcategoriaId)
    const subcategoriaName = selectedSubcategoria ? selectedSubcategoria.rubro : ''

    useEffect(() => {
        if (allNegocios.length === 0) {
            bdNegocio.get(URL)
                .then(res => {
                    setAllNegocios(res?.data?.data)
                    setNegocios(res?.data?.data)
                    setTotalPages(res.data.last_page)
                    setTotalNegocios(res.data.total)
                })
                .catch(err => console.log(err));
        }
    }, []);

    const isFiltered = nombrenegocio || subcategoriaId

    return (
        <Box sx={{ marginTop: 12 }}>

            <Box sx={{
                backgroundColor: '#12B1FA',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                marginBottom: 3,
                padding: '0.5rem',
                width: { xs: '95%', md: '40%' }
            }}>
                <h1 style={{ color: 'white', paddingLeft: 10 }}>
                    <HouseOutlined />
                    Negocios
                </h1>
            </Box>

            <Grid container spacing={2} sx={{ padding: '1rem' }}>

                <Grid item xs={12} md={3}>
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
                        <header
                            style={{
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: '#808080',
                                textAlign: 'center',
                                marginBottom: '1rem',
                                borderBottom: '2px solid #e0e0e0',
                                paddingBottom: '0.5rem'
                            }}
                        >
                            Filtrar negocios
                        </header>

                        <TextField
                            label="Buscar Negocio"
                            variant="outlined"
                            value={nombrenegocio}
                            onChange={(e) => setNombrenegocio(e.target.value)}
                        />

                        <FormControl variant="outlined">
                            <InputLabel id="subcategoria-label">Tipos</InputLabel>
                            <Select labelId="subcategoria-label" value={subcategoriaId} onChange={(e) => setSubcategoriaId(e.target.value)} label="Tipos">
                                {subcategorias?.sort((a, b) => a.rubro.localeCompare(b.rubro)).map((subcategoria) => (
                                    <MenuItem key={subcategoria.id} value={subcategoria.id}>
                                        {subcategoria.rubro}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Button
                            type="submit"
                            sx={{
                                backgroundColor: '#12B1FA',
                                color: 'white',
                                border: 'none',
                                padding: '0.5rem',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                '&:hover': { backgroundColor: '#0a90d2' }
                            }}
                        >
                            Buscar
                        </Button>
                        {isFiltered && (
                            <Button
                                onClick={mostrarTodo}
                                sx={{
                                    backgroundColor: '#e0e0e0',
                                    color: 'black',
                                    borderRadius: '5px',
                                    padding: '0.5rem',
                                    marginTop: '5rem',
                                    '&:hover': {
                                        backgroundColor: '#808080',
                                        color: 'white'
                                    }
                                }}
                            >
                                ↩ Ver negocios
                            </Button>
                        )}

                    </Box>
                </Grid>

                <Grid item xs={12} md={9}>
                    {negocios.length > 0 ? (
                        <Box sx={{ marginBottom: '1rem' }}>
                            <h2 style={{ color: '#333' }}>
                                {nombrenegocio || subcategoriaId ? `Negocios de Pillcomarca - ${subcategoriaName}` : 'Explore los Negocios de Pillcomarca'}
                            </h2>

                            <p style={{ color: '#c5c5c5', fontSize: '1rem', marginTop: 12, marginBottom: 14 }}>
                                {totalNegocios} {totalNegocios > 0 ? 'Resultados' : ''}
                            </p>
                        </Box>
                    ) : (
                        <Box sx={{ marginBottom: '1rem' }}>
                            <h2 style={{ color: '#333' }}>
                                {nombrenegocio || subcategoriaId ? `Negocios de Pillcomarca - ${subcategoriaName}` : 'Explore los Negocios de Pillcomarca'}
                            </h2>

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 2, width: 'fit-content', margin: 'auto' }}>
                                {isLoading && <CircularProgress sx={{ marginTop: 2, marginBottom: 10 }} />}
                                <SearchOff sx={{ fontSize: 100, color: '#1565c0', marginTop: 2, display: isLoading ? 'none' : 'block' }} />
                                <Typography variant="body1" sx={{ color: '#555555', fontSize: '1rem', margin: 2, textAlign: 'center', display: isLoading ? 'none' : 'block' }}>
                                    ☹ Lo sentimos, no encontramos ninguna lista de negocios que coincida con tu búsqueda. <br />
                                    ¿Te gustaría ver sugerencias de listas de negocios similares? También puedes probar con otros <br />
                                    términos de búsqueda o volver a intentarlo más tarde.
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '2rem',
                        justifyContent: 'flex-start'
                    }}>
                        {negocios?.map(negocio => (
                            negocio.id && negocio.publico === 1 && (
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
                    <NegocioPaginacion
                        totalPages={totalPages}
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                        setCurrentPage={setCurrentPage}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Negocio;
