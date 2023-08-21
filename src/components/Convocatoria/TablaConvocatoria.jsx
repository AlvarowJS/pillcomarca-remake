import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import './style.css'
import bdMuni from '../../api/bdMuni'
import { Box, Button } from '@mui/material'
const TablaConvocatoria = () => {

    const [convocatorias, setConvocatorias] = useState()
    useEffect(() => {
        bdMuni.get('/v1/convocatoria')
            .then(res => setConvocatorias(res.data))
            .catch(err => console.log(err))

    }, [])
    const columns = [
        {
            sortable: true,
            name: 'Nombre del Proceso',
            cell: row => {
                return (
                    <div>
                        <h3
                            style={{}}
                        >  {row?.nombre}
                        </h3>
                        <Button
                            style={{
                                marginBottom: 4, marginTop: 4,
                                backgroundColor: '#FA353F', color: 'white',
                                paddingLeft: 30, paddingRight: 20,
                                border: '1px solid red', borderRadius: 5
                            }}
                        >
                            {row?.estado}
                        </Button>
                    </div>
                )
            }
        },
        {
            minWidth: '300px',
            sortable: true,
            name: 'Bases',
            cell: row => {
                return (
                    <Box >
                        {row?.conv_base?.map(item => (
                            <Box key={item.id} sx={{
                            }}>
                                {/* <a className='convocatoria-card' href={item.archivo} target='_blank'>{item.nombre}</a> */}
                                {/* <button className='btn btn-success' onClick={() => window.location.href = item.archivo}> */}
                                <Button
                                    style={{
                                        
                                        marginBottom: 4, marginTop: 4,
                                        backgroundColor: 'white', color: '#10A1EA',
                                        paddingLeft: 30, paddingRight: 20,
                                        border: '1px solid #10A1EA', borderRadius: 5
                                    }}
                                    onClick={() => window.open(item.archivo)}>
                                    {item.nombre}
                                </Button>
                            </Box>
                        ))}
                    </Box>
                )
            }
        },
        {
            minWidth: '300px',
            sortable: true,
            name: 'Resultado E. Curricular',
            cell: row => {
                return (
                    <div className='convocatoria'>
                        {row?.result_cv?.map(item => (
                            <div key={item.id}>

                                {/* <a className='entrevista-card' href={item.archivo} target='_blank'>{item.nombre}</a> */}
                                <Button
                                    style={{
                                        marginBottom: 4, marginTop: 10,
                                        backgroundColor: '#10A1EA', color: 'white',
                                        paddingLeft: 30, paddingRight: 20,
                                        border: '1px solid #10A1EA', borderRadius: 5
                                    }}
                                    onClick={() => window.open(item.archivo)}>
                                    {item.nombre}
                                </Button>
                            </div>
                        ))}
                    </div>
                )
            }
        },
        {
            minWidth: '300px',
            sortable: true,
            name: 'Resultado Final',
            cell: row => {
                return (
                    <div className='convocatoria'>
                        {row?.resultado?.map(item => (
                            <div key={item.id}>
                                {/* <a className='resultado-card' href={item.archivo} target='_blank'>{item.nombre}</a> */}
                                <Button
                                    style={{
                                        marginBottom: 4, marginTop: 4,
                                        backgroundColor: '#289688', color: 'white',
                                        paddingLeft: 30, paddingRight: 20, margin: 0,
                                        border: '1px solid #10A1EA', borderRadius: 5
                                    }}
                                    onClick={() => window.open(item.archivo)}>
                                    {item.nombre}
                                </Button>
                            </div>
                        ))}

                    </div>
                )
            }
        },

    ]
    return (
        <Box sx={{ marginTop: 2, overflowX: 'auto' }}>

            <DataTable
                noHeader
                pagination
                className='react-dataTable'
                columns={columns}
                data={convocatorias}
            />
        </Box>
    )
}

export default TablaConvocatoria