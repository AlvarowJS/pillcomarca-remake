import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import bdMuni from '../../api/bdMuni'
import { PictureAsPdf } from '@mui/icons-material'
import { Button, Box, Grid, Typography } from '@mui/material'
const TablaNormativa = ({ selectYear, selectedOption, search, setFilter, filter }) => {


    const [normativas, setNormativas] = useState()

    useEffect(() => {
        bdMuni.get('/v1/documentonormativa')
            .then(res => {
                setNormativas(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        if (normativas) {
            setFilter(normativas?.filter(e => e.nombre.toLowerCase().indexOf(search?.toLowerCase()) !== -1))
        }
    }, [search])

    useEffect(() => {
        if (normativas) {
            const filteredNormativas = normativas?.filter(e => {
                const yearFromFecha = parseInt(e.fecha.split('/')[2]);
                return yearFromFecha == selectYear;
            });
            setFilter(filteredNormativas)
        }
    }, [selectYear])

    useEffect(() => {
        if (normativas) {
            setFilter(normativas?.filter(e => e?.tipodedocumento_id == selectedOption));
        }
    }, [selectedOption])

    const columns = [
        {
            minWidth: '300px',
            sortable: true,
            name: 'Documentos',
            cell: row => {
                return (
                    <Grid container>
                        <Grid item sm={12} md={6} lg={6}>
                            <Typography
                                fontSize={25}
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#106CB2'
                                }}
                            >Doc:</Typography>
                            <Typography>{row?.nombre}</Typography>
                        </Grid>
                        <Grid item sm={12} md={6} lg={6}>
                            <Typography
                                fontSize={25}
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#106CB2'
                                }}
                            >Fecha:</Typography>
                            <Typography>{row?.fecha}</Typography>
                        </Grid>
                        <Grid item sm={12} md={12} lg={12}>
                            <Typography
                                fontSize={25}
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#106CB2'
                                }}
                            >Descripción:</Typography>
                            <Typography>{row?.descripcion}</Typography>
                        </Grid>

                    </Grid>
                )
            }
        },
        {
            sortable: true,
            name: 'Archivos',
            cell: row => {
                return (
                    <Box>
                        <Button
                            style={{
                                marginBottom: 4, marginTop: 4,
                                backgroundColor: '#289688', color: 'white',
                                // paddingLeft: 30, paddingRight: 20, margin: 0,
                                border: '1px solid #10A1EA', borderRadius: 5
                            }}
                            onClick={() => window.open(row?.archivo)}>
                            <PictureAsPdf />
                        </Button>
                    </Box>
                )
            }
        }
    ]

    return (
        <>
            <div className='mx-5'>
                <DataTable
                    noHeader
                    pagination
                    className='react-dataTable'
                    columns={columns}
                    data={filter ? filter : normativas}
                />
            </div>
        </>
    )
}

export default TablaNormativa