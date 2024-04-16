import React, { useEffect, useState } from 'react'
import { DocumentScanner, Search } from '@mui/icons-material'
import { TextField, Box, Grid, Select, InputLabel, MenuItem, Container, Button, Typography } from '@mui/material'
import TablaNormativa from '../../components/Normativa/TablaNormativa'
import bdMuni from './../../api/bdMuni'
import ListaNormativa from '../../components/Normativa/ListaNormativa'
import NormativaPaginacion from '../../components/Normativa/NormativaPaginacion'
const Normativa = () => {
    const [tipos, setTipos] = useState()
    const [selectedOption, setSelectedOption] = useState()
    const [selectYear, setSelectYear] = useState()
    const [search, setSearch] = useState()
    const [filter, setFilter] = useState()
    const [normativas, setNormativas] = useState()
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        bdMuni.get('/v1/tipodedocumento')
            .then(res => {
                setTipos(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleTipos = () => {
        setSelectedOption(event.target.getAttribute('data-value'));
    }

    const handleYears = () => {
        setSelectYear(event.target.getAttribute('data-value'));
    }

    const years = [
        2024, 2023, 2022, 2021, 2020, 2019, 2018
    ];
    // Cambiar de pagina
    const handlePageChange = (event, value) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setCurrentPage(value);
    };

    // Lista documentos normativos:
    useEffect(() => {
        bdMuni.get(`/v1/documentonormativa?page=${currentPage}`)
            .then(res => {
                setNormativas(res.data.data)
                setTotalPages(res.data.links.pagination.last_page);
            })
            .catch(err => console.log(err))
    }, [])
    // Filtro por select documentos normativos:
    const buscarNormativa = () => {
        bdMuni.get(`/v1/documentonormativa?year=${selectYear ?? ''}&nombre=${search ?? ''}&tipodedocumento_id=${selectedOption ?? ''}`
        )
            .then(res => {
                setNormativas(res.data.data)
                setTotalPages(res.data.links.pagination.last_page)
                setCurrentPage(1)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        bdMuni.get(`/v1/documentonormativa?year=${selectYear ?? ''}&nombre=${search ?? ''}&tipodedocumento_id=${selectedOption ?? ''}&page=${currentPage ?? ''}`
        )
            .then(res => {
                setNormativas(res.data.data)
                setTotalPages(res.data.links.pagination.last_page)
                
            })
            .catch(err => console.log(err))
    }, [currentPage])


    return (
        <>
            <Box marginTop={12}>
                <Box sx={{
                    backgroundColor: '#12B1FA',
                    width: '50%',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginBottom: 3
                }}>
                    <h1 style={{ color: 'white', paddingLeft: 10 }}>
                        <DocumentScanner />
                        Documentos de Normativa
                    </h1>
                </Box>

                <Box>
                    <Grid container gap={2} paddingX={4}>
                        <Grid item xs={12} sm={12} md={4}>
                            <InputLabel htmlFor="tipo_doc">Tipo de documento</InputLabel>
                            <Select
                                onChange={handleTipos}
                                label="Tipo de documento"
                                fullWidth
                            >
                                {tipos?.map((tipo) => (
                                    <MenuItem key={tipo.id} value={tipo.id}>
                                        {tipo.nombre}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={12} md={2}>
                            <InputLabel htmlFor="tipo_doc">Año</InputLabel>
                            <Select
                                // value={selectedYear}
                                onChange={handleYears}
                                label="Año"
                                fullWidth
                            >
                                {years?.map((year) => (
                                    <MenuItem key={year} value={year}>
                                        {year}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3}>
                            <InputLabel htmlFor="tipo_doc">Buscar Normativa</InputLabel>
                            <TextField
                                type="text"
                                id="formGroupExampleInput"
                                placeholder="Buscar por nombre"
                                fullWidth
                                variant="outlined"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={2}>
                            <Button sx={{
                                backgroundColor: "#12B1FA",
                                marginTop: 3,
                                color: 'white',
                            }}
                                onClick={buscarNormativa}
                            >
                                <Search
                                    sx={{
                                        fontSize: 30
                                    }}
                                />
                                Buscar
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                {/* <TablaNormativa
                    selectYear={selectYear}
                    selectedOption={selectedOption}
                    search={search}
                    setFilter={setFilter}
                    filter={filter}
                /> */}
                <Container
                    sx={{
                        marginTop: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        flex: 1
                    }}
                >
                    {normativas?.length === 0 ? (
                        <Typography>No se encontraron documentos.</Typography>
                    ) : (
                        normativas?.map(normativa => (
                            <ListaNormativa
                                key={normativa.id}
                                normativa={normativa}
                            />
                        ))
                    )}

                    <NormativaPaginacion
                        totalPages={totalPages}
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                        setCurrentPage={setCurrentPage}                        
                    />
                </Container>


            </Box>
        </>
    )
}

export default Normativa