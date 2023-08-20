import React, { useEffect, useState } from 'react'
import { DocumentScanner } from '@mui/icons-material'
import { TextField, Box, Grid, Select, InputLabel, MenuItem } from '@mui/material'
import TablaNormativa from '../../components/Normativa/TablaNormativa'
import bdMuni from './../../api/bdMuni'
const Normativa = () => {
    const [tipos, setTipos] = useState()
    const [selectedOption, setSelectedOption] = useState()
    const [selectYear, setSelectYear] = useState()
    const [search, setSearch] = useState()
    const [filter, setFilter] = useState()

    useEffect(() => {

        bdMuni.get('/v1/tipodedocumento')
            .then(res => {
                setTipos(res.data)
            })
            .catch(err => console.log(err))
    }, [selectedOption, selectYear, search])

    const handleTipos = () => {
        // console.log(event.target.getAttribute('data-value'), "Asd")
        setSelectedOption(event.target.getAttribute('data-value'));

    }

    const handleYears = () => {
        setSelectYear(event.target.getAttribute('data-value'));
    }

    const handleSearch = () => {
        setSearch(event.target.value);
    }
    const years = [
        2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
        2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996,
        1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986
    ];
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
                        <Grid item xs={12} sm={12} md={5}>
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

                        <Grid item xs={12} sm={12} md={4}>
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
                    </Grid>
                </Box>
                <TablaNormativa
                    selectYear={selectYear}
                    selectedOption={selectedOption}
                    search={search}
                    setFilter={setFilter}
                    filter={filter}
                />
            </Box>
        </>
    )
}

export default Normativa