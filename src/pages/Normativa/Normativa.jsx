import React, { useEffect, useState } from 'react'
import { DocumentScanner, Search } from '@mui/icons-material'
import { TextField, Box, Grid, Select, InputLabel, MenuItem, Container, Button, Typography } from '@mui/material'
import ListaNormativa from '../../components/Normativa/ListaNormativa'
import NormativaPaginacion from '../../components/Normativa/NormativaPaginacion'
import bdMuni from './../../api/bdMuni'

const Normativa = () => {
    const [tipos, setTipos] = useState()
    const [selectedOption, setSelectedOption] = useState()
    const [selectYear, setSelectYear] = useState()
    const [search, setSearch] = useState()
    const [normativas, setNormativas] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [totalNormativas, setTotalNormativas] = useState(0)

    useEffect(() => {
        bdMuni.get('/v1/tipodedocumento')
            .then(res => {
                setTipos(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleTipos = () => {
        setSelectedOption(event.target.getAttribute('data-value'))
    }

    const handleYears = () => {
        setSelectYear(event.target.getAttribute('data-value'))
    }

    const years = [
        2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018
    ]

    const handlePageChange = (event, value) => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        setCurrentPage(value)
    }

    const fetchNormativas = (page = 1) => {
        bdMuni.get(`/v1/documentonormativa?page=${page}`)
            .then(res => {
                setNormativas(res.data.data)
                setTotalPages(res.data.links.pagination.last_page)
                setTotalNormativas(res.data.links.pagination.total) 
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchNormativas(currentPage)
    }, [currentPage])

    const buscarNormativa = () => {
        bdMuni.get(`/v1/documentonormativa?year=${selectYear ?? ''}&nombre=${search ?? ''}&tipodedocumento_id=${selectedOption ?? ''}`)
            .then(res => {
                setNormativas(res.data.data)
                setTotalPages(res.data.links.pagination.last_page)
                setTotalNormativas(res.data.links.pagination.total) 
                setCurrentPage(1)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Box marginTop={12}>
                <Box sx={{
                    backgroundColor: '#12B1FA',
                    width: { sx: '50%', xs: '80%' },
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginBottom: 3,
                    paddingRight: 10
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

                <Typography sx={{ marginTop: 2, paddingX: 4 }}>
                    Total: {totalNormativas}
                </Typography>

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
