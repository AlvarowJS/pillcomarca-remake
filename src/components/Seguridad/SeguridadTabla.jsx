import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import bdMuni from '../../api/bdMuni'
import { Box, Button } from '@mui/material'
import { PictureAsPdf } from '@mui/icons-material'

const SeguridadTabla = () => {
    
    const [seguridads, setSeguridads] = useState()
    useEffect(() => {
        bdMuni.get('v1/seguridad')
            .then(res => setSeguridads(res.data))
            .catch(err => console.log(err))
    }, [])

    const columns = [
        {
            sortable: true,
            name: 'Nombre del Archivo',
            cell: row => {
                return (
                    <Box>
                        <h5>  {row?.nombre} </h5>

                    </Box>
                )
            }
        },
        {
            sortable: true,
            name: 'Fecha',
            cell: row => {
                return (
                    <Box>
                        <p>  {row?.fecha} </p>
                    </Box>
                )
            }
        },
        {
            sortable: true,
            name: 'Archivo Descargable',
            cell: row => {
                return (
                    <Box>
                        {/* <a className='resultado-card' href={item.archivo} target='_blank'>{item.nombre}</a> */}
                        <Button
                            style={{

                                marginBottom: 4, marginTop: 4,
                                backgroundColor: 'white', color: '#10A1EA',
                                paddingLeft: 30, paddingRight: 20,
                                border: '1px solid #10A1EA', borderRadius: 5
                            }}
                            onClick={() => window.open(row?.archivo)}>
                            <PictureAsPdf />
                            {row?.nombre}
                        </Button>


                    </Box>
                )
            }
        },

    ]
    return (
        <>
            <DataTable
                noHeader
                pagination
                className='react-dataTable'
                columns={columns}
                data={seguridads}
            />
        </>
    )
}

export default SeguridadTabla