import React from 'react'
import DataTable from 'react-data-table-component'
import { Box, Button, Typography } from '@mui/material'

const TableTramites = () => {
    const mesaPartes = () => {
        window.open('https://facilita.gob.pe/t/5689', '_blank');
    }
    const tramitesData = [
        {
            id: 1,
            procedimiento: 'Copia certificada de documentos existentes en expediente y en los archivos de la municipalidad por pagina',
            base: 'Ley 27444 Art. 160, * Ley 27444 Art. 160, inciso 1, Art. 55, inciso 3 (11/04/01)',
            plazo: '3 días',
            requisitos: '1. Solicitud según formato, especificando lo requerido. \n2. Copia simple de D.N.I. \n3. Pago por derecho de Trámite'
        }
    ]

    const columns = [
        {
            minWidth: '200px',
            sortable: true,
            name: 'Nombre de Procedimiento',
            // selector: row => row.procedimiento,
            cell: row => {
                return (
                    <div>
                        <Typography
                            sx={{
                                fontSize: 15
                            }}>
                            {row?.procedimiento}
                        </Typography>
                    </div>
                )
            }
        },
        {
            minWidth: '150px',
            sortable: true,
            name: 'Base Legal',
            // selector: row => row.base,
            cell: row => {
                return (
                    <div>
                        <Typography
                            sx={{
                                fontSize: 15
                            }}
                        >  {row?.base}
                        </Typography>
                    </div>
                )
            }
        },
        {
            minWidth: '100px',
            sortable: true,
            name: 'Plazo',
            selector: row => row.plazo,

        },
        {
            minWidth: '450px',
            sortable: true,
            name: 'Requisitos',
            // selector: row => row.requisitos,
            cell: row => {
                return (
                    <div>

                        <pre>
                            <Typography
                                sx={{
                                    fontSize: 15
                                }}
                            >
                                {row?.requisitos}
                            </Typography>

                        </pre>
                    </div>
                )
            }
        },

    ]
    return (
        <Box sx={{ marginTop: 2, overflowX: 'auto', paddingX: 5 }}>
            <Typography>
                En la siguiente página podrá ver todos los procedimientos que desee realizar. Una vez identificado el procedimiento que quiera llevar a cabo, debe tener todos los documentos que requiere, los requisitos, en un solo archivo para cargarlo en la
                <a onClick={mesaPartes} style={{
                    color: 'skyblue',
                    cursor: 'pointer'
                }}> mesa de partes virtual.</a>
                
            </Typography>
            <Button sx={{
                backgroundColor: '#12B1FA',
                color: 'white'
            }}>
                Mesa de Partes
            </Button>
            <DataTable
                noHeader
                pagination
                className='react-dataTable'
                columns={columns}
                data={tramitesData}
            />
        </Box>
    )
}

export default TableTramites